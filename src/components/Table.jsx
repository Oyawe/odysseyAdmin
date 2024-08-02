import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const TableComp = () => {
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online Payment",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online Payment",
      status: "Pending",
    },
  ];

  const sx = { fontFamily: "Nunito, sans-serif", fontSize: 18 };
  const sxF = { fontFamily: "Nunito, sans-serif", fontSize: 16 };

  return (
    <div className="overflow-y-scroll ">
      <TableContainer component={Paper} className="dark:bg-[#11111157]">
        <Table
          sx={{
            minWidth: 650,
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell sx={sx} className="tableCell dark:text-gray-300">
                <div className="">Tracking(ID)</div>
              </TableCell>
              <TableCell sx={sx} className="tableCell dark:text-gray-300">
                Product
              </TableCell>
              <TableCell sx={sx} className="tableCell dark:text-gray-300">
                Customer
              </TableCell>
              <TableCell sx={sx} className="tableCell dark:text-gray-300">
                Date
              </TableCell>
              <TableCell sx={sx} className="tableCell dark:text-gray-300">
                Amount
              </TableCell>
              <TableCell sx={sx} className="tableCell dark:text-gray-300">
                <div className="text-center md:text-center lg:text-start">
                  Payment Method
                </div>
              </TableCell>
              <TableCell sx={sx} className="tableCell dark:text-gray-300">
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell sx={sxF} className="tableCell dark:text-gray-300">
                  {row.id}
                </TableCell>
                <TableCell sx={sxF} className="tableCell dark:text-gray-300">
                  <div className="flex items-center space-y-0 cell-wrapper">
                    <img
                      src={row.img}
                      alt={row.product}
                      className="w-[32px] h-[32px] rounded-full mr-2 sm:mr-5 object-cover"
                    />
                    <div className="text-center">{row.product}</div>
                  </div>
                </TableCell>
                <TableCell sx={sxF} className="tableCell dark:text-gray-300">
                  {row.customer}
                </TableCell>
                <TableCell sx={sxF} className="tableCell dark:text-gray-300">
                  {row.date}
                </TableCell>
                <TableCell sx={sxF} className="tableCell dark:text-gray-300">
                  ${row.amount}
                </TableCell>
                <TableCell sx={sxF} className="tableCell dark:text-gray-300">
                  {row.method}
                </TableCell>
                <TableCell sx={sxF} className="tableCell dark:text-gray-300">
                  <span
                    className={`${
                      row.status === "Approved"
                        ? `text-green-600 bg-green-100 dark:text-white dark:bg-green-700`
                        : `text-yellow-600 bg-yellow-50 dark:text-white dark:bg-yellow-700`
                    }  p-2 rounded-lg `}
                  >
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
