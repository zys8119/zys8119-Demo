import axios, { AxiosRequestConfig } from "axios";
const serve = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});
export default function (config?: AxiosRequestConfig) {
  return serve(config);
}
