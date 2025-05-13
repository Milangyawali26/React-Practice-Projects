import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Get all posts
export const getPost = async () => {
  try {
    return await api.get("/posts");
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts");
  }
};

// Delete a post
export const deletePost = async (id) => {
  try {
    const res = await api.delete(`/posts/${id}`);
    if (res.status === 200) {
      console.log(`Post with ID ${id} deleted successfully.`);
    }
    return res;
  } catch (error) {
    console.error(`Error deleting post with ID ${id}:`, error);
    throw new Error("Failed to delete post");
  }
};

// Add a new post
export const postData = (post) => {
  return api.post("/posts", post);
};

// Update a post (Fixed incorrect URL)
export const updateData = (id, post) => {
  return api.put(`/posts/${id}`, post);
};
