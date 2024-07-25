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
        className="hidden sm:flex flex-col relative overflow-y-scroll"
      >
        <div
          id="top"
          className="mt-3 flex items-center justify-center h-[50px] border-b border-gray-400"
        >
          <span
            id="logo"
            className=" text-2xl text-center font-bold text-blue-700 "
          >
            OdysseyAdmin
          </span>
        </div>
        <div id="center" className="pl-5">
          <ul>
            <p id="title" className=" text-lg font-sm text-gray-600 mt-4">
              MAIN
            </p>
            <li className="flex items-center p-2 gap-2 hover:bg-blue-100 cursor-pointer text-xl">
              <DashboardIcon className="text-blue-500" />
              <span className="text-[18px] ml-2">Dashboard</span>
            </li>
            <li className="flex items-center p-2 gap-2 hover:bg-blue-100 cursor-pointer text-xl">
              <PersonOutlineIcon className="text-blue-500" />
              <span className="text-[18px] ml-2">Users</span>
            </li>
            <li className="flex items-center p-2 gap-2 hover:bg-blue-100 cursor-pointer text-xl">
              <ProductionQuantityLimitsIcon className="text-blue-500" />
              <span className="text-[18px] ml-2">Products</span>
            </li>
            <li className="flex items-center p-2 gap-2 hover:bg-blue-100 cursor-pointer text-xl">
              <ShoppingBagIcon className="text-blue-500" />
              <span className="text-[18px] ml-2">Orders</span>
            </li>
            <li className="flex items-center p-2 gap-2 hover:bg-blue-100 cursor-pointer text-xl">
              <LocalShippingIcon className="text-blue-500" />
              <span className="text-[18px] ml-2">Delivery</span>
            </li>
            <p id="title" className=" text-lg font-sm text-gray-600 mt-4">
              USEFUL
            </p>
            <li className="flex items-center p-2 gap-2 hover:bg-blue-100 cursor-pointer text-xl">
              <InsertChartIcon className="text-blue-500" />
              <span className="text-[18px] ml-2">Stats</span>
            </li>
            <li className="flex items-center p-2 gap-2 hover:bg-blue-100 cursor-pointer text-xl">
              <NotificationsIcon className="text-blue-500" />
              <span className="text-[18px] ml-2">Notifications</span>
            </li>
            <p id="title" className=" text-lg font-sm text-gray-600 mt-4">
              SERVICE
            </p>
            <li className="flex items-center p-2 gap-2 hover:bg-blue-100 cursor-pointer text-xl">
              <MonitorHeartIcon className="text-blue-500" />
              <span className="text-[18px] ml-2">System Health</span>
            </li>
            <li className="flex items-center p-2 gap-2 hover:bg-blue-100 cursor-pointer text-xl">
              <QueryStatsIcon className="text-blue-500" />
              <span className="text-[18px] ml-2">Logs</span>
            </li>
            <li className="flex items-center p-2 gap-2 hover:bg-blue-100 cursor-pointer text-xl">
              <SettingsIcon className="text-blue-500" />
              <span className="text-[18px] ml-2">Settings</span>
            </li>
            <p id="title" className=" text-lg font-sm text-gray-600 mt-4">
              USER
            </p>
            <li className="flex items-center p-2 gap-2 hover:bg-blue-100 cursor-pointer text-xl">
              <AccountCircleIcon className="text-blue-500" />
              <span className="text-[18px] ml-2">Profile</span>
            </li>
            <li className="flex items-center p-2 gap-2 hover:bg-blue-100 cursor-pointer text-xl">
              <LogoutIcon className="text-blue-500" />
              <span className="text-[18px] ml-2">Logout</span>
            </li>
          </ul>
          <div id="bottom" className="flex items-center m-3">
            <div
              id="colorOption"
              className="w-6 h-6 rounded-md border border-blue-500 cursor-pointer bg-white m-1"
            ></div>
            <div
              id="colorOption"
              className="w-6 h-6 rounded-md border border-blue-500 cursor-pointer bg-black m-1"
            ></div>
          </div>
        </div>
      </div>
      {/* mobile screen configuration */}
      <div
        id="top"
        className="p-2 m-1 md:hidden lg:hidden flex items-center justify-between border-b "
      >
        <span
          id="logo"
          className=" text-xl text-center font-bold text-blue-700 "
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
        <div className="fixed right-0 w-56 h-[72%] p-3 border-l border-b rounded-md flex flex-col justify-center z-50">
          <div className="min-h-[100%] overflow-y-scroll">
            <ul className="">
              <p id="title" className=" text-lg font-sm text-gray-600">
                MAIN
              </p>
              <li className="flex items-center p-2 gap-2 hover:bg-blue-100 text-xl">
                <DashboardIcon className="text-blue-500" />
                <span className="text-[18px] ml-2">Dashboard</span>
              </li>
              <li className="flex items-center p-2 gap-2 hover:bg-blue-100 text-xl">
                <PersonOutlineIcon className="text-blue-500" />
                <span className="text-[18px] ml-2">Users</span>
              </li>
              <li className="flex items-center p-2 gap-2 hover:bg-blue-100 text-xl">
                <ProductionQuantityLimitsIcon className="text-blue-500" />
                <span className="text-[18px] ml-2">Products</span>
              </li>
              <li className="flex items-center p-2 gap-2 hover:bg-blue-100 text-xl">
                <ShoppingBagIcon className="text-blue-500" />
                <span className="text-[18px] ml-2">Orders</span>
              </li>
              <li className="flex items-center p-2 gap-2 hover:bg-blue-100 text-xl">
                <LocalShippingIcon className="text-blue-500" />
                <span className="text-[18px] ml-2">Delivery</span>
              </li>
              <p id="title" className=" text-lg font-sm text-gray-600 mt-4">
                USEFUL
              </p>
              <li className="flex items-center p-2 gap-2 hover:bg-blue-100 text-xl">
                <InsertChartIcon className="text-blue-500" />
                <span className="text-[18px] ml-2">Stats</span>
              </li>
              <li className="flex items-center p-2 gap-2 hover:bg-blue-100 text-xl">
                <NotificationsIcon className="text-blue-500" />
                <span className="text-[18px] ml-2">Notifications</span>
              </li>
              <p id="title" className=" text-lg font-sm text-gray-600 mt-4">
                SERVICE
              </p>
              <li className="flex items-center p-2 gap-2 hover:bg-blue-100 text-xl">
                <MonitorHeartIcon className="text-blue-500" />
                <span className="text-[18px] ml-2">System Health</span>
              </li>
              <li className="flex items-center p-2 gap-2 hover:bg-blue-100 text-xl">
                <QueryStatsIcon className="text-blue-500" />
                <span className="text-[18px] ml-2">Logs</span>
              </li>
              <li className="flex items-center p-2 gap-2 hover:bg-blue-100 text-xl">
                <SettingsIcon className="text-blue-500" />
                <span className="text-[18px] ml-2">Settings</span>
              </li>
              <p id="title" className=" text-lg font-sm text-gray-600 mt-4">
                USER
              </p>
              <li className="flex items-center p-2 gap-2 hover:bg-blue-100 text-xl">
                <AccountCircleIcon className="text-blue-500" />
                <span className="text-[18px] ml-2">Profile</span>
              </li>
              <li className="flex items-center p-2 gap-2 hover:bg-blue-100 text-xl">
                <LogoutIcon className="text-blue-500" />
                <span className="text-[18px] ml-2">Logout</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
