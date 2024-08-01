/* eslint-disable react/prop-types */
import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  // console.log(file);

  return (
    <div className="flex flex-col sm:flex-row new">
      <Sidebar />
      <div className="w-full newContainer">
        <Navbar />
        <div className="p-5 m-5 mt-16 shadow sm:mt-6 top shadow-slate-400">
          <h1 className="text-2xl font-semibold text-gray-400">{title}</h1>
        </div>
        <div className="flex flex-col p-4 m-5 shadow-md lg:flex-row shadow-slate-400 bottom">
          <div className="flex justify-center basis-1/3 left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="image"
              className="object-cover w-32 h-32 rounded-full"
            />
          </div>
          <div className="mt-8 lg:mt-0 right">
            <form className="flex flex-col flex-wrap justify-around lg:flex-row gap-7">
              <div className="formInput w-[40%]">
                <label className="flex items-center gap-1" htmlFor="file">
                  Image:{" "}
                  <DriveFolderUploadOutlinedIcon className="cursor-pointer" />
                </label>
                <input
                  className="w-full p-2 border-b border-gray-400"
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <div key={input.id} className="formInput w-full lg:w-[40%]">
                  <label>{input.label}</label>
                  <input
                    className="w-full p-1 border-b border-gray-400 outline-none"
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <button className="self-center w-24 p-2 mt-2 text-lg font-semibold text-white bg-blue-600 border-none rounded-lg cursor-pointer lg:basis-1/6">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
