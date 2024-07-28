import { Chart } from "../../components/Chart";
import Featured from "../../components/Featured";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import Widget from "../../components/Widget";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <Sidebar />
      <div id="home_container" className="sm:w-[100%]">
        <Navbar />
        <div className="flex flex-col flex-wrap gap-5 p-5 mt-7 sm:mt-0 sm:flex-row md:flex-col lg:flex-row">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="flex flex-col flex-wrap gap-6 p-5 charts sm:mt-0 sm:flex-row md:flex-col lg:flex-row">
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Home;
