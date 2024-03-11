import axiosNpm from "axios";
import { lazyLoadFetch } from "@/utils/lazyLoadFetch.util";


export const axios = axiosNpm.create({
  baseURL: process.env.NEXT_PUBLIC_HTTP_BACKEND_URL,
  headers: { 'Content-Type': "application/json" },
});

axios.interceptors.response.use(
  response => response,
  async error => {
    // if server get error with status 429 (Too Many Requests)
    // wait second and try refetch
    if (error.response && error.response.status === 429) {
      const SECOND = 1000;

      const retryAfter = error.response.headers['retry-after'] || 1;
      const calcWaitTime = retryAfter * SECOND;

      return lazyLoadFetch(() => axios(error.config), calcWaitTime);
    }
    return Promise.reject(error);
  });
