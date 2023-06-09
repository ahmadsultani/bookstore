import callAPI from "@/config/api";

const ROOT_URL = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function getAllBooks() {
  const url = `${ROOT_URL}/${API_VERSION}/book`;

  const res = await callAPI({
    url,
    method: "GET",
  });

  console.log("res", res);

  return res;
}

export async function getBookById(id: string, serverToken? : string) {
  const url = `${ROOT_URL}/${API_VERSION}/book/${id}`;

  if (serverToken) {
    const res = await callAPI({
      url,
      method: "GET",
      serverToken,
    });

    console.log("res", res);

    return res;
  }

  const res = await callAPI({
    url,
    method: "GET",
    token: true
  });

  console.log("res", res);

  return res;
}
