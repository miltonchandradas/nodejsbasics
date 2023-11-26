const axios = require("axios");

// Function to make a simple HTTP POST request using Axios
const postData = async () => {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "New Post",
        body: "This is the content of the new post.",
        userId: 1, // Assuming user ID 1 for the example
      }
    );

    console.log("Post created:", response.data);
  } catch (error) {
    console.error("Error creating post:", error.message);
  }
};

// Call the postData function
postData();
