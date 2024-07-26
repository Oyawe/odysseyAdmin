import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <Sidebar />
      <div id="home_container" className="sm:w-[100%]">
        <Navbar />
        home container
      </div>
    </div>
  );
};

export default Home;
