"use client";

import { useEffect, useState } from "react";
import { getSchoolList } from ".";
import { QUERY_KEY } from "../../constant/queryKey";
import { useQuery } from "@tanstack/react-query";

// Query

/** 학교 정보 조회 */
export function useGetSchoolList(keyword?: string) {
  return useQuery({
    queryKey: QUERY_KEY.open.getSchoolList(keyword),
    queryFn: async () => {
      const res = await getSchoolList(keyword);
      return res;
    },
    enabled: Boolean(keyword),
  });
}

/** 학교 정보 조회 디바운싱 */
export const useDebounceSchoolListQuery = (keyword?: string, delay = 500) => {
  const [debouncedKeyword, setDebouncedKeyword] = useState(keyword);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, delay);

    return () => clearTimeout(timer);
  }, [keyword, delay]);

  return useGetSchoolList(debouncedKeyword);
};
