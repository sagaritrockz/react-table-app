import React from "react"
import Select from "../Elements/Select"
import Button from "../Elements/Button"
import "./ComboBox.css"

const ComboBox = ({
    filters,
    apply,
    clearFilter,
    secondaryFilterVal,
    primaryFilterVal,
    updateState,
    secondaryFilterKey,
    primaryFilterKey,
    primaryFilters,
    secondaryFilters,
    secondaryFiltersKey
}) => {
    const onApply = () => {
        apply();
    };
    const onClear = () => {
        clearFilter();
    };
    const onPrimaryFilterChange = (key, value) => {
        updateState(key, value);
        populateSecondaryFilter(value);
    };
    const populateSecondaryFilter = (value) => {
        if (value < 1) {
            updateState(secondaryFiltersKey, []);
            updateState(secondaryFilterKey, 0);
        } else {
            updateState(secondaryFiltersKey, filters[primaryFilters[value - 1]]);
            updateState(secondaryFilterKey, filters[primaryFilters[value - 1]][0].id);
        }
    };

    return (
        <div className="combo-box-container">
            <div className="combo-box">
                <Select
                    list={primaryFilters}
                    value={primaryFilterVal}
                    change={onPrimaryFilterChange}
                    name={primaryFilterKey}
                    show={true}
                />
                <Select
                    list={secondaryFilters}
                    value={secondaryFilterVal}
                    change={updateState}
                    name={secondaryFilterKey}
                    show={true}
                />
                <Button click={onApply} label="Apply" />
                <Button click={onClear} label="Clear" />
            </div>
        </div>
    );
};

ComboBox.defaultProps = {
    filters: [],
    apply: f => f,
    clearFilter: f => f ,
    secondaryFilterVal: "",
    primaryFilterVal: "",
    updateState: f => f,
    secondaryFilterKey: "",
    primaryFilterKey: "",
    primaryFilters: [],
    secondaryFilters: [],
    secondaryFiltersKey: ""
};

export default ComboBox;
