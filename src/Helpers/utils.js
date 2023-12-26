import moment from "moment";

const getMinDate = (allRows) => {
  const dateFormat = allRows.map((row) => row.dateFormat);
  const minDate = Math.min(...dateFormat);
  return moment(minDate, "YYYYMMDD").format("YYYY-MM-DD");
};

const getMaxDate = (allRows) => {
  const dateFormat = allRows.map((row) => row.dateFormat);
  const maxDate = Math.max(...dateFormat);
  return moment(maxDate, "YYYYMMDD").format("YYYY-MM-DD");
};

const validateDates = (startDate, endDate, allRows) => {
  const dateFormat = allRows.map((row) => row.dateFormat);
  let errorMessage = "",
    isError = false;
  const minDate = Math.min(...dateFormat);
  const maxDate = Math.max(...dateFormat);
  const fromDate =
    startDate !== ""
      ? Number(moment(startDate, "YYYY-MM-DD").format("YYYYMMDD"))
      : "";
  const toDate =
    endDate !== ""
      ? Number(moment(endDate, "YYYY-MM-DD").format("YYYYMMDD"))
      : "";
  if (fromDate || toDate) {
    if (fromDate && toDate && fromDate > toDate) {
      errorMessage = '"From Date" should be before than "To Date"';
      isError = true;
    }
    if (fromDate && fromDate < minDate) {
      errorMessage = '"From Date" should be greater than Minimum Date';
      isError = true;
    }
    if (toDate && toDate < minDate) {
      errorMessage = '"To Date" should be greater than Minimum Date';
      isError = true;
    }
    if (fromDate && fromDate > maxDate) {
      errorMessage = '"From Date" should be before than Maximum Date';
      isError = true;
    }
    if (toDate && toDate > maxDate) {
      errorMessage = '"To Date" should be before than Maximum Date';
      isError = true;
    }
  }

  return { errorMessage, isError };
};

export { getMinDate, getMaxDate, validateDates };
