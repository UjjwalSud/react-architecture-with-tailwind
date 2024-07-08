import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { localStorageKeys } from "../constants/localStorageKeys";
import { localStorageHelper } from "./localStorage";
import { systemRoutes } from "../constants/systemRoutes";

interface PostConfig extends AxiosRequestConfig {
  baseUrl: string;
}

const postConfig: PostConfig = {
  baseUrl: process.env.REACT_APP_BASE_URL || "",
  timeout: 10000, // Timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
  },
};

export const postAPI = async (
  url: string,
  data: any,
  onSuccess: (data: any, status: number) => void,
  onError: (error: any, status: number) => void
): Promise<void> => {
  try {
    const token = localStorageHelper.getItem(localStorageKeys.JWT_TOKEN);
    const headers = {
      ...postConfig.headers,
      Authorization: token ? `Bearer ${token}` : undefined,
    };

    const config: AxiosRequestConfig = {
      ...postConfig,
      url: `${postConfig.baseUrl}/${url}`,
      headers,
      data,
    };

    const response: AxiosResponse = await axios(config);
    onSuccess(response.data, response.status);
  } catch (error: any) {
    if (error.response) {
      const status = error.response ? error.response.status : 500;
      if (status === 401 || status === 403) {
        window.location.href = systemRoutes.LOGIN;
      }
      onError(error.response.data, error.response.status);
    } else {
      onError(error.message + " " + error.code, 500);
      //onError("Unknown error occurred", 500);
    }
  }
};
