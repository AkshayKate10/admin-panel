import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { mockData } from "../Constants/constants";
import * as action from "../Store/Actions";

import Filters from "./Filters";
import Table from "./Table";

function Main() {
  const dispatch = useDispatch();

  const filteredRows = useSelector((state) => state.filteredRows);
  const allRows = useSelector((state) => state.allRows);

  useEffect(() => {
    dispatch({ type: action.SET_DATA, value: mockData });
  }, []);
  return (
    <div>
      <Filters allRows={allRows} />
      <Table filteredRows={filteredRows} />
    </div>
  );
}
export default Main;
