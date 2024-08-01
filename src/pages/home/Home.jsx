import { Chart } from "../../components/Chart";
import Featured from "../../components/Featured";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { TableComp } from "../../components/Table";
import Widget from "../../components/Widget";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <Sidebar />
      <div id="home_container" className="sm:w-[600px] lg:w-[100%]">
        <Navbar />
        <div className="flex flex-col flex-wrap gap-5 p-5 mt-7 sm:mt-0 sm:flex-row md:flex-col lg:flex-row">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="flex flex-col flex-wrap gap-6 p-5 charts sm:mt-0 sm:flex-row md:flex-col lg:flex-row">
          <Featured />
          <Chart height={450} title="Last 6 Months (Revenue)" />
        </div>
        <div className="p-5 m-5 shadow-md listcontainer shadow-slate-400">
          <div className="p-2 mb-2 text-xl font-semibold text-gray-400 border-b border-gray-300 sm:mb-4 listTitle">
            Latest Transactions
          </div>
          <TableComp />
        </div>
      </div>
    </div>
  );
};

export default Home;
