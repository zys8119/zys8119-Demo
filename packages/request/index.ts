import axios, { AxiosRequestConfig } from "axios";

const serve = axios.create({
  baseURL: import.meta.env.VITE_API,
  timeout: 0,
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
