import { GetSchoolListRequest, GetSchoolListResponse } from "../../types/open";

export const getSchoolList = async (params?: GetSchoolListRequest) => {
  try {
    const url = import.meta.env.VITE_PUBLIC_OPEN_API_ENDPOINT ?? "";
    const searchParams = new URLSearchParams({
      apiKey: import.meta.env.VITE_PUBLIC_OPEN_API_KEY ?? "",
      svcType: "api",
      svcCode: "SCHOOL",
      contentType: "json",
      ...params,
    });

    const res = await fetch(`${url}?${searchParams}`);

    const data: GetSchoolListResponse = await res.json();

    return data.dataSearch.content;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
