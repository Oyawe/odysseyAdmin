/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  // console.log(file);
  const [data, setData] = useState({});
  const [percentage, setPercentage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      console.log(name);
      const storageRef = ref(storage, file.name);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPercentage(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  // console.log(data);

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      navigate(-1);
    } catch (err) {
      console.log(err);
    }

    // console.log(res.id);
  };

  return (
    <div className="flex flex-col dark:bg-[#222] sm:flex-row new">
      <Sidebar />
      <div className="w-full newContainer">
        <Navbar />
        <div className="p-5 m-5 mt-16 shadow sm:mt-6 top shadow-slate-400 dark:shadow-gray-600">
          <h1 className="text-2xl font-semibold text-gray-400">{title}</h1>
        </div>
        <div className="flex flex-col p-4 m-5 shadow-md lg:flex-row shadow-slate-400 dark:shadow-gray-600 bottom">
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
            <form
              onSubmit={handleAdd}
              className="flex flex-col flex-wrap justify-around lg:flex-row gap-7 dark:text-gray-300"
            >
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
                    id={input.id}
                    className="w-full p-1 border-b border-gray-400 outline-none dark:bg-transparent"
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                  />
                </div>
              ))}
              <button
                type="submit"
                disabled={percentage != null && percentage < 100}
                className="self-center w-24 p-2 mt-2 text-lg font-semibold text-white bg-blue-600 border-none rounded-lg cursor-pointer lg:basis-1/6 disabled:bg-gray-500 disabled:cursor-not-allowed"
              >
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
