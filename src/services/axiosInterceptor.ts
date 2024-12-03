import axios from "axios";
import { CustomAlert } from "../util/alertHandler";

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
          CustomAlert("Bad Request", "error");
          break;
        case 401:
          CustomAlert("Unauthorized", "error");
          break;
        case 404:
          CustomAlert("Not Found", "error");
          break;
        default:
          CustomAlert("An error occurred", "error");
      }
    } else if (error.request) {
      CustomAlert("No response received", "error");
    } else {
      CustomAlert("Error setting up request", "error");
    }
    return Promise.reject(error);
  }
);

export default api;
