import React, { useState, useEffect } from "react";
import Button from "../../common-components/Button";
import { postData, updateData } from "../PostApi";

const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  let isEmpty = Object.keys(updateDataApi).length === 0;

  useEffect(() => {
    if (updateDataApi && Object.keys(updateDataApi).length > 0) {
      setFormData({
        title: updateDataApi.title || "",
        body: updateDataApi.body || "",
      });
    }
  }, [updateDataApi]);

  const addPostData = async (formData) => {
    try {
      const res = await postData(formData);
      console.log("Response:", res);
      if (res.status === 201) {
        setData([...data, res.data]);
        setFormData({ title: "", body: "" }); // Clear form after submission
      }
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };


  
  const updatePostData = async () => {
    console.log("Updating Post Data:", updateDataApi, formData); // Debugging
  
    if (!updateDataApi.id) {
      console.error("No post selected for update");
      return;
    }
  
    try {
      const res = await updateData(updateDataApi.id, formData);
      console.log("Update Response:", res);
  
      if (res.status === 200) {
        setData((prev) =>
          prev.map((curElem) =>
            curElem.id === updateDataApi.id ? res.data : curElem
          )
        );
  
        // Reset update state and form
        setUpdateDataApi({});
        setFormData({ title: "", body: "" });
      } else {
        console.error("Failed to update post");
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value.trim(); // Get button value correctly
    console.log("Button clicked:", action); // Debugging
  
    if (action === "Add") {
      addPostData(formData); // Ensure correct argument
    } else if (action === "Update") {
      updatePostData();
    }
  };
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="md:flex justify-start gap-3 align-start items-start p-4 rounded bg-gray-100">
          <div className="mb-2">
            <input
              className="border rounded text-black w-40 h-10"
              type="text"
              autoComplete="off"
              id="title"
              name="title"
              placeholder="Add title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              className="border rounded w-80 h-20"
              type="text"
              autoComplete="off"
              id="body"
              name="body"
              placeholder="Add Post"
              value={formData.body}
              onChange={handleChange}
            />
          </div>
          <Button

            value={isEmpty ? "Add" : "Update"}
            title={isEmpty ? "Add" : "Update"}
            varient="edit"
            type="submit"
          />
        </div>
      </form>
    </>
  );
};

export default Form;
