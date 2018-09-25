import React from "react";
import { array } from "prop-types";

const TableRow = ({ data, headers }) => {
	return data.map((item, i) => (
		<tr key={i}>
			{headers.map((header, ind) => {
				if (typeof item[header.key] == "object") {
					return <td key={ind}>{item[header.key].value}</td>;
				} else {
					return <td key={ind}>{item[header.key]}</td>;
				}
			})}
		</tr>
	));
};

TableRow.defaultProps = {
	data: [],
	headers: []
};

TableRow.propTypes = {
	data: array.isRequired,
	headers: array.isRequired
};

export default TableRow;
