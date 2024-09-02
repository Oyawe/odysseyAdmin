import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarModeContext } from "../context/darkModeContext";
import { AuthContext } from "../context/AuthContext";

// eslint-disable-next-line react/prop-types
export default function SidebarItems({ toggleSidebar, sidebar, isActive }) {
  const { dispatch: darkModeDispatch } = useContext(DarModeContext);
  const { dispatch: authDispatch } = useContext(AuthContext);
  return (
    <nav>
      <div id="sidebar" className="relative flex-col hidden sm:flex">
        <div
          id="top"
          className="mt-2 flex items-center justify-center h-[50px] border-b border-gray-400 dark:border-gray-600 bg-clip-text text-transparent"
        >
          <Link to="/">
            <span
              id="logo"
              className="text-2xl font-bold text-center text-transparent bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text "
            >
              OdysseyAdmin
            </span>
          </Link>
        </div>
        <div id="center" className="pl-5">
          <ul>
            <p
              id="title"
              className="mt-4 text-lg text-gray-600 dark:text-gray-400 font-sm"
            >
              MAIN
            </p>
            <Link to="/">
              <li className="flex items-center gap-2 p-2 text-xl cursor-pointer hover:bg-blue-100 dark:hover:bg-black">
                <DashboardIcon className="text-blue-500" />
                <span className="text-[18px] dark:text-gray-300 ml-2 text-gray-500">
                  Dashboard
                </span>
              </li>
            </Link>
            <Link to="/users">
              <li className="flex items-center gap-2 p-2 text-xl cursor-pointer hover:bg-blue-100 dark:hover:bg-black">
                <PersonOutlineIcon className="text-blue-500" />
                <span className="text-[18px] dark:text-gray-300 ml-2 text-gray-500">
                  Users
                </span>
              </li>
            </Link>
            <Link to="/products">
              <li className="flex items-center gap-2 p-2 text-xl cursor-pointer hover:bg-blue-100 dark:hover:bg-black">
                <ProductionQuantityLimitsIcon className="text-blue-500" />
                <span className="text-[18px] dark:text-gray-300 ml-2 text-gray-500">
                  Products
                </span>
              </li>
            </Link>
            <li className="flex items-center gap-2 p-2 text-xl cursor-pointer hover:bg-blue-100 dark:hover:bg-black">
              <ShoppingBagIcon className="text-blue-500" />
              <span className="text-[18px] dark:text-gray-300 ml-2 text-gray-500">
                Orders
              </span>
            </li>
            <li className="flex items-center gap-2 p-2 text-xl cursor-pointer hover:bg-blue-100 dark:hover:bg-black">
              <LocalShippingIcon className="text-blue-500" />
              <span className="text-[18px] dark:text-gray-300 ml-2 text-gray-500">
                Delivery
              </span>
            </li>
            <p
              id="title"
              className="mt-4 text-lg text-gray-600 dark:text-gray-400 font-sm"
            >
              USEFUL
            </p>
            <li className="flex items-center gap-2 p-2 text-xl cursor-pointer hover:bg-blue-100 dark:hover:bg-black">
              <InsertChartIcon className="text-blue-500" />
              <span className="text-[18px] dark:text-gray-300 ml-2 text-gray-500">
                Stats
              </span>
            </li>
            <li className="flex items-center gap-2 p-2 text-xl cursor-pointer hover:bg-blue-100 dark:hover:bg-black">
              <NotificationsIcon className="text-blue-500" />
              <span className="text-[18px] dark:text-gray-300 ml-2 text-gray-500">
                Notifications
              </span>
            </li>
            <p
              id="title"
              className="mt-4 text-gray-600 text-l dark:text-gray-400 font-sm"
            >
              SERVICE
            </p>
            <li className="flex items-center gap-2 p-2 text-xl cursor-pointer hover:bg-blue-100 dark:hover:bg-black">
              <MonitorHeartIcon className="text-blue-500" />
              <span className="text-[18px] dark:text-gray-300 ml-2 text-gray-500">
                System Health
              </span>
            </li>
            <li className="flex items-center gap-2 p-2 text-xl cursor-pointer hover:bg-blue-100 dark:hover:bg-black">
              <QueryStatsIcon className="text-blue-500" />
              <span className="text-[18px] dark:text-gray-300 ml-2 text-gray-500">
                Logs
              </span>
            </li>
            <li className="flex items-center gap-2 p-2 text-xl cursor-pointer hover:bg-blue-100 dark:hover:bg-black">
              <SettingsIcon className="text-blue-500" />
              <span className="text-[18px] dark:text-gray-300 ml-2 text-gray-500">
                Settings
              </span>
            </li>
            <p
              id="title"
              className="mt-4 text-lg text-gray-600 dark:text-gray-400 font-sm"
            >
              USER
            </p>
            <li className="flex items-center gap-2 p-2 text-xl cursor-pointer hover:bg-blue-100 dark:hover:bg-black">
              <AccountCircleIcon className="text-blue-500" />
              <span className="text-[18px] dark:text-gray-300 ml-2 text-gray-500">
                Profile
              </span>
            </li>
            <li
              onClick={() => {
                authDispatch({ type: "LOGOUT" });
              }}
              className="flex items-center gap-2 p-2 text-xl cursor-pointer hover:bg-blue-100 dark:hover:bg-black"
            >
              <LogoutIcon className="text-blue-500" />
              <span className="text-[18px] dark:text-gray-300 ml-2 text-gray-500">
                Logout
              </span>
            </li>
          </ul>
          <div id="bottom" className="flex items-center m-3">
            <div
              id="colorOption"
              className="w-6 h-6 m-1 bg-white border border-blue-500 rounded-md cursor-pointer"
              onClick={() => darkModeDispatch({ type: "LIGHT" })}
            ></div>
            <div
              id="colorOption"
              className="w-6 h-6 m-1 bg-black border border-blue-500 rounded-md cursor-pointer"
              onClick={(e) => {
                darkModeDispatch({ type: "DARK" });
                e.preventDefault();
              }}
            ></div>
          </div>
        </div>
      </div>
      {/* mobile screen configuration */}
      <div
        id="top"
        className={`${
          isActive ? "bg-white dark:bg-[#222] py-4 shadow-md" : "bg-none py-4"
        } fixed w-full z-50 transition-all flex items-center justify-between p-4 border-b dark:border-gray-600 md:hidden lg:hidden`}
      >
        <a href="#">
          <span
            id="logo"
            className="text-xl font-bold text-center text-transparent bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text "
          >
            OdysseyAdmin
          </span>
        </a>
        <div className="mr-1">
          <button onClick={toggleSidebar} className="">
            {sidebar ? (
              <CloseIcon className="dark:text-gray-400" />
            ) : (
              <MenuIcon className="dark:text-gray-400" />
            )}
          </button>
        </div>
      </div>
      {!isActive && sidebar && (
        <div
          className={`fixed overflow-y-scroll overscroll-none top-[70px] right-1 w-56 h-[530px] p-3 border-l border-b rounded-md flex flex-col justify-center z-20 bg-white dark:bg-[#222] `}
        >
          <div className="min-h-[100%]">
            <ul className="">
              <p
                id="title"
                className="text-lg text-gray-600 dark:text-gray-400 font-sm"
              >
                MAIN
              </p>
              <Link to="/">
                <li className="flex items-center gap-2 p-2 text-xl hover:bg-blue-100 dark:hover:bg-black">
                  <DashboardIcon className="text-blue-500" />
                  <span className="text-[18px] dark:text-gray-300 ml-2 text-gray-500">
                    Dashboard
                  </span>
                </li>
              </Link>
              <Link to="/users">
                <li className="flex items-center gap-2 p-2 text-xl hover:bg-blue-100 dark:hover:bg-black">
                  <PersonOutlineIcon className="text-blue-500" />
                  <span className="text-[18px] dark:text-gray-300 ml-2 text-gray-500">
                    Users
                  </span>
                </li>
              </Link>
              <Link to="/products">
                <li className="flex items-center gap-2 p-2 text-xl hover:bg-blue-100 dark:hover:bg-black">
                  <ProductionQuantityLimitsIcon className="text-blue-500" />
                  <span className="text-[18px] dark:text-gray-300 ml-2 text-gray-500">
                    Products
                  </span>
                </li>
              </Link>
              <li className="flex items-center gap-2 p-2 text-xl hover:bg-blue-100 dark:hover:bg-black">
                <ShoppingBagIcon className="text-blue-500" />
                <span className="text-[18px] dark:text-gray-300 ml-2 text-gray-500">
                  Orders
                </span>
              </li>
              <li className="flex items-center gap-2 p-2 text-xl hover:bg-blue-100 dark:hover:bg-black">
                <LocalShippingIcon className="text-blue-500" />
                <span className="text-[18px] dark:text-gray-300 ml-2 text-gray-500">
                  Delivery
                </span>
              </li>
              <p
                id="title"
                className="mt-4 text-lg text-gray-600 dark:text-gray-400 font-sm"
              >
                USEFUL
              </p>
              <li className="flex items-center gap-2 p-2 text-xl hover:bg-blue-100 dark:hover:bg-black">
                <InsertChartIcon className="text-blue-500" />
                <span className="text-[18px] dark:text-gray-300 ml-2 text-gray-500">
                  Stats
                </span>
              </li>
              <li className="flex items-center gap-2 p-2 text-xl hover:bg-blue-100 dark:hover:bg-black">
                <NotificationsIcon className="text-blue-500" />
                <span className="text-[18px] dark:text-gray-300 ml-2 text-gray-500">
                  Notifications
                </span>
              </li>
              <p
                id="title"
                className="mt-4 text-lg text-gray-600 dark:text-gray-400 font-sm"
              >
                SERVICE
              </p>
              <li className="flex items-center gap-2 p-2 text-xl hover:bg-blue-100 dark:hover:bg-black">
                <MonitorHeartIcon className="text-blue-500" />
                <span className="text-[18px] dark:text-gray-300 ml-2 text-gray-500">
                  System Health
                </span>
              </li>
              <li className="flex items-center gap-2 p-2 text-xl hover:bg-blue-100 dark:hover:bg-black">
                <QueryStatsIcon className="text-blue-500" />
                <span className="text-[18px] dark:text-gray-300 ml-2 text-gray-500">
                  Logs
                </span>
              </li>
              <li className="flex items-center gap-2 p-2 text-xl hover:bg-blue-100 dark:hover:bg-black">
                <SettingsIcon className="text-blue-500" />
                <span className="text-[18px] dark:text-gray-300 ml-2 text-gray-500">
                  Settings
                </span>
              </li>
              <p
                id="title"
                className="mt-4 text-lg text-gray-600 dark:text-gray-400 font-sm"
              >
                USER
              </p>
              <li className="flex items-center gap-2 p-2 text-xl hover:bg-blue-100 dark:hover:bg-black">
                <AccountCircleIcon className="text-blue-500" />
                <span className="text-[18px] dark:text-gray-300 ml-2 text-gray-500">
                  Profile
                </span>
              </li>
              <li
                onClick={() => {
                  authDispatch({ type: "LOGOUT" });
                }}
                className="flex items-center gap-2 p-2 text-xl hover:bg-blue-100 dark:hover:bg-black"
              >
                <LogoutIcon className="text-blue-500" />
                <span className="text-[18px] dark:text-gray-300 ml-2 text-gray-500">
                  Logout
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}
      {/* {isActive && !sidebar} */}
    </nav>
  );
}
