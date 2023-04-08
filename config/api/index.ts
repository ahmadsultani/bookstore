import axios, { AxiosHeaders, AxiosRequestConfig, AxiosResponse } from "axios";
import Cookies from "js-cookie";

interface ICallAPI extends AxiosRequestConfig {
  token?: boolean;
}

export default async function callAPI(config: ICallAPI) {
  const { url, method, data, token } = config;
  let headers = {} as AxiosHeaders;

  headers["Content-Type"] = "application/json";

  if (token) {
    const jwt = Cookies.get("token");
    if (jwt) {
      headers.Authorization =`Bearer ${jwt}`
    }
  }

  const response: AxiosResponse = await axios({
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
  );

  if (response.status > 300 ) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }

  if (!response.data) {
    const res = {
      error: true,
      message: 'error',
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

  return res;
}
