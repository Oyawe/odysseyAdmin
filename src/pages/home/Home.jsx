import { Sidebar } from "../../components/Sidebar";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row container">
      <Sidebar />
      <div id="home_container" className="sm:w-[88%]">
        container
      </div>
    </div>
  );
};

export default Home;
