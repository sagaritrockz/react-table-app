import React from "react"
import Select from "../Elements/Select"
import Button from "../Elements/Button"
import "./Pagination.css"

const Pagination = ({
    total,
    perPage,
    page,
    pages,
    pageKey,
    paginate,
    updateState,
    dropdownKey,
    dropdownVal
}) => {
    const onNext = e => {
        e.preventDefault();
        if ( (page + 1) <= pages) {
            paginate(pageKey, page + 1);
        }
    };
    const onPrev = e => {
        e.preventDefault();
        if ( (page - 1) >= 1) {
            paginate(pageKey, page - 1);
        }
    };
    const onSelect = (name, value) => {
        paginate(pageKey, parseInt(value, 10));
        updateState(name, value);
    };

    return (
        <div className="pagination-container">
            <div className="pagination">
                <Button label="Prev" name={pageKey} click={onPrev} />
                <Select
                    list={Array.from(new Array(pages), (val, index) => index + 1 )}
                    value={dropdownVal}
                    change={onSelect}
                    name={dropdownKey}
                />
                <Button label="Next" name={pageKey} click={onNext} />
            </div>
        </div>
    );
};

Pagination.defaultProps = {
    total: 10,
    perPage: 10,
    page: 1,
    pages: 1,
    pageKey: "",
    paginate: f => f,
    updateState: f => f,
    dropdownKey: "",
    dropdownVal: ""
};

export default Pagination;
