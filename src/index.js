import React from "react";
import ReactDOM from "react-dom";
import ComboBox from "./Components/ComboBox/ComboBox";
import Table from "./Components/Table/Table";
import Pagination from "./Components/Pagination/Pagination";
import Loader from "./Components/Loader/Loader";
import {FILTERS, HEADERS, API} from './Constants/Constants';
import "./style.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.primaryFilters = Object.keys(this.props.filters);
        this.queryParams = {
            format: 'json',
            per_page: 10,
            page: 1,
            region: '',
            incomeLevel: '',
            lendingType: ''
        };
        this.state = {
            _searchValue: 0,
            _searchOn: 0,
            _tableData: [],
            _secondaryFilters: [],
            _page: 1,
            _pages: 1,
            _perPage: 10,
            _total: 10,
            _loading: true
        };
    }

    componentDidMount = () => {
        this.makeRequest(this.props.apiUrl, this.buildQuery(this.queryParams))
            .then(response => response.json())
            .then(data => {
                if (data[0]) {
                    this.updateState('_page', data[0].page)
                    this.updateState('_pages', data[0].pages)
                    this.updateState('_perPage', data[0].per_page)
                    this.updateState('_total', data[0].total)
                }
                if (data[1]) {
                    this.updateState("_tableData", data[1])
                }
                this.updateState('_loading', false);
            });
    }

    makeRequest = (api, query) => {
        return fetch(`${api}?${query}`);
    }

    getData = (api, query) => {
        this.updateState('_loading', true);
        this.makeRequest(api, this.buildQuery(query))
            .then(response => response.json())
            .then(data => {
                if (data[0]) {
                    this.updateState('_page', data[0].page)
                    this.updateState('_pages', data[0].pages)
                    this.updateState('_perPage', data[0].per_page)
                    this.updateState('_total', data[0].total)
                }
                if (data[1]) {
                    this.updateState("_tableData", data[1])
                } else {
                    this.updateState("_tableData", []);
                }
                this.updateState('_loading', false);
            });
    }

    buildQuery = (query) => {
        return Object.keys(query)
            .filter(key => {
                if (query[key] == '') {
                    return false;
                }
                return true;
            })
            .map(key => {
                return key + '=' + query[key]
            })
            .join('&');
    }

    updateState = (key, value) => {
        this.setState({ [key]: value });
    }

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
    }

    clearFilterQueryParams = () => {
        this.queryParams.region = '';
        this.queryParams.incomeLevel = '';
        this.queryParams.lendingType = '';
    }
  
    clearFilter = () => {
        let {_searchValue} = this.state;
        if (_searchValue == "0") {
            return;
        }
        this.updateState('_secondaryFilters', []);
        this.updateState('_searchValue', 0);
        this.updateState('_searchOn', 0);
        this.clearFilterQueryParams();
        this.queryParams.page = 1;
        this.getData(this.props.apiUrl, this.queryParams);
        this.resetPagination();
    }

    paginate = (key, value) => {
        this.updateState('_page', value);
        this.queryParams.page = value;
        this.getData(this.props.apiUrl, this.queryParams);
    }

    resetPagination = () => {
        this.updateState('_page', 1 );
    }

    render = () => {
        const { filters, headers } = this.props;
        const { _secondaryFilters, _page, _pages, _perPage, _total, _loading } = this.state;

        return (
            <div>
                <ComboBox
                    filters = {filters}
                    apply = {this.onApply}
                    clearFilter = {this.clearFilter}
                    secondaryFilterVal = {this.state._searchValue}
                    primaryFilterVal = {this.state._searchOn}
                    updateState = {this.updateState}
                    secondaryFilterKey = "_searchValue"
                    primaryFilterKey = "_searchOn"
                    primaryFilters = {this.primaryFilters}
                    secondaryFilters = {_secondaryFilters}
                    secondaryFiltersKey = "_secondaryFilters"
                />
                <div className="table-container">
                    <Table
                        tableHeaders = {headers}
                        tableData = {this.state._tableData}
                    />
                </div>
                <Pagination
                    total = {_total}
                    perPage = {_perPage}
                    page = {_page}
                    pages = {_pages}
                    paginate = {this.paginate}
                    pageKey = "_page"
                    dropdownKey = "_paginationDropdown"
                    dropdownVal = {this.state._page}
                    updateState={this.updateState}
                />
                <Loader loading={_loading} />
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
    <App 
        filters={FILTERS} 
        headers={HEADERS}
        apiUrl={API}
    />,
    rootElement
);
