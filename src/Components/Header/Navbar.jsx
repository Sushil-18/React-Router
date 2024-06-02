import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mt-8 px-8 py-4 shadow-md">
      <div>
        <p className="text-red-400 text-xl font-semibold">Logo</p>
      </div>
      <div>
        <ul className="flex justify-between gap-6">
          <Link to="/" className="hover:text-red-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-red-300">
            About
          </Link>
          <Link to="/contact" className="hover:text-red-300">
            Contact
          </Link>
          <Link to="/github" className="hover:text-red-300">
            Github
          </Link>
          {/* <li className="hove:text-red-300">Home</li>
          <li className="hove:text-red-300">About</li>
          <li className="hove:text-red-300">Contact</li>
          <li className="hove:text-red-300">Github</li> */}
        </ul>
      </div>
      <div className="flex jusify-center items-center gap-6">
        <p>Log In</p>
        <button className="border p-2 rounded-md bg-orange-700 text-white hover:opacity-80">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
