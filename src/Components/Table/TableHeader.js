import React from "react";
import { array } from "prop-types";

const TableHeader = ({ headers }) => {
	return headers.map((item, index) => <th key={index}>{item.label}</th>);
};

TableHeader.defaultProps = {
	headers: []
};

TableHeader.propTypes = {
	headers: array.isRequired
};

export default TableHeader;
