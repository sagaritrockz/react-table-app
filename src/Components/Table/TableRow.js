import React from "react";
import { array } from 'prop-types'

const TableRow = ({ data, headers }) => {
    return (
        data.map((item, i) => (
            <tr key={i}>
                {headers.map((header, ind) => {
                    if (typeof item[header] == 'object') {
                        return <td key={ind}>{item[header].value}</td>
                    } else {
                        return <td key={ind}>{item[header]}</td>
                    }
                })}
            </tr>
        ))
    );    
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
