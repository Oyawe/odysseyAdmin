import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../datasource";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { DarModeContext } from "../context/darkModeContext";

const DataTable = () => {
  const { darkMode } = useContext(DarModeContext);
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to="/users/test">
              <span className="p-2 mr-4 text-blue-900 border rounded-lg cursor-pointer border-blue-950 viewButton dark:border-none dark:text-gray-300">
                View
              </span>
            </Link>
            <span
              onClick={() => handleDelete(params.row.id)}
              className="p-2 text-red-600 border border-red-800 rounded-lg cursor-pointer deleteButton dark:border-none dark:text-red-500"
            >
              {" "}
              Delete
            </span>
          </>
        );
      },
    },
  ];

  return (
    <div className="p-5 datatable h-[800px] lg:h-[900px] w-full mt-12 sm:mt-0">
      <div className="flex items-center justify-between w-full px-3 mb-3 text-lg text-gray-500 dark:text-gray-300 dataTitile">
        Add New User
        <Link
          to="/users/new"
          className="p-2 text-sm text-green-600 border border-green-700 rounded-lg cursor-pointer dark:text-green-700"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        sx={{
          maxWidth: 2000,
          fontFamily: "Nunito, sans-serif",
          fontSize: 18,
          ".MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "&.MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-columnHeader": {
            fontWeight: 400,
            background: "transparent",
            backgroundColor: darkMode ? "#1c1c1c" : "white",
            alignItems: "start !important",
          },
          "& .MuiDataGrid-columnHeaders": {
            fontWeight: 400,
            background: "",
            alignItems: "start !important",
          },
        }}
        className="dark:bg-[#1c1c1c] dark:text-gray-300 sm:p-2 p-0 border-none"
      />
    </div>
  );
};

export default DataTable;
