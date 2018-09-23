import React from "react";

const TableRow = ({ data, headers }) => {
  return (
        <tr>
            {
                headers.map((header, index) => {
                    if (typeof data[header] == 'object') {
                    return <td key={index}>{data[header].value}</td>
                    } else {
                        return <td key={index}>{data[header]}</td>                    
                    }
                })
            }
        </tr>
    );    
};

TableRow.defaultProps = {
    data: {},
    headers: []
};

export default TableRow;
