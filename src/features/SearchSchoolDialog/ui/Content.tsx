"use client";

import { Input, useDebounceSchoolListQuery } from "@/shared";
import { OpenAPISchoolDto } from "@/shared";
import { useEffect, useState } from "react";

interface Props {
  handleSelectSchool: (schoolName: string) => void;
}

export const Content = ({ handleSelectSchool }: Props) => {
  const [keyword, setKeyword] = useState("");
  const [empty, setEmpty] = useState("학교를 입력해 주세요");
  const [schoolList, setSchoolList] = useState<OpenAPISchoolDto[]>([]);
  const { data } = useDebounceSchoolListQuery(keyword);

  useEffect(() => {
    if (data) {
      if (typeof data === "string" || data === undefined) {
        setSchoolList([]);
        setEmpty("해당하는 데이터가 없습니다.");
      } else {
        setSchoolList(data.schoolInfo[1].row);
      }
    }
  }, [data]);

  useEffect(() => {
    if (keyword === "") {
      setSchoolList([]);
      setEmpty("학교를 입력해 주세요");
    }
  }, [keyword]);

  return (
    <div className="flex flex-col gap-2">
      <Input
        autoComplete="off"
        placeholder="학교명을 입력해 주세요"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <ul className="flex max-h-96 min-h-96 flex-col gap-2 overflow-y-auto">
        {schoolList.length === 0 || keyword === "" ? (
          <p className="flex h-full items-center justify-center text-gray-400">
            {empty}
          </p>
        ) : (
          <>
            {schoolList.map((item) => (
              <li
                key={item.SD_SCHUL_CODE}
                className="cursor-pointer rounded-md border p-2 hover:bg-muted"
                onClick={() => handleSelectSchool(item.SCHUL_NM)}
              >
                {item.SCHUL_NM}
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};
