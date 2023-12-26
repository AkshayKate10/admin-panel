import moment from "moment";
import * as _ from "./Actions";
import { validateDates } from "../Helpers/utils";

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
  error: {
    isError: false,
    errorMessage: "",
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
      const {
        allRows,
        currentFilter: { fromDate, toDate },
      } = state;
      let errorMessage, isError;
      if (field === "fromDate") {
        let errorObj = validateDates(value, toDate, allRows);
        errorMessage = errorObj.errorMessage;
        isError = errorObj.isError;
      }
      if (field === "toDate") {
        let errorObj = validateDates(fromDate, value, allRows);
        errorMessage = errorObj.errorMessage;
        isError = errorObj.isError;
      }
      return {
        ...state,
        currentFilter: {
          ...state.currentFilter,
          [field]: value,
        },
        error: {
          errorMessage,
          isError,
        },
      };
    }

    case _.SET_FILTERED_ROWS: {
      const {
        allRows,
        currentFilter: { fromDate, toDate, branch, type, status },
      } = state;
      const newRows = allRows.filter((row) => {
        return (
          (fromDate === ""
            ? true
            : Number(moment(row.date, "DD/MM/YYYY").format("YYYYMMDD")) >=
              Number(moment(fromDate, "YYYY-MM-DD").format("YYYYMMDD"))) &&
          (toDate === ""
            ? true
            : Number(moment(row.date, "DD/MM/YYYY").format("YYYYMMDD")) <=
              Number(moment(toDate, "YYYY-MM-DD").format("YYYYMMDD"))) &&
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
      const { allRows } = state;
      const newState = allRows.filter((row) => row.id === value);

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
        error: initialstate.error,
      };
    }

    default:
      return state;
  }
}
export { reducer };
