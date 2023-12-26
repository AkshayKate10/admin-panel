export const branches = [
  { label: "All", value: "all" },
  { label: "Thane", value: "Thane" },
  { label: "Navi Mumbai", value: "New Mumbai" },
  { label: "Mumbai", value: "Mumbai" },
  { label: "Kurla", value: "Kurla" },
  { label: "Vile Parle", value: "Vile Parle" },
  { label: "Lower Parel", value: "Lower Parel" },
  { label: "Andheri", value: "Andheri" },
  { label: "Byculla", value: "Byculla" },
];

export const types = [
  { label: "All", value: "all" },
  { label: "Full", value: "Full" },
  { label: "Short", value: "Short" },
];

export const statuses = [
  { label: "All", value: "all" },
  { label: "Approved", value: "Approved" },
  { label: "Pending", value: "Pending" },
  { label: "Rejected", value: "Rejected" },
];

export const tableHeaders = [
  { label: "ID", minWidth: "50px" },
  { label: "DATE", minWidth: "100px" },
  { label: "BRANCH", minWidth: "100px" },
  { label: "TYPE", minWidth: "50px" },
  { label: "AMOUNT (IN RUPEES)", minWidth: "150px" },
  { label: "BANK", minWidth: "200px" },
  { label: "REQUESTED BY (EMPLOYEE CODE)", minWidth: "200px" },
  { label: "STATUS", minWidth: "50px" },
  { label: "", minWidth: "10px" },
];

export const sortLogo = (
  <img
    width="16px"
    alt="sort-logo"
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABMElEQVR4nO2XvUrEQBSFAysqsqD4DKmmCTmfRbp5Bot5Ddu8gWC55VayYmNnJSwogpWVL2Qj100ghk3c7JJUcyEQEuaeb/Izc06SjFDAGbCWtAohzMbQ6BWX9C7p2w7gcTIINjN/k/RiswdugU/gyXt/NJl4mqYnwBIogfPRIWiJV9d+Aarz/SFCCDPv/ekQ8TbAQRDADbDoui/p2po6545b4/4AWGVZdlHBMgSgtGY7D+gB2KuIAMRXQPwIy/gbEhci4lJM3IyWcTtOxjYkeZ5fmV0y2/SfITH7ZTbM7FgPwMLs3CDzKWkl6asoissuABOX9Ax8OOfmXf3MyA4OJGELRBNgV/GDKmwgHmqIGmAS8W0Qku6A+8nEkwaEBcs6ZFrgtBAyiXgTwp4E8DqW+A8NJc6pxGYQDwAAAABJRU5ErkJggg=="
  ></img>
);
