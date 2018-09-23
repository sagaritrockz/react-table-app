import React from "react"
import TableHeader from "./TableHeader"
import TableRow from "./TableRow"
import "./Table.css"

const Table = ({ tableData, tableHeaders }) => {
    return (
        <table className="table table-striped">
          <thead>
            <tr>
                {tableHeaders.map((item, index) => {
                    return <TableHeader key={index} header={item} />;
                })}
            </tr>
          </thead>
          <tbody>
                {tableData.map((item, index) => (
                    <TableRow key={index} data={item} headers={tableHeaders} />
                ))}
          </tbody>
        </table>
    );
};

Table.defaultProps = {
    tableData: [],
    tableHeaders: []
}

export default Table;
