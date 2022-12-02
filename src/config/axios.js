import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4040/api",
});

axiosInstance.interceptors.request.use(function (config) {
   return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosInstance;
