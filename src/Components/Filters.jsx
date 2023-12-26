import React, { useState, useEffect } from "react";
import * as action from "../Store/Actions";

import { branches, types, statuses } from "../Constants/constants";
import { getMaxDate, getMinDate } from "../Helpers/utils";

function Filters({ allRows, dispatch, currentFilter, error }) {
  const [ID, setID] = useState("");

  const { fromDate, toDate, branch, type, status } = currentFilter;

  const { errorMessage } = error;

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
  }, [fromDate, toDate, branch, type, status]);

  return (
    <div>
      <div className="allFilters">
        <div>
          <label>
            <strong>Total ({allRows.length})</strong>
          </label>
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
            className="dateInput"
            type="date"
            max={getMaxDate(allRows)}
            min={getMinDate(allRows)}
            onChange={(e) => {
              handleChange(e, "fromDate");
              console.log(e.target.value);
            }}
            value={fromDate}
          />
        </div>
        <div className="filter">
          <label>To</label>
          <input
            className="dateInput"
            type="date"
            max={getMaxDate(allRows)}
            min={getMinDate(allRows)}
            onChange={(e) => handleChange(e, "toDate")}
            value={toDate}
          />
        </div>
        <div className="filter">
          <label htmlFor="branch">Branch</label>
          <select onChange={(e) => handleChange(e, "branch")} value={branch}>
            {branches.map((item, index) => {
              return (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
        <div className="filter">
          <label>Type</label>
          <select onChange={(e) => handleChange(e, "type")} value={type}>
            {types.map((item, index) => {
              return (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
        <div className="filter">
          <label>Status</label>
          <select onChange={(e) => handleChange(e, "status")} value={status}>
            {statuses.map((item, index) => {
              return (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
        <div className="filter" style={{ marginLeft: "auto" }}>
          <button onClick={onReset}>Clear Filter/Search</button>
        </div>
      </div>
      <div className="allFilters" style={{ color: "red" }}>
        {errorMessage}
      </div>
    </div>
  );
}
export default Filters;
