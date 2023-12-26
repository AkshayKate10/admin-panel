import moment from "moment";
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
  sortBy: "",
};

function reducer(state = initialstate, action) {
  switch (action.type) {
    case _.SET_DATA: {
      const unSortedRows = action.value.map((x) => {
        return {
          ...x,
          dateFormat: moment(x.date, "DD-MM-YYYY").format("YYYYMMDD"),
        };
      });
      return {
        ...state,
        allRows: unSortedRows,
        filteredRows: unSortedRows,
      };
    }
    case _.SET_CURRENT_FILTERS: {
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
    }
    case _.SET_FILTERED_ROWS: {
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
    }

    case _.DELETE_ROW: {
      const { allRows, filteredRows } = state;
      const updatedAllRows = allRows.filter((row) => row.id !== action.value);
      const updatedFilteredRows = filteredRows.filter(
        (row) => row.id !== action.value
      );
      return {
        ...state,
        allRows: updatedAllRows,
        filteredRows: updatedFilteredRows,
      };
    }
    case _.SORT_ROWS: {
      const { sortBy, filteredRows } = state;
      let sortedRows, sortType;

      if (sortBy === "" || sortBy === "decending") {
        sortedRows = filteredRows.sort((a, b) => a.dateFormat - b.dateFormat);
        sortType = "ascending";
      } else {
        sortedRows = filteredRows.sort((a, b) => b.dateFormat - a.dateFormat);
        sortType = "decending";
      }

      return {
        ...state,
        filteredRows: sortedRows,
        sortBy: sortType,
      };
    }

    case _.FILTER_ROWS_BY_ID: {
      const { value } = action;
      const { filteredRows } = state;
      const newState = filteredRows.filter((row) => row.id === value);

      return {
        ...state,
        filteredRows: newState,
      };
    }

    case _.RESET_ROWS: {
      const { allRows } = state;

      return {
        ...state,
        filteredRows: allRows,
        currentFilter: initialstate.currentFilter,
      };
    }
    default:
      return state;
  }
}
export { reducer };
