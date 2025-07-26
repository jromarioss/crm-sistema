import axios, { AxiosError } from "axios";
import { useCookie } from "@/data/hooks/useCookie";

const url = import.meta.env.VITE_BASEAPI;
const url_api_local = import.meta.env.VITE_LOCALAPI;

const apiType = import.meta.env.VITE_APITYPE;

export const useApi = () => {
  const { getCookie }  = useCookie();

  const token = getCookie("token") ?? "";

  const getErrorApi = (error: unknown) => {
    if (error instanceof AxiosError) {

      return error.response?.data?.message ?? error.message;
    }

    return String(error);
  }

  const returnApi = () => {
    switch (apiType) {
      case "dev":
        return `${url}/`;
      case "local":
        return url_api_local;
      default:
        return `${url}/`;
    }
  }

  const api = axios.create({
    baseURL: returnApi(),
    headers: token ? { Authorization: `Bearer ${token}` } : {}
  });

  return { api, getErrorApi }
}