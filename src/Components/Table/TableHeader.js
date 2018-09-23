import React from "react";

const TableHeader = ({ header }) => {
    return (<th>{header}</th>);
};

TableHeader.defaultProps = {
    header: ''
};

export default TableHeader;
