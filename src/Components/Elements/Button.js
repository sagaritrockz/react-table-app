import React from "react"
import { string, func } from 'prop-types'
import "./Button.css"

const Button = ({ label, click, name }) => {
    return (
        <button className="btn btn-custom" onClick={click} name={name}>
            {label}
        </button>
    );
};

Button.defaultProps = {
    label: "",
    click: f => f,
    name: ""
};

Button.propTypes = {
    label: string.isRequired,
    click: func.isRequired,
    name: string.isRequired
};

export default Button;
