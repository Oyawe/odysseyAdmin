import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import {
  AccountBalanceOutlined,
  KeyboardArrowDown,
  MonetizationOnOutlined,
  ShoppingCartCheckoutOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

// eslint-disable-next-line react/prop-types
export default function Widget({ type }) {
  const [amount, setAmount] = useState(null);
  const [diff, setDiff] = useState(null);

  let data;

  //   temporary
  // const amount = 100;
  // const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        query: "users",
        icon: <Person2OutlinedIcon className="text-red-600 icon" />,
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: <ShoppingCartCheckoutOutlined className="text-blue-600 icon" />,
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: <MonetizationOnOutlined className="text-green-600 icon" />,
      };
      break;
    case "product":
      data = {
        title: "PRODUCTS",
        query: "product",
        link: "See details",
        icon: <AccountBalanceOutlined className="text-purple-600 icon" />,
      };
      break;
    default:
      break;
  }

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

      const lastMonthQuery = query(
        collection(db, data.query),
        where("timeStamp", "<=", today),
        where("timeStamp", ">", lastMonth)
      );
      const prevMonthQuery = query(
        collection(db, "users"),
        where("timeStamp", "<=", lastMonth),
        where("timeStamp", ">", prevMonth)
      );

      const lastMonthData = await getDocs(lastMonthQuery);
      const prevMonthData = await getDocs(prevMonthQuery);

      setAmount(lastMonthData.docs.length);
      setDiff(
        ((lastMonthData.docs.length - prevMonthData.docs.length) /
          prevMonthData.docs.length) *
          100
      );
    };
    fetchData();
  });

  return (
    <div className="flex justify-between flex-1 rounded-lg shadow-md h-[200px] widget shadow-slate-400 dark:shadow-gray-600 p-7 text-lg mt-4 sm:mt-0">
      <div className="flex flex-col justify-between space-y-4 md:space-y-3 lg:space-y-0 ">
        <span className="text-lg text-gray-400 title">{data.title}</span>
        <span className="text-3xl font-extralight dark:text-gray-300">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="text-lg font-medium border-b border-gray-500 dark:text-gray-300 link">
          {data.link}
        </span>
      </div>
      <div className="flex flex-col items-center justify-between ">
        <div
          className={`flex items-center text-lg text-green-600 percentage ${
            diff < 0 ? "text-red-500" : ""
          }`}
        >
          {diff < 0 ? <KeyboardArrowDown /> : <KeyboardArrowUpIcon />}
          {/* <KeyboardArrowUpIcon /> */}
          {diff}%
        </div>
        <div
          className={`flex items-center self-end p-2 rounded-lg ${
            data.title === "USERS" ? `bg-red-100` : ""
          } ${data.title === "ORDERS" ? `bg-blue-100` : ""} ${
            data.title === "EARNINGS" ? `bg-green-100` : ""
          } ${data.title === "BALANCE" ? `bg-purple-100` : ""}  `}
        >
          {data.icon}
          {/* <Person2OutlinedIcon className="text-white" /> */}
        </div>
      </div>
    </div>
  );
}
