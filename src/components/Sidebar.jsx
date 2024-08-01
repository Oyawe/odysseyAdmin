import { useState, useEffect } from "react";
import SidebarItems from "./SidebarItems";

export const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 10 ? setIsActive(true) : setIsActive(false);
    });
  });

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="bg-white dark:bg-[#222] border-gray-400 dark:border-gray-600 sm:w-64 sm:border-r sm:min-h-screen">
      <SidebarItems
        sidebar={sidebar}
        toggleSidebar={toggleSidebar}
        isActive={isActive}
      />
    </div>
  );
};
