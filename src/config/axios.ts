import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(async (config: AxiosRequestConfig) => config);
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (err) => {
    throw new Error(err);
  }
);

export default axiosInstance;
