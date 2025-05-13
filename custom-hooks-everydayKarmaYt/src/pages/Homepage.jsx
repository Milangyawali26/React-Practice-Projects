import React from "react";
import useTitle from "../hooks/useTitle";

const Homepage = () => {
    useTitle("homePage title")
  return <div className="flex w-screen bg-amber-500 justify-center">Homepage Screen.</div>;
};

export default Homepage;