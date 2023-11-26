const axios = require("axios");

// Function to make a simple HTTP PUT request using Axios
const updatePost = async () => {
  const postIdToUpdate = 1; // Replace with the ID of the post you want to update

  try {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${postIdToUpdate}`, {
      title: 'Updated Post',
      body: 'This is the updated content of the post.',
      userId: 1, // Assuming user ID 1 for the example
    });

    console.log('Post updated:', response.data);
  } catch (error) {
    console.error('Error updating post:', error.message);
  }
};

// Call the updatePost function
updatePost();