import SearchIcon from "@mui/icons-material/Search";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import good from "../assets/good.jpeg";

export const Navbar = () => {
  return (
    <div
      id="navbar"
      className="sm:border-b sm:px-4 px-2 max-w-min sm:max-w-full mx-auto border-gray-400 h-[50px] sm:mt-2 flex flex-col sm:flex-row items-center text-gray-600 text-xl"
    >
      <div
        id="wrapper"
        className="flex sm:flex-row flex-col-reverse items-center justify-between p-3 w-[100%]"
      >
        <div
          id="search"
          className="flex items-center justify-center px-1 mt-1 border border-gray-500 rounded-sm"
        >
          <input
            type="text"
            placeholder="Search..."
            className="w-[200px] text-sm bg-transparent outline-none"
          />
          <SearchIcon />
        </div>
        <div id="items" className="flex items-center space-y-1">
          <div className="flex items-center justify-center mr-7 md:hidden">
            <LanguageOutlinedIcon className="mb-1 text-lg" />
            <span className="text-lg text-center sm:text-lg">English</span>
          </div>
          <DarkModeOutlinedIcon className="text-lg mr-7" />
          <div className="relative flex items-center mr-7">
            <NotificationsNoneOutlinedIcon className="text-lg" />
            <span className="w-[15px] h-[17px] text-sm font-bold flex items-center justify-center text-white bg-red-400 rounded-[50%] absolute -top-1 -right-0">
              1
            </span>
          </div>
          <div className="relative flex items-center mr-7">
            <ChatBubbleOutlineOutlinedIcon className="text-lg" />
            <span className="w-[15px] h-[17px] text-sm font-bold flex items-center justify-center bg-red-400 text-white rounded-[50%] absolute -top-1 -right-1">
              2
            </span>
          </div>
          <ListOutlinedIcon className="text-lg mr-7" />
          <img
            src={good}
            alt="avatar"
            className="w-8 h-8 text-lg rounded-full mr-7"
          />
        </div>
      </div>
    </div>
  );
};
