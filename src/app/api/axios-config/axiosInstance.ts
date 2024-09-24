import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://your-api-base-url',
  headers: {
    'Content-Type': 'application/json',
    // Add any other required headers here
  },
  timeout: 5000,
});

export default axiosInstance;