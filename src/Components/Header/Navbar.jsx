import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mt-12 px-8 py-4 shadow-md">
      <div>
        <p className="text-red-400 text-xl font-semibold">Logo</p>
      </div>
      <div>
        <ul className="flex justify-between gap-6">
          <li className="hove:text-red-300">Home</li>
          <li className="hove:text-red-300">About</li>
          <li className="hove:text-red-300">Contact</li>
          <li className="hove:text-red-300">Github</li>
        </ul>
      </div>
      <div className="flex jusify-center items-center gap-6">
        <p>Log In</p>
        <button className="border p-2 rounded-md bg-orange-700 text-white">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
