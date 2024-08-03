export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="flex items-center cellWithImg">
          <img
            className="cellImg w-[32px] h-[32px] rounded-full object-cover mr-5"
            src={params.row.img}
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
  {
    field: "country",
    headerName: "Country",
    width: 160,
    // renderCell: (params) => {
    //   return (
    //     <span
    //       className={`${
    //         (params.row.status === "active" &&
    //           `text-green-600 bg-green-100 dark:bg-green-800 dark:text-gray-300`) ||
    //         (params.row.status === "pending" &&
    //           `text-yellow-600 bg-yellow-50 dark:bg-yellow-800 dark:text-gray-300`) ||
    //         (params.row.status === "passive" &&
    //           `text-red-600 bg-red-50 dark:bg-red-800 dark:text-gray-300`)
    //       }  px-2 py-1 rounded-lg  `}
    //     >
    //       {params.row.status}
    //     </span>
    //   );
    // },
  },
];
