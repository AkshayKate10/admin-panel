import React from "react";

import { branches, types, statuses } from "../Constants/constants";

function Filters() {
  return (
    <div>
      <h1>Filters</h1>
      <div className="allFilters">
        <div className="filter">
          <label>From</label>
          <input type="date" max={"2024-01-20"} />
        </div>
        <div className="filter">
          <label>To</label>
          <input type="date" max={"2024-01-20"} />
        </div>
        <div className="filter">
          <label htmlFor="branch">Branch</label>
          <select>
            {branches.map((item) => {
              return <option value={item.value}>{item.label}</option>;
            })}
          </select>
        </div>
        <div className="filter">
          <label>Type</label>
          <select>
            {types.map((item) => {
              return <option value={item.value}>{item.label}</option>;
            })}
          </select>
        </div>
        <div className="filter">
          <label>Status</label>
          <select>
            {statuses.map((item) => {
              return <option value={item.value}>{item.label}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
}
export default Filters;
