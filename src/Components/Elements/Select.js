import React from "react"
import "./Select.css"

const Select = ({ list, change, value, name, show }) => {

    const onChange = e => {
        e.preventDefault();
        change(e.target.name, e.target.value);
    };
    
    if (show) {
        return (
            <select
                className="select select-custom"
                onChange={onChange}
                name={name}
                value={value}
            >
                <option value={0}>Select</option>
                {list.map((item, index) => (
                    <option key={index} value={item.id ? item.id : index + 1} >
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
                    <option key={index} value={item.id ? item.id : index + 1} >
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
    value: '', 
    name: '',
    show: false
}

export default Select;
