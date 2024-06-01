import React from "react";
import HomePageImg from "../../assets/Home_Image.png";
import { BiLogoPlayStore } from "react-icons/bi";

const Home = () => {
  return (
    /*  <div className="mx-auto mt-12 w-[80%] max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10">
          <div className=" max-w-xl mt-80 space-y-8 text-center ">
            <h2 className="text-4xl font-bold">Download Now</h2>
            <span className="text-2xl font-bold">Lorel Ipsum</span>

            <button className="inline-flex items-center border p-2 rounded-md text-md font-semibold text-white bg-orange-700 hover:bg-orange-600">
              <BiLogoPlayStore className="inline" /> &nbsp; Download now
            </button>
          </div>
        </div>
        <div className="absolute inset-0 w-full">
          <img className="w-96" src={HomePageImg} alt="HomePage Image"></img>
        </div>
      </aside>
    </div> */

    <div className="flex mx-auto my-20 w-[80%] justify-between">
      <div>
        <img className="w-96" src={HomePageImg} alt="HomePage Image"></img>
      </div>
      <div className="flex flex-col items-end justify-end">
        <h2 className="text-5xl font-bold">Download Now</h2>
        <span className="text-3xl font-bold">Lorel Ipsum</span>

        <button className="inline-flex items-center border p-2 mt-6 rounded-md text-md font-semibold text-white bg-orange-700 hover:opacity-80">
          <BiLogoPlayStore className="inline" /> &nbsp; Download now
        </button>
      </div>
    </div>
  );
};

export default Home;
