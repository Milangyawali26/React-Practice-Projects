

// // step1 : import axios 
import axios from 'axios';

// step2: create instance
const api =axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
})

//  by axios method 
// // step 3: to fetch data
// export const fetchPosts=()=>{
//     return api.get('/posts');
// };



//  by React Query method 

// Step 3: Fetch function (must return data)
export const fetchPosts = async (pageNumber) => {
    const response = await api.get('/posts', { 
      params: { _start: pageNumber * 6, _limit: 6 }  // Corrected pagination
    });
    return response.data; // Return only data, not entire response object
  };
  
  // to fetch the inidividual data
  export const fetchIndividualPost = async (id)=>{
   try {
    const response = await api.get(`/posts/${id}`);
    console.log(response.data); 
    return response.status===200? response.data : Promise.reject("something went wrong !!");
    
   } catch (error) {
    console.log(error);
   }
  }


  export const deletePost =  (id) => {

     return api.delete(`/posts/${id}`);
   
  };
  

  export const updatePost =  (id) => {
    return api.patch(`/posts/${id}`,{title:"i have updated this title"});
 };
 


 /// for infinite scrolling 
 export const fetchUsers = async ({pageParam=1})=>{
    try {
      const response = await axios.get(`https://api.github.com/users?per_page=10&page=${pageParam}`);
      console.log(response.data)
      return response.data;
      
    } catch (error) {
      console.log(error)
    }
 }