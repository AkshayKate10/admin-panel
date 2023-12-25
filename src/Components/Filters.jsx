import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../Store/Actions";

import { branches, types, statuses } from "../Constants/constants";

function Filters({ allRows }) {
  const dispatch = useDispatch();

  const currentFilter = useSelector((state) => state.currentFilter);

  const { fromDate, toDate, branch, type, status } = currentFilter;

  const handleChange = (event, field) => {
    dispatch({
      type: action.SET_CURRENT_FILTERS,
      value: { value: event.target.value, field },
    });
  };
  useEffect(() => {
    dispatch({ type: action.SET_FILTERED_ROWS });
  }, [branch, type, status]);
  return (
    <div>
      <div>
        <label>Total ({allRows.length})</label>
      </div>
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
      </div>
    </div>
  );
}
export default Filters;
