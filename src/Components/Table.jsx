import React from "react";
import { isEmpty } from "lodash";
import { tableHeaders, sortLogo } from "../Constants/constants";
import { useDispatch } from "react-redux";
import * as action from "../Store/Actions";

function Table({ filteredRows, allRows }) {
  const dispatch = useDispatch();
  const deleteHandle = (id) => {
    dispatch({ type: action.DELETE_ROW, value: id });
  };
  return (
    <div>
      <table>
        <thead>
          <tr key="table-headings">
            {tableHeaders.map((tableHead, index) => {
              if (tableHead === "DATE")
                return (
                  <th key={index} className="date-header">
                    {tableHead} {sortLogo}
                  </th>
                );

              return <th key={index}>{tableHead}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {filteredRows &&
            filteredRows.map((row) => {
              return (
                <tr>
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
        </tbody>{" "}
      </table>
      {isEmpty(filteredRows) && (
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
