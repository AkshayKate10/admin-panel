import React, { useState, useEffect } from "react";
import * as action from "../Store/Actions";

import { branches, types, statuses } from "../Constants/constants";

function Filters({ allRows, dispatch, currentFilter }) {
  const [ID, setID] = useState("");

  const { fromDate, toDate, branch, type, status } = currentFilter;

  const handleChange = (event, field) => {
    dispatch({
      type: action.SET_CURRENT_FILTERS,
      value: { value: event.target.value, field },
    });
  };

  const filterRows = () => {
    dispatch({ type: action.FILTER_ROWS_BY_ID, value: Number(ID) });
  };

  const onReset = () => {
    setID("");
    dispatch({ type: action.RESET_ROWS });
  };

  useEffect(() => {
    dispatch({ type: action.SET_FILTERED_ROWS });
  }, [branch, type, status]);

  return (
    <div>
      <div className="allFilters">
        <div>
          <label>Total ({allRows.length})</label>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <input
            id="idInput"
            onChange={(e) => setID(e.target.value)}
            value={ID}
          />
          &nbsp;
          <button onClick={filterRows}>Search ID</button>
        </div>
      </div>
      <div className="allFilters">
        <div className="filter">
          <label>From</label>
          <input
            type="date"
            max={"2024-01-20"}
            onChange={(e) => handleChange(e, "fromDate")}
            value={fromDate}
          />
        </div>
        <div className="filter">
          <label>To</label>
          <input
            type="date"
            max={"2024-01-20"}
            onChange={(e) => handleChange(e, "toDate")}
            value={toDate}
          />
        </div>
        <div className="filter">
          <label htmlFor="branch">Branch</label>
          <select onChange={(e) => handleChange(e, "branch")} value={branch}>
            {branches.map((item) => {
              return <option value={item.value}>{item.label}</option>;
            })}
          </select>
        </div>
        <div className="filter">
          <label>Type</label>
          <select onChange={(e) => handleChange(e, "type")} value={type}>
            {types.map((item) => {
              return <option value={item.value}>{item.label}</option>;
            })}
          </select>
        </div>
        <div className="filter">
          <label>Status</label>
          <select onChange={(e) => handleChange(e, "status")} value={status}>
            {statuses.map((item) => {
              return <option value={item.value}>{item.label}</option>;
            })}
          </select>
        </div>
        <div className="filter" style={{ marginLeft: "auto" }}>
          <button onClick={onReset}>Clear Filter/Search</button>
        </div>
      </div>
    </div>
  );
}
export default Filters;
