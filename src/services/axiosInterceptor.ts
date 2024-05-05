import {Axios} from "axios";

export const axiosInterceptor = (axiosInstance: Axios) => {
  axiosInstance.interceptors.request.use((config) => {
        config.headers.Authorization = localStorage.getItem("token");
        return config;
      },
      (error) => error,
  );

  axiosInstance.interceptors.response.use((response) => {
        if (response.data.status !== "Ok") {
          throw Error(response.data.status);
        }
        return response.data;
      },
      (error) => error,
  );
};
