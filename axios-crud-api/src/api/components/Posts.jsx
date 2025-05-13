import { useEffect, useState } from "react";
import React from "react";
import { deletePost, getPost } from "../PostApi";
import Button from "../../common-components/Button";
import Form from "./Form";


const Posts = () => { 
   const [data, setData] = useState([]);
   const [updateDataApi ,setUpdateDataApi]=useState({});

  // Fetch all posts
  const getPostData = async () => {
    try {
      const res = await getPost();
      setData(res.data); // Update UI with fetched data
      console.log(res.data)
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  // Function to delete a post
  async function handleDeletePost(id) {
    console.log(`delete clicekd ${id} `)
    try {
      const res = await deletePost(id);

      if (res.status === 200) {
        // Manually remove deleted post from UI
        setData((prevData) => prevData.filter((post) => post.id !== id));
       
      } else {
        alert("Failed to delete post!");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("An error occurred while deleting the post.");
    }
  }

   const handleUpdatePost=(curElem)=>setUpdateDataApi(curElem);

  return (

    <section className="">
      {/* form field  */}
      <div className="mb-3 px-4 ">
        <Form data={data} setData={setData} updateDataApi={updateDataApi} setUpdateDataApi={setUpdateDataApi} ></Form>
      </div>

      {/* all data  */}
      <ul className=" grid  md:grid-cols-3 gap-3">
        {data.map((curElem,index) => {
          const { id, body, title } = curElem;
          return (
            <li key={id} className="border p-3  rounded-xl bg-gray-100 ">
              <h2 className="font-bold text-2xl mb-1">{index+1}.</h2>
              <p className="capitalize mb-3 font-medium">
                {" "}
                <strong className="font-medium text-xl"> Title </strong>:{" "}
                {title}
              </p>
              <p>
                {" "}
                <strong className="font-medium">News : </strong> <br /> {body}
              </p>

              {/* buttons  */}
              <div className=" flex gap-2 p-4">
                <Button onButtonClick={()=>handleUpdatePost(curElem)} title={"edit"} varient={"edit"} />
                <Button onButtonClick={()=>handleDeletePost(id)} title={"delete"} varient={"delete"} />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Posts;
