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

// eslint-disable-next-line react/prop-types
export default function SidebarItems({ toggleSidebar, sidebar }) {
  return (
    <nav>
      <div
        id="sidebar"
        className="relative flex-col hidden overflow-y-scroll sm:flex"
      >
        <div
          id="top"
          className="mt-2 flex items-center justify-center h-[50px] border-b border-gray-400"
        >
          <span
            id="logo"
            className="text-2xl font-bold text-center text-blue-700 "
          >
            OdysseyAdmin
          </span>
        </div>
        <div id="center" className="pl-5">
          <ul>
            <p id="title" className="mt-4 text-lg text-gray-600 font-sm">
              MAIN
            </p>
            <li className="flex items-center gap-2 p-2 text-xl cursor-pointer hover:bg-blue-100">
              <DashboardIcon className="text-blue-500" />
              <span className="text-[18px] ml-2 text-gray-500">Dashboard</span>
            </li>
            <li className="flex items-center gap-2 p-2 text-xl cursor-pointer hover:bg-blue-100">
              <PersonOutlineIcon className="text-blue-500" />
              <span className="text-[18px] ml-2 text-gray-500">Users</span>
            </li>
            <li className="flex items-center gap-2 p-2 text-xl cursor-pointer hover:bg-blue-100">
              <ProductionQuantityLimitsIcon className="text-blue-500" />
              <span className="text-[18px] ml-2 text-gray-500">Products</span>
            </li>
            <li className="flex items-center gap-2 p-2 text-xl cursor-pointer hover:bg-blue-100">
              <ShoppingBagIcon className="text-blue-500" />
              <span className="text-[18px] ml-2 text-gray-500">Orders</span>
            </li>
            <li className="flex items-center gap-2 p-2 text-xl cursor-pointer hover:bg-blue-100">
              <LocalShippingIcon className="text-blue-500" />
              <span className="text-[18px] ml-2 text-gray-500">Delivery</span>
            </li>
            <p id="title" className="mt-4 text-lg text-gray-600 font-sm">
              USEFUL
            </p>
            <li className="flex items-center gap-2 p-2 text-xl cursor-pointer hover:bg-blue-100">
              <InsertChartIcon className="text-blue-500" />
              <span className="text-[18px] ml-2 text-gray-500">Stats</span>
            </li>
            <li className="flex items-center gap-2 p-2 text-xl cursor-pointer hover:bg-blue-100">
              <NotificationsIcon className="text-blue-500" />
              <span className="text-[18px] ml-2 text-gray-500">
                Notifications
              </span>
            </li>
            <p id="title" className="mt-4 text-lg text-gray-600 font-sm">
              SERVICE
            </p>
            <li className="flex items-center gap-2 p-2 text-xl cursor-pointer hover:bg-blue-100">
              <MonitorHeartIcon className="text-blue-500" />
              <span className="text-[18px] ml-2 text-gray-500">
                System Health
              </span>
            </li>
            <li className="flex items-center gap-2 p-2 text-xl cursor-pointer hover:bg-blue-100">
              <QueryStatsIcon className="text-blue-500" />
              <span className="text-[18px] ml-2 text-gray-500">Logs</span>
            </li>
            <li className="flex items-center gap-2 p-2 text-xl cursor-pointer hover:bg-blue-100">
              <SettingsIcon className="text-blue-500" />
              <span className="text-[18px] ml-2 text-gray-500">Settings</span>
            </li>
            <p id="title" className="mt-4 text-lg text-gray-600 font-sm">
              USER
            </p>
            <li className="flex items-center gap-2 p-2 text-xl cursor-pointer hover:bg-blue-100">
              <AccountCircleIcon className="text-blue-500" />
              <span className="text-[18px] ml-2 text-gray-500">Profile</span>
            </li>
            <li className="flex items-center gap-2 p-2 text-xl cursor-pointer hover:bg-blue-100">
              <LogoutIcon className="text-blue-500" />
              <span className="text-[18px] ml-2 text-gray-500">Logout</span>
            </li>
          </ul>
          <div id="bottom" className="flex items-center m-3">
            <div
              id="colorOption"
              className="w-6 h-6 m-1 bg-white border border-blue-500 rounded-md cursor-pointer"
            ></div>
            <div
              id="colorOption"
              className="w-6 h-6 m-1 bg-black border border-blue-500 rounded-md cursor-pointer"
            ></div>
          </div>
        </div>
      </div>
      {/* mobile screen configuration */}
      <div
        id="top"
        className="flex items-center justify-between p-2 m-1 border-b md:hidden lg:hidden "
      >
        <span
          id="logo"
          className="text-xl font-bold text-center text-blue-700 "
        >
          OdysseyAdmin
        </span>
        <div className="mr-1">
          <button onClick={toggleSidebar}>
            {sidebar ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {sidebar && (
        <div className="fixed right-0 w-56 h-[72%] p-3 border-l border-b rounded-md flex flex-col justify-center z-10 bg-white">
          <div className="min-h-[100%] overflow-y-scroll ">
            <ul className="">
              <p id="title" className="text-lg text-gray-600 font-sm">
                MAIN
              </p>
              <li className="flex items-center gap-2 p-2 text-xl hover:bg-blue-100">
                <DashboardIcon className="text-blue-500" />
                <span className="text-[18px] ml-2 text-gray-500">
                  Dashboard
                </span>
              </li>
              <li className="flex items-center gap-2 p-2 text-xl hover:bg-blue-100">
                <PersonOutlineIcon className="text-blue-500" />
                <span className="text-[18px] ml-2 text-gray-500">Users</span>
              </li>
              <li className="flex items-center gap-2 p-2 text-xl hover:bg-blue-100">
                <ProductionQuantityLimitsIcon className="text-blue-500" />
                <span className="text-[18px] ml-2 text-gray-500">Products</span>
              </li>
              <li className="flex items-center gap-2 p-2 text-xl hover:bg-blue-100">
                <ShoppingBagIcon className="text-blue-500" />
                <span className="text-[18px] ml-2 text-gray-500">Orders</span>
              </li>
              <li className="flex items-center gap-2 p-2 text-xl hover:bg-blue-100">
                <LocalShippingIcon className="text-blue-500" />
                <span className="text-[18px] ml-2 text-gray-500">Delivery</span>
              </li>
              <p id="title" className="mt-4 text-lg text-gray-600 font-sm">
                USEFUL
              </p>
              <li className="flex items-center gap-2 p-2 text-xl hover:bg-blue-100">
                <InsertChartIcon className="text-blue-500" />
                <span className="text-[18px] ml-2 text-gray-500">Stats</span>
              </li>
              <li className="flex items-center gap-2 p-2 text-xl hover:bg-blue-100">
                <NotificationsIcon className="text-blue-500" />
                <span className="text-[18px] ml-2 text-gray-500">
                  Notifications
                </span>
              </li>
              <p id="title" className="mt-4 text-lg text-gray-600 font-sm">
                SERVICE
              </p>
              <li className="flex items-center gap-2 p-2 text-xl hover:bg-blue-100">
                <MonitorHeartIcon className="text-blue-500" />
                <span className="text-[18px] ml-2 text-gray-500">
                  System Health
                </span>
              </li>
              <li className="flex items-center gap-2 p-2 text-xl hover:bg-blue-100">
                <QueryStatsIcon className="text-blue-500" />
                <span className="text-[18px] ml-2 text-gray-500">Logs</span>
              </li>
              <li className="flex items-center gap-2 p-2 text-xl hover:bg-blue-100">
                <SettingsIcon className="text-blue-500" />
                <span className="text-[18px] ml-2 text-gray-500">Settings</span>
              </li>
              <p id="title" className="mt-4 text-lg text-gray-600 font-sm">
                USER
              </p>
              <li className="flex items-center gap-2 p-2 text-xl hover:bg-blue-100">
                <AccountCircleIcon className="text-blue-500" />
                <span className="text-[18px] ml-2 text-gray-500">Profile</span>
              </li>
              <li className="flex items-center gap-2 p-2 text-xl hover:bg-blue-100">
                <LogoutIcon className="text-blue-500" />
                <span className="text-[18px] ml-2 text-gray-500">Logout</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
