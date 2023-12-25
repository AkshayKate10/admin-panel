import * as _ from "./Actions";

const initialstate = {
  allRows: [],
  filteredRows: [],
  currentFilter: {
    fromDate: "",
    toDate: "",
    branch: "all",
    type: "all",
    status: "all",
  },
};

function reducer(state = initialstate, action) {
  switch (action.type) {
    case _.SET_DATA:
      return {
        ...state,
        allRows: action.value,
        filteredRows: action.value,
      };
    case _.SET_CURRENT_FILTERS:
      const {
        value: { value, field },
      } = action;
      return {
        ...state,
        currentFilter: {
          ...state.currentFilter,
          [field]: value,
        },
      };
    case _.SET_FILTERED_ROWS:
      const {
        allRows,
        currentFilter: { fromDate, toDate, branch, type, status },
      } = state;
      const newRows = allRows.filter((row) => {
        // row.fromDate === fromDate ||
        // row.toDate === toDate ||
        return (
          (branch === "all" ? true : row.branch === branch) &&
          (type === "all" ? true : row.type === type) &&
          (status === "all" ? true : row.status === status)
        );
      });
      return {
        ...state,
        filteredRows: newRows,
      };

    case _.DELETE_ROW:
      const updatedAllRows = state.allRows.filter(
        (row) => row.id !== action.value
      );
      const updatedFilteredRows = state.filteredRows.filter(
        (row) => row.id !== action.value
      );
      return {
        ...state,
        allRows: updatedAllRows,
        filteredRows: updatedFilteredRows,
      };

    default:
      return state;
  }
}
export { reducer };
