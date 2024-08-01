import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import {
  AccountBalanceOutlined,
  MonetizationOnOutlined,
  ShoppingCartCheckoutOutlined,
} from "@mui/icons-material";

// eslint-disable-next-line react/prop-types
export default function Widget({ type }) {
  let data;

  //   temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
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
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: <AccountBalanceOutlined className="text-purple-600 icon" />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="flex justify-between flex-1 rounded-lg shadow-md h-[200px] widget shadow-slate-400 p-7 text-lg mt-4 sm:mt-0">
      <div className="flex flex-col justify-between space-y-4 md:space-y-3 lg:space-y-0 ">
        <span className="text-lg text-gray-400 title">{data.title}</span>
        <span className="text-3xl font-extralight">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="text-lg font-medium border-b border-gray-500 link">
          {data.link}
        </span>
      </div>
      <div className="flex flex-col items-center justify-between ">
        <div className="flex items-center text-lg text-green-600 percentage">
          <KeyboardArrowUpIcon />
          {diff}
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
