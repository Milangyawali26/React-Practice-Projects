import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 justify-center  items-center h-screen w-screen ">
        <h1>404: page not found </h1>
        <Link to={"/"} className="flex flex-row gap-2 items-center justify-center hover:bg-amber-200 rounded-lg px-4 py-1">
        <FaArrowLeft />
          <button className="underline hover:cursor-pointer  ">
            go back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
