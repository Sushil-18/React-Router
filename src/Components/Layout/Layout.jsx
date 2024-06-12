import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  const navigator = useNavigate();
  return (
    <>
      <Navbar />
      {navigator.state === "loading" && (
        <>
          <div className="flex my-12 bg-stone-400 border rounded-lg">
            <div>
              <img className="m-4 border-0 h-80 rounded-md bg-white" />
            </div>
            <div className=" flex flex-col gap-2 items-center mx-auto my-4 border-0 justify-self-center ">
              <p className="bg-stone-200"></p>
              <p className="bg-stone-200"></p>
              <p className="bg-stone-200"></p>
            </div>
          </div>
        </>
      )}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
