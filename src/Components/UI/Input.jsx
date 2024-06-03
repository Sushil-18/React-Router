import React from "react";

const Input = ({ type, placeholder, css = "" }) => {
  return (
    <>
      <input
        className={`border rounded-md border-black p-2 min-w-80 outline-none`}
        type={type}
        placeholder={placeholder}
        required
      ></input>
    </>
  );
};

export default Input;
