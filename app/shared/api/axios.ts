import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import { useAuthStore } from "../stores/auth";
import { useCallback } from "react";
import { getErrorMessage } from "../lib/getErrorMessage";
import { toast } from "sonner";

export const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_API_ENDPOINT.replace("/graphql", ""),
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export function useAxiosInstance() {
  const { accessToken } = useAuthStore();

  const requestInterceptor = useCallback(
    (config: InternalAxiosRequestConfig) => {
      if (accessToken && config.headers) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    [accessToken]
  );

  const responseErrorInterceptor = useCallback(
    (error: AxiosError) => {
      const message = getErrorMessage(error);
      toast.error(message);
      return Promise.reject(error);
    },
    [accessToken]
  );

  const registerInterceptors = useCallback(() => {
    instance.interceptors.request.use(
      requestInterceptor,
      responseErrorInterceptor
    );
    instance.interceptors.response.use((response) => response);
  }, [accessToken]);

  registerInterceptors();
}
