import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../datasource";
import { Link } from "react-router-dom";

const DataTable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <>
            <Link to="/users/test">
              <span className="p-2 mr-4 text-blue-900 border rounded-lg cursor-pointer border-blue-950 viewButton">
                View
              </span>
            </Link>
            <span className="p-2 text-red-600 border border-red-800 rounded-lg cursor-pointer deleteButton">
              Delete
            </span>
          </>
        );
      },
    },
  ];
  return (
    <div className="p-5 datatable h-[600px] sm:h-[1000px] w-full mt-12 sm:mt-0 ">
      <div className="flex items-center justify-between w-full px-3 mb-3 text-lg text-gray-500 dataTitile">
        Add New User
        <Link
          to="/users/new"
          className="p-2 text-sm text-green-600 border border-green-700 rounded-lg cursor-pointer"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        sx={{
          maxWidth: 1800,
          fontFamily: "Nunito, sans-serif",
          fontSize: 18,
        }}
      />
    </div>
  );
};

export default DataTable;
