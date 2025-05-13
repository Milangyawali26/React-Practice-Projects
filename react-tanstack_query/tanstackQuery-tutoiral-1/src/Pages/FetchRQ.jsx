import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost, fetchPosts, updatePost } from "../API/api";
import { NavLink } from "react-router-dom";

const FetchRQ = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const queryClient = useQueryClient(); // Use `useQueryClient` for cache management

  // Fetch posts with pagination
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts", pageNumber],
    queryFn: () => fetchPosts(pageNumber),
    keepPreviousData: true, // Retain old data during fetch
    refetchInterval: 5000,
  });


  //  Deleting Posts
  const deleteMutation = useMutation({
    mutationFn: deletePost,
    onMutate: async (id) => {
      await queryClient.cancelQueries(["posts", pageNumber]);
      const previousData = queryClient.getQueryData(["posts", pageNumber]);
      // Optimistically remove the deleted post from UI
      queryClient.setQueryData(["posts", pageNumber], (oldData) =>
        oldData ? oldData.filter((post) => post.id !== id) : []
      );
      return { previousData };
    },
    onError: (err, id, context) => {
      // Revert to previous state in case of an error
                        // ["posts", pageNumber] below is QueryKey
      queryClient.setQueryData(["posts", pageNumber], context.previousData);
    },
  });

  const updateMutation = useMutation({
    mutationFn: (id)=> updatePost(id),

    // apiData = 1st parameter = is used to get the data passed to update 
    /// postId = 2nd parameter = the argument passed on function call 
    onSuccess:(apiData,postId)=>{
      console.log(apiData,postId)

          // to get access to local cached memoery data
           queryClient.setQueryData(['posts',pageNumber],(postData)=>{
            return postData?.map((currPost)=>{
              return currPost.id===postId ? {...currPost , title:apiData.data.title}: {...currPost};
            })
           })
    },


   
  });



  if (isPending) return <p className="text-center text-lg">Loading...</p>;
  if (isError)
    return (
      <p className="text-center text-lg text-red-500">
        Error fetching data. {error.message || "Something went wrong!"}
      </p>
    );

  return (
    <div>
      <div className="mx-5 my-2">
        <ul className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data?.map(({ id, title, body }) => (
            <li key={id} className="bg-amber-100 rounded-2xl px-4 py-6">
              <NavLink to={`/rq/${id}`} className="flex flex-col gap-2">
                <h4>{id}.</h4>
                <h5 className="font-medium">{title}</h5>
                <p>{body}</p>
              </NavLink>
              {/* Delete Button */}
              <button
                onClick={() => deleteMutation.mutate(id)}
                className="py-2 px-4 bg-red-400 text-xl font-medium hover:bg-red-600 rounded-lg hover:cursor-pointer"
              >
                Delete
              </button>
              <button
                onClick={() => updateMutation.mutate(id)}
                className="py-2 mx-4 px-4 bg-green-400 text-xl font-medium hover:bg-green-600 rounded-lg hover:cursor-pointer"
              >
                Update
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Pagination Bar */}
      <div className="fixed bottom-4 left-0 w-full bg-white shadow-md py-4 flex justify-center items-center gap-4">
        <button
          disabled={pageNumber === 0}
          className={`px-4 py-2 text-lg rounded-lg transition-all ${
            pageNumber === 0
              ? "bg-gray-300 text-gray-900 cursor-not-allowed"
              : "bg-green-500 text-black hover:bg-green-700 cursor-pointer"
          }`}
          onClick={() => setPageNumber((prev) => Math.max(prev - 1, 0))}
        >
          Previous
        </button>
        <h2 className="text-lg font-semibold">{pageNumber + 1}</h2>
        <button
          className="px-4 py-2 text-lg bg-green-500 text-black rounded-lg hover:bg-green-700 cursor-pointer transition-all"
          onClick={() => setPageNumber((prev) => prev + 1)}
        >
          Next
        </button>
        
      </div>
    </div>
  );
};

export default FetchRQ;
