import React, { useEffect, useState } from "react";
import useTitle from "../hooks/useTitle";
import axios from "axios";
import useFetch from "../hooks/useFetch";

const Aboutus = () => {
 
  const [isLoading,fetchedData]= useFetch("https://jsonplaceholder.typicode.com/todos/");
  useTitle("About us title");
  return (
<div>
{
  isLoading ?"Loading...": fetchedData.length > 0 ? fetchedData.map((todo,index) => {
    return (
      <div key={todo.id}>
        {todo.title}
      </div>
    );
  }) : null
}

</div>
  );
};

export default Aboutus;