import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosInstance } from "axios";
import { API_DOMAIN } from "./config";
import QueryString from "qs";
interface RequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
}
const defaultConfig: RequestConfig = {
  baseURL: API_DOMAIN,
  timeout: 120 * 1000,
  withCredentials: true,
  headers: {
    "content-type": "application/x-www-form-urlencoded",
  },
};
const request = (method: "get" | "post", url: string, params?: any, config?: AxiosRequestConfig) => {
  const finalConfig: RequestConfig = { ...defaultConfig, ...config };
  const instance: AxiosInstance = axios.create(finalConfig);
  instance.interceptors.response.use(
    response => {
      if (response.status === 200 && response.data.success) {
        return response.data;
      } else {
        console.log((response.data && response.data.msg) || "糟糕，出错了");
        return Promise.reject(response.data);
      }
    },
    error => {
      return Promise.reject(error);
    }
  );
  Object.keys(params as object).forEach(item => {
    if (item && (params[item] === undefined || params[item] === null)) {
      delete params[item];
    }
  });
  const data = finalConfig.headers["content-type"] === "application/json" ? params : QueryString.stringify(params);

  return instance({
    method,
    url,
    params: method === "get" && params,
    data: method === "post" && data,
  });
};
export default request;
