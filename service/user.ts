import callAPI from "@/config/api";

const ROOT_URL = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export const topup = async (nominal: number) => {
  const url = `${ROOT_URL}/${API_VERSION}/topup`;

  const jsonData = JSON.stringify({ nominal });

  return callAPI({
    url,
    method: "POST",
    data: jsonData,
  });
}