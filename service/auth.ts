import callAPI from "@/config/api";
import { LoginTypes, SignupTypes } from "@/types";

const ROOT_URL = process.env.NEXT_PUBLIC_API;
const API_URL = 'api/v1';

export const login = async (data: LoginTypes) => {
  const url = `${ROOT_URL}/${API_URL}/auth/login`;

  const jsonData = JSON.stringify(data);

  return callAPI({
    url,
    method: "POST",
    data: jsonData,
  });
}

export const signup = async (data: SignupTypes) => {
  const url = `${ROOT_URL}/${API_URL}/auth/signup`;

  const jsonData = JSON.stringify(data);

  return callAPI({
    url,
    method: "POST",
    data: jsonData,
  });
}