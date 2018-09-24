import React from "react";
import { bool } from "prop-types";
import "./Loader.css";

const Loader = ({ loading }) => {
    return (
        <div
            className={
                "loader-container " + (loading ? "show-loader" : "hide-loader")
            }
        >
            <div className="loader" />
        </div>
    );
};

Loader.defaultProps = {
    loading: false
};

Loader.propTypes = {
    loading: bool
};

export default Loader;
