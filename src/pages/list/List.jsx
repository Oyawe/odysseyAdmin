import { Sidebar } from "../../components/Sidebar.jsx";
import { Navbar } from "../../components/Navbar.jsx";
import DataTable from "../../components/DataTable.jsx";

const List = () => {
  return (
    <div className="flex flex-col sm:flex-row dark:bg-[#222] list">
      <Sidebar />
      <div className="w-full overflow-x-auto listContainer">
        <Navbar />
        <DataTable />
      </div>
    </div>
  );
};

export default List;
