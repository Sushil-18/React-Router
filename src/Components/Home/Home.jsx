import React from "react";
import HomePageImg from "../../assets/Home_Image.png";

const Home = () => {
  return (
    <div className="flex justify-between mt-8">
      <aside className="relative">
        <div>
          <div>
            <h2 className="relative left-0 bottom-0">Download Now</h2>
            <span>Lorel Ipsum</span>
          </div>
          <button>Download now</button>
        </div>
        <img src={HomePageImg} alt="HomePage Image"></img>
      </aside>
    </div>
  );
};

export default Home;
