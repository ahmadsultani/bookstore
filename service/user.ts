import callAPI from "@/config/api";

const ROOT_URL = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export const topup = async (nominal: number) => {
  const url = `${ROOT_URL}/${API_VERSION}/topup`;

  const jsonData = JSON.stringify({ nominal });
  console.log(jsonData)

  return callAPI({
    url,
    method: "PUT",
    data: jsonData,
    token: true,
  });
}

export const getProfileData = async () => {
  const url = `${ROOT_URL}/${API_VERSION}/profile`;

  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}