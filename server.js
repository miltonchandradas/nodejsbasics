const axios = require("axios");

// Function to make a simple HTTP DELETE request using Axios
const deletePost = async () => {
  const postIdToDelete = 1; // Replace with the ID of the post you want to delete

  try {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`
    );
    console.log("Post deleted:", response.data);
  } catch (error) {
    console.error("Error deleting post:", error.message);
  }
};

// Call the deletePost function
deletePost();
