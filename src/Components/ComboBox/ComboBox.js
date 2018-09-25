import React from "react"
import { array, string, func, object } from "prop-types"
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
    const populateSecondaryFilter = value => {
        if (value < 1) {
            updateState(secondaryFiltersKey, []);
            updateState(secondaryFilterKey, 0);
        } else {
            updateState(
                secondaryFiltersKey,
                filters[primaryFilters[value - 1]]
            );
            updateState(
                secondaryFilterKey,
                filters[primaryFilters[value - 1]][0].id
            );
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
                    defaultOption="Select"
                />
                <Select
                    list={secondaryFilters}
                    value={secondaryFilterVal}
                    change={updateState}
                    name={secondaryFilterKey}
                    defaultOption="Select"
                />
                <Button click={onApply} label="Apply" name="apply" />
                <Button click={onClear} label="Clear" name="clear" />
            </div>
        </div>
    );
};

ComboBox.defaultProps = {
    filters: [],
    apply: f => f,
    clearFilter: f => f,
    secondaryFilterVal: "",
    primaryFilterVal: "0",
    updateState: f => f,
    secondaryFilterKey: "",
    primaryFilterKey: "",
    primaryFilters: [],
    secondaryFilters: [],
    secondaryFiltersKey: ""
};

ComboBox.propTypes = {
    filters: object.isRequired,
    apply: func.isRequired,
    clearFilter: func.isRequired,
    secondaryFilterVal: string.isRequired,
    primaryFilterVal: string.isRequired,
    updateState: func.isRequired,
    secondaryFilterKey: string.isRequired,
    primaryFilterKey: string.isRequired,
    primaryFilters: array.isRequired,
    secondaryFilters: array.isRequired,
    secondaryFiltersKey: string.isRequired
};

export default ComboBox;
