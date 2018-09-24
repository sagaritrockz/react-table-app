import React from "react";
import { array, number, string, func } from "prop-types";
import "./Select.css";

const Select = ({ list, change, value, name, defaultOption }) => {
    const onChange = e => {
        e.preventDefault();
        change(e.target.name, e.target.value);
    };

    if (defaultOption !== "") {
        return (
            <select
                className="select select-custom"
                onChange={onChange}
                name={name}
                value={value}
            >
                <option value={0}>{defaultOption}</option>
                {list.map((item, index) => (
                    <option key={index} value={item.id ? item.id : index + 1}>
                        {item.value ? item.value : item}
                    </option>
                ))}
            </select>
        );
    } else {
        return (
            <select
                className="select select-custom"
                onChange={onChange}
                name={name}
                value={value}
            >
                {list.map((item, index) => (
                    <option key={index} value={item.id ? item.id : index + 1}>
                        {item.value ? item.value : item}
                    </option>
                ))}
            </select>
        );
    }
};

Select.defaultProps = {
    list: [],
    change: f => f,
    value: "0",
    name: "",
    defaultOption: ""
};

Select.propTypes = {
    list: array.isRequired,
    change: func.isRequired,
    value: string.isRequired,
    name: string.isRequired,
    defaultOption: string
};

export default Select;
