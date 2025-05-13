import React, { useState } from "react";
import useTitle from "../hooks/useTitle";
import useForm from "../hooks/useForm";

const Contactus = () => {
  useTitle("COntact us title");
  const[values,handleChange]=useForm();

  return (
    <div className="flex flex-col justify-center items-center">
      Contactus
      <br />
      <form action="" className="border-2 flex flex-col gap-2 p-2">
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="full name"
          className="border-1 px-3 py-1"
          
          onChange={(e)=> handleChange(e)}
        />
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="user name"
          className="border-1 px-3 py-1"
          onChange={(e)=> handleChange(e)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className="border-1 px-3 py-1"
          onChange={(e)=> handleChange(e)}
        />
      </form>
<p> <strong>Hello </strong> {values.fullName}</p>
    </div>
  );
};

export default Contactus;
