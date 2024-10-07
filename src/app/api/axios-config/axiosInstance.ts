import axios, { AxiosInstance } from 'axios';

const baseUrl = process.env.BASE_URL;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${baseUrl}api/v1/`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true,
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken',
});

export default axiosInstance;

