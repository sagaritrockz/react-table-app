import React from "react";
import ReactDOM from "react-dom";
import { array, object, string } from "prop-types";
import ComboBox from "./Components/ComboBox/ComboBox";
import Table from "./Components/Table/Table";
import Pagination from "./Components/Pagination/Pagination";
import Loader from "./Components/Loader/Loader";
import { FILTERS, HEADERS } from "./Constants/Constants";
import { api, configOptions } from "./config";
import "./style.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        let { startPage, perPage } = this.props.config;
        this.primaryFilters = Object.keys(this.props.filters);
        this.stateKeys = {
            _searchValue: "_searchValue",
            _searchOn: "_searchOn",
            _tableData: "_tableData",
            _secondaryFilters: "_secondaryFilters",
            _page: "_page",
            _pages: "_pages",
            _perPage: "_perPage",
            _total: "_total",
            _paginationDropdown: "_paginationDropdown",
            _loading: "_loading"
        };
        this.queryParams = {
            format: "json",
            per_page: perPage,
            page: startPage,
            region: "",
            incomeLevel: "",
            lendingType: ""
        };
        this.state = {
            [this.stateKeys._searchValue]: 0,
            [this.stateKeys._searchOn]: 0,
            [this.stateKeys._tableData]: [],
            [this.stateKeys._secondaryFilters]: [],
            [this.stateKeys._page]: startPage,
            [this.stateKeys._pages]: startPage,
            [this.stateKeys._perPage]: perPage,
            [this.stateKeys._total]: perPage,
            [this.stateKeys._paginationDropdown]: startPage,
            [this.stateKeys._loading]: true
        };
    }

    componentDidMount = () => {
        this.makeRequest(this.props.apiUrl, this.buildQuery(this.queryParams))
            .then(response => response.json())
            .then(data => {
                if (data[0]) {
                    this.updateState([this.stateKeys._page], data[0].page);
                    this.updateState([this.stateKeys._pages], data[0].pages);
                    this.updateState(
                        [this.stateKeys._perPage],
                        data[0].per_page
                    );
                    this.updateState([this.stateKeys._total], data[0].total);
                }
                if (data[1]) {
                    this.updateState([this.stateKeys._tableData], data[1]);
                }
                this.updateState([this.stateKeys._loading], false);
            });
    };

    makeRequest = (api, query) => {
        return fetch(`${api}?${query}`);
    };

    getData = (api, query) => {
        this.updateState([this.stateKeys._loading], true);
        this.makeRequest(api, this.buildQuery(query))
            .then(response => response.json())
            .then(data => {
                if (data[0]) {
                    this.updateState([this.stateKeys._page], data[0].page);
                    this.updateState([this.stateKeys._pages], data[0].pages);
                    this.updateState(
                        [this.stateKeys._perPage],
                        data[0].per_page
                    );
                    this.updateState([this.stateKeys._total], data[0].total);
                }
                if (data[1]) {
                    this.updateState([this.stateKeys._tableData], data[1]);
                } else {
                    this.updateState([this.stateKeys._tableData], []);
                }
                this.updateState([this.stateKeys._loading], false);
            });
    };

    buildQuery = query => {
        return Object.keys(query)
            .filter(key => {
                if (query[key] == "") {
                    return false;
                }
                return true;
            })
            .map(key => {
                return key + "=" + query[key];
            })
            .join("&");
    };

    updateState = (key, value) => {
        this.setState({ [key]: value });
    };

    onApply = () => {
        let { _searchValue, _searchOn } = this.state;
        this.query = this.defaultQuery;

        if (_searchValue == "0") {
            return;
        }

        this.clearFilterQueryParams();
        this.queryParams[this.primaryFilters[_searchOn - 1]] = _searchValue;
        this.queryParams.page = 1;
        this.getData(this.props.apiUrl, this.queryParams);
    };

    clearFilterQueryParams = () => {
        this.queryParams.region = "";
        this.queryParams.incomeLevel = "";
        this.queryParams.lendingType = "";
    };

    clearFilter = () => {
        let { _searchValue } = this.state;
        if (_searchValue == "0") {
            return;
        }
        this.updateState([this.stateKeys._secondaryFilters], []);
        this.updateState([this.stateKeys._searchValue], 0);
        this.updateState([this.stateKeys._searchOn], 0);
        this.clearFilterQueryParams();
        this.queryParams.page = 1;
        this.getData(this.props.apiUrl, this.queryParams);
        this.resetPagination();
    };

    paginate = (key, value) => {
        this.updateState([this.stateKeys._page], value);
        this.queryParams.page = value;
        this.getData(this.props.apiUrl, this.queryParams);
    };

    resetPagination = () => {
        this.updateState([this.stateKeys._page], 1);
    };

    render = () => {
        const { filters, headers } = this.props;
        const {
            _searchValue,
            _searchOn,
            _secondaryFilters,
            _tableData,
            _page,
            _pages,
            _perPage,
            _total,
            _loading
        } = this.state;

        return (
            <div>
                <ComboBox
                    filters={filters}
                    apply={this.onApply}
                    clearFilter={this.clearFilter}
                    secondaryFilterVal={String(_searchValue)}
                    primaryFilterVal={String(_searchOn)}
                    updateState={this.updateState}
                    secondaryFilterKey={this.stateKeys._searchValue}
                    primaryFilterKey={this.stateKeys._searchOn}
                    primaryFilters={this.primaryFilters}
                    secondaryFilters={_secondaryFilters}
                    secondaryFiltersKey={this.stateKeys._secondaryFilters}
                />
                <div className="table-container">
                    <Table tableHeaders={headers} tableData={_tableData} />
                </div>
                <Pagination
                    total={_total}
                    perPage={parseInt(_perPage, 10)}
                    page={_page}
                    pages={_pages}
                    paginate={this.paginate}
                    pageKey={this.stateKeys._page}
                    dropdownKey={this.stateKeys._paginationDropdown}
                    dropdownVal={String(_page)}
                    updateState={this.updateState}
                />
                <Loader loading={_loading} />
            </div>
        );
    };
}

App.defaultTypes = {
    filters: {},
    headers: [],
    apiUrl: ""
};

App.propTypes = {
    filters: object.isRequired,
    headers: array.isRequired,
    apiUrl: string.isRequired
};

const rootElement = document.getElementById("root");
ReactDOM.render(
    <App
        filters={FILTERS}
        headers={HEADERS}
        apiUrl={api}
        config={configOptions}
    />,
    rootElement
);
