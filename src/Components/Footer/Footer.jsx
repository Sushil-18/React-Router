import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between pb-4 shadow-sm">
        <div className="inline-flex items-center ml-8">
          <h2 className="text-red-400 text-xl font-semibold">Logo</h2>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col gap-2 items-center">
            <h4 className="text-lg mb-2 font-medium">Resource</h4>
            <p>Home</p>
            <p>About</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h4 className="text-lg mb-2 font-medium">Follow Us</h4>
            <p>Discord</p>
            <p>Github</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h4 className="text-lg mb-2 font-medium">Legel</h4>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between shadow-sm py-8">
        <p>@2024Sushilkumar.All rights reservered </p>
        <div className="flex gap-4">
          <FaFacebookF />
          <FaDiscord />
          <FaTwitter />
          <FaGithub />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
