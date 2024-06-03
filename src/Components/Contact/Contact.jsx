import React from "react";
import Input from "../UI/Input";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="flex justify-between w-[80%] mx-auto mt-52 mb-80">
      <div className="bg-stone-200 p-6 rounded-lg">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold">Get in touch:</h2>
          <p>Fill in the form to start a conversation</p>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <p>
            <IoLocationOutline className="inline" />
            &nbsp;&nbsp; Arbali, Tal-Mohol, Dist-Solapur
          </p>
          <p>
            <IoCallOutline className="inline" />
            &nbsp;&nbsp; +91 9970192924
          </p>
          <p>
            <CiMail className="inline" />{" "}
            &nbsp;&nbsp;sushilkumarwaghmar9@gmail.com
          </p>
        </div>
      </div>
      <form className="flex flex-col gap-4 ">
        <Input type="text" placeholder="Full Name"></Input>
        <Input type="email" placeholder="Email"></Input>
        <Input type="text" placeholder="Telephone Number"></Input>
        <button className="border rounded-md bg-orange-700 text-white p-2 max-w-28 self-center hover:opacity-80">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
