import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { fetchIndividualPost } from "../../../API/api";
import { useQuery } from "@tanstack/react-query";
import { FaArrowLeft } from "react-icons/fa";

const FetchIndividual = () => {
  // in genral we use useParams to get the dynamic id from the url
  // and then we use this id to fetch the individual data from the api
  // in General useeffect is used to fetch the data when the component mounts
  // const { id } = useParams();
  // useEffect(() => {
  //   fetchIndividualPost(id);
  // },);

  // but in react query we use useQuery to fetch the data
  const { id } = useParams();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["post",id], // Works like useState (caches data)
    queryFn: () => fetchIndividualPost(id), // Fetch function (works like useEffect)
  });

  if (isPending) return <p>Loading .... </p>;
  if (isError)
    return (
      <p>Error Fetching Data. {error?.message || " something went wrong !!"} </p>
    );
    

    return (
      <div className="flex flex-col justify-center items-center mt-12 px-4">
        <div className="bg-amber-100 w-full max-w-2xl rounded-2xl px-6 py-8 text-black shadow-lg">
          <h4 className="text-2xl font-semibold">{id}.</h4>
          <h5 className="font-medium text-xl">{data?.title || "No title available"}</h5>
          <p className="mt-4 text-lg">{data?.body || "No content available"}</p>
        </div>
  
        <div className="mt-6">
          <NavLink to="/rq">
            <button className="border text-2xl rounded-2xl px-5 py-3 bg-amber-200 hover:bg-amber-400 transition-all duration-200 ease-in-out flex items-center">
              <FaArrowLeft className="mr-2" />
              Go Back
            </button>
          </NavLink>
        </div>
      </div>
    );
};

export default FetchIndividual;
