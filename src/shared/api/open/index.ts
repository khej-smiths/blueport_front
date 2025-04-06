import { GetSchoolListResponse } from "../../types/open";

export const getSchoolList = async (keyword?: string) => {
  try {
    const url = process.env.NEXT_PUBLIC_OPEN_API_ENDPOINT ?? "";
    const params = new URLSearchParams({
      KEY: process.env.NEXT_PUBLIC_OPEN_API_KEY ?? "",
      Type: "json",
      pIndex: "1",
      pSize: "100",
      ...(keyword ? { SCHUL_NM: keyword } : undefined),
    });

    const res = await fetch(`${url}?${params}`);

    const data: GetSchoolListResponse = await res.json();

    if ("schoolInfo" in data) {
      return data;
    } else {
      return data.RESULT.MESSAGE;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
