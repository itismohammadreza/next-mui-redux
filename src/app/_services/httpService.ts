import axios, { AxiosRequestConfig } from "axios";
import { axiosInterceptor } from "@services/axiosInterceptor";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.timeout = +process.env.REACT_APP_REQUEST_TIMEOUT!;

type RequestConfig = Exclude<AxiosRequestConfig, "method" | "url" | "data">;

const get = <T>(endpoint: string, config?: RequestConfig) =>
  request<T>({
    method: "get",
    url: endpoint,
    ...config,
  }).then((res) => res.data);

const post = <T>(endpoint: string, data: any, config?: RequestConfig) =>
  request<T>({
    method: "post",
    url: endpoint,
    data,
    ...config,
  }).then((res) => res.data);

const put = <T>(endpoint: string, data: any, config?: RequestConfig) =>
  request<T>({
    method: "put",
    url: endpoint,
    data,
    ...config,
  }).then((res) => res.data);

const patch = <T>(endpoint: string, data: any, config?: RequestConfig) =>
  request<T>({
    method: "patch",
    url: endpoint,
    data,
    ...config,
  }).then((res) => res.data);

const del = <T>(endpoint: string, config?: RequestConfig) =>
  request<T>({
    method: "delete",
    url: endpoint,
    ...config,
  }).then((res) => res.data);

const request = <T>(config: AxiosRequestConfig) => axios<T>(config);

axiosInterceptor(axios);

export const httpService = {
  request,
  get,
  post,
  put,
  patch,
  del,
};
