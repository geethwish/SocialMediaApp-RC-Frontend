import axios from "axios";

// Get api endpoint from environment variables and set default value
const apiEndpoint =
  import.meta.env.VITE_API_ENDPOINT ?? "http://localhost:3000/api/";

console.log(apiEndpoint);

const api = axios.create({
  baseURL: apiEndpoint,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle response errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);

    if (error.response) {
      // Handle specific error status codes
      switch (error.response.status) {
        case 400:
          console.error("Bad Request");
          break;
        case 401:
          console.error("Unauthorized");
          // Redirect to login page or refresh token
          break;
        case 404:
          console.error("Not Found");
          break;
        default:
          console.error("An error occurred");
      }
    } else if (error.request) {
      console.error("No response received");
    } else {
      console.error("Error setting up request");
    }
    return Promise.reject(error);
  }
);

export default api;
