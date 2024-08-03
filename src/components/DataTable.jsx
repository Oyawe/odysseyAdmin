import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../datasource";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DarModeContext } from "../context/darkModeContext";
import {
  collection,
  // getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";

const DataTable = () => {
  const { darkMode } = useContext(DarModeContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   let list = [];
    //   try {
    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() });
    //       // console.log(doc.id, " => ", doc.data());
    //     });
    //     setData(list);
    //     // console.log(list);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // fetchData();

    //Listen to real time change
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapShot) => {
        // console.log("Current data: ", doc.data());
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (err) => {
        console.log(err);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  // console.log(data);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
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
