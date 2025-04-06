export const ROOT_KEY = {
  open: "open-api",
};

export const QUERY_KEY = {
  open: {
    getSchoolList: (keyword?: string) => [
      ROOT_KEY.open,
      "getSchoolList",
      keyword,
    ],
  },
};
