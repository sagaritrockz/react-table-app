import React from "react"
import { array } from "prop-types"
import TableHeader from "./TableHeader"
import TableRow from "./TableRow"
import "./Table.css"

const Table = ({ tableData, tableHeaders }) => {
    return (
        <table className="table table-striped">
          <thead>
            <tr>
                <TableHeader headers={tableHeaders} />
            </tr>
          </thead>
          <tbody>
                <TableRow data={tableData} headers={tableHeaders} />
          </tbody>
        </table>
    );
};

Table.defaultProps = {
    tableData: [],
    tableHeaders: []
};

Table.propTypes = {
    tableData: array.isRequired,
    tableHeaders: array.isRequired
}

export default Table;
