import React from "react";

function Table() {
  return (
    <div>
      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            <th>a</th>
            <th>b</th>
            <th>c</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>X</td>
            <td>Y</td>
            <td>Z</td>
          </tr>
          <tr>
            <td>X1</td>
            <td>Y1</td>
            <td>Z1</td>
          </tr>
          <tr>
            <td>X2</td>
            <td>Y2</td>
            <td>Z2</td>
          </tr>
          <tr>
            <td>X3</td>
            <td>Y3</td>
            <td>Z3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Table;
