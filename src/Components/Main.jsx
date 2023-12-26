import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { mockData } from "../Mock/mock";
import * as action from "../Store/Actions";

import Filters from "./Filters";
import Table from "./Table";

function Main() {
  const dispatch = useDispatch();

  const filteredRows = useSelector((state) => state.filteredRows);
  const sortType = useSelector((state) => state.sortBy);
  const allRows = useSelector((state) => state.allRows);
  const currentFilter = useSelector((state) => state.currentFilter);

  useEffect(() => {
    dispatch({ type: action.SET_DATA, value: mockData });
  }, []);
  return (
    <div>
      <Filters
        allRows={allRows}
        dispatch={dispatch}
        currentFilter={currentFilter}
      />
      <Table
        filteredRows={filteredRows}
        sortType={sortType}
        dispatch={dispatch}
      />
    </div>
  );
}
export default Main;
