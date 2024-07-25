import { useState } from "react";
import SidebarItems from "./SidebarItems";

export const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="sm:w-64 sm:border-r border-gray-400 sm:min-h-screen bg-white">
      <SidebarItems sidebar={sidebar} toggleSidebar={toggleSidebar} />
    </div>
  );
};
