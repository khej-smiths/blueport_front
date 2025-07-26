import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import { useAuthStore } from "../stores/auth";
import { useCallback } from "react";
import { getErrorMessage } from "../lib/getErrorMessage";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { ROUTE } from "../constant/route";

const baseURL = (import.meta.env?.VITE_PUBLIC_API_ENDPOINT || "").replace(
  "/graphql",
  ""
);

export const instance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export function useAxiosInstance() {
  const { accessToken, logout } = useAuthStore();
  const navigate = useNavigate();

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
      if (error.response?.status === 401) {
        // TODO: refresh token으로 access token 토큰 재발급
        logout();
        navigate(ROUTE.LOGIN);
      }

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
