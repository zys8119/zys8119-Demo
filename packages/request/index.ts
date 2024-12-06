import axios, { AxiosRequestConfig } from "axios";

const serve = axios.create({
  baseURL: import.meta.env.VITE_API,
  timeout: 5000,
});
serve.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
serve.interceptors.response.use(
  (response) => {
    console.log(11);
    return response.data;
  },
  (error) => {
    $message.error(error.message);
    return Promise.reject(error);
  }
);
export function request(config?: AxiosRequestConfig) {
  return serve(config);
}
export default request;
