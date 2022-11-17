import axios from "axios";
import TokenService from "./TokenService";

const instance = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (
      !["/user/register", "/user/login"].includes(originalConfig.url) &&
      err.response
    ) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          await instance.get("/user/refresh-token");

          return instance(originalConfig);
        } catch (_error) {
          TokenService.removeAccessToken();
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  }
);

export default instance;
