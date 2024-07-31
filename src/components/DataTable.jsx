import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../datasource";

const DataTable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <>
            <span className="p-2 mr-4 text-blue-900 border cursor-pointer border-blue-950 viewButton rounded-xl">
              View
            </span>
            <span className="p-2 text-red-600 border border-red-800 cursor-pointer deleteButton rounded-xl">
              Delete
            </span>
          </>
        );
      },
    },
  ];
  return (
    <div className="p-5 datatable h-[600px] sm:h-[1000px] w-full mt-12 sm:mt-0 ">
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
          fontSize: 16,
        }}
      />
    </div>
  );
};

export default DataTable;
