import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { Chart } from "../../components/Chart";
import good from "../../assets/good.jpeg";
import { TableComp } from "../../components/Table";

const Single = () => {
  return (
    <div className="flex flex-col sm:flex-row single">
      <Sidebar />
      <div className="w-full overflow-x-auto singleContainer">
        <Navbar />
        <div className="flex flex-col gap-5 p-5 mt-12 sm:mt-0 lg:flex-row top">
          <div className="relative flex flex-col p-5 shadow-md basis-1/3 shadow-slate-400 left">
            <div className="absolute top-0 right-0 p-2 text-blue-500 rounded-bl-lg text-md bg-blue-50 editbutton ">
              Edit
            </div>
            <p className="mb-5 text-2xl text-gray-400 title">Information</p>
            <div className="flex flex-col items-center gap-5 sm:items-start lg:mt-3 sm:gap-10 sm:flex-row item">
              <img
                src={good}
                alt="pic"
                className="itemImg w-[100px] h-[100px] rounded-full object-cover"
              />
              <div className="w-full text-center sm:text-start details">
                <h1 className="mb-2 text-3xl font-semibold text-gray-700 itemTitile">
                  Ashley Cole
                </h1>
                <div className="mb-2 detailItem text-md">
                  <span className="mr-1 font-bold text-gray-700 itemKey">
                    Email:
                  </span>
                  <span className="itemValue">ashleycole@gmail.com</span>
                </div>
                <div className="mb-2 detailItem text-md">
                  <span className="mr-1 font-bold text-gray-700 itemKey">
                    Phone:
                  </span>
                  <span className="itemValue">+2349063401239</span>
                </div>
                <div className="mb-2 detailItem text-md">
                  <span className="mr-1 font-bold text-gray-700 itemKey">
                    Address:
                  </span>
                  <span className="itemValue">
                    No 13. Peace Estate. Ojurin Akobo. Ibadan
                  </span>
                </div>
                <div className="mb-2 detailItem text-md">
                  <span className="mr-1 font-bold text-gray-700 itemKey">
                    Country:
                  </span>
                  <span className="itemValue">Nigeria</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full right">
            <Chart height={270} title="User Expenditures (Last 6 Months)" />
          </div>
        </div>
        <div className="p-5 mx-5 my-1 shadow-md bottom shadow-slate-400">
          <p className="mb-5 text-2xl text-gray-400 title">Last Transactions</p>
          <TableComp />
        </div>
      </div>
    </div>
  );
};

export default Single;
