import React from "react";
import { isEmpty } from "lodash";
import { tableHeaders, sortLogo } from "../Constants/constants";
import * as action from "../Store/Actions";

function Table({ filteredRows, dispatch, error }) {
  const { isError } = error;

  const deleteHandle = (id) => {
    dispatch({ type: action.DELETE_ROW, value: id });
  };

  const sortData = () => {
    dispatch({
      type: action.SORT_ROWS,
    });
  };

  return (
    <div>
      <table>
        <thead>
          <tr key="table-headings">
            {tableHeaders.map((tableHead, index) => {
              if (tableHead.label === "DATE")
                return (
                  <th
                    key={index}
                    className="date-header"
                    onClick={sortData}
                    style={{ minWidth: tableHead.minWidth }}
                  >
                    {tableHead.label} {sortLogo}
                  </th>
                );

              return (
                <th key={index} style={{ minWidth: tableHead.minWidth }}>
                  {tableHead.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {!isError &&
            filteredRows &&
            filteredRows.map((row, index) => {
              return (
                <tr key={index}>
                  <td>{row.id}</td>
                  <td>{row.date}</td>
                  <td>{row.branch}</td>
                  <td>{row.type}</td>
                  <td>{row.amount}</td>
                  <td>{row.bank}</td>
                  <td>
                    {row.employeeName} <div>({row.employeeCode})</div>
                  </td>
                  <td>{row.status}</td>
                  <td>
                    <button onClick={() => deleteHandle(row.id)}>X</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {(isError || isEmpty(filteredRows)) && (
        <div
          style={{ textAlign: "center", marginTop: "1rem", fontSize: "large" }}
        >
          No data found
        </div>
      )}
    </div>
  );
}
export default Table;
