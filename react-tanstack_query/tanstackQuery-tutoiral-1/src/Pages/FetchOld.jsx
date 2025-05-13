import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../API/api';



const FetchOld = () => {

  const [posts,setPosts] =useState([]);

  //      in axios we will require even more like 

  // const[isLoading , setIsLoading] = useState(false);
  // const[isError, setIsError]=useState(false);

//  but using reactQuery or Tanstack(TNS) Query is optimzied or better way

  const getPostData= async()=>{
    try {
      const response = await fetchPosts();

      //in axios there is not need to convert response to json
      response.status===200 ? setPosts(response.data):[] ;

    } catch (error) {
      console.log(error)
      return [];
    }
  };

  useEffect(()=>{
    getPostData()
  },[])

  return (
    <div>
      <div className='mx-5 my-2'>
        <ul className='gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  '>
          {
            //  to handle with undifined data  add a question mark

            //        posts?.map((currElem)=>{ 

            // this is called optional chaining
            posts.map((currElem)=>{
              const {id,title,body}=currElem
              return(
                <li  className= 'bg-amber-100 rounded-2xl px-4 py-6'
                 key={id} >
                 <h5 className='font-medium'>{title}</h5>
                 <br />
                  <p>{body}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default FetchOld
