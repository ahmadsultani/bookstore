import axios, { AxiosHeaders, AxiosRequestConfig, AxiosResponse } from "axios";
import Cookies from "js-cookie";

interface ICallAPI extends AxiosRequestConfig {
  token?: string;
  serverToken?: string;
}

export default async function callAPI(config: ICallAPI) {
  const { url, method, data, token, serverToken } = config;
  let headers = {} as AxiosHeaders;

  headers["Content-Type"] = "application/json";

  if (serverToken) {
    headers.Authorization = `Bearer ${serverToken}`;
  } else if (token) {
    const tokenCookies = Cookies.get("token");
    if (tokenCookies) {
      const jwt = window.atob(tokenCookies);
      headers.Authorization =`Bearer ${jwt}`
    }
  }

  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch(
    (error) => {
      if (error.response) {
        return error.response;
      } else if (error.request) {
        return error.request;
      } else {
        return error.message;
      }
    }
  ) as AxiosResponse;

  console.log(response)

  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }

  const { length } = Object.keys(response.data);
  const res = {
    error: false,
    message: 'success',
    data: length > 1 ? response.data : response.data.data,
  };

  console.log(res)

  return res;
}
