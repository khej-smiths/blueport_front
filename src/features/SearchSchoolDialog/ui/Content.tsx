"use client";

import {
  CustomSelect,
  Input,
  SchoolType,
  useDebounceSchoolListQuery,
  OpenAPISchoolDto,
} from "@/shared";
import { useEffect, useState } from "react";
import { selectOptions } from "../const";

interface Props {
  handleSelectSchool(schoolName: string): void;
}

export function Content({ handleSelectSchool }: Props) {
  const [schoolType, setSchoolType] = useState<SchoolType>("univ_list");
  const [keyword, setKeyword] = useState("");
  const [empty, setEmpty] = useState("학교를 입력해 주세요");
  const [schoolList, setSchoolList] = useState<OpenAPISchoolDto[]>([]);
  const { data } = useDebounceSchoolListQuery({
    gubun: schoolType,
    searchSchulNm: keyword,
  });

  useEffect(() => {
    if (data) {
      if (data.length === 0) {
        setEmpty("해당하는 데이터가 없습니다.");
        return;
      }

      setSchoolList(data);
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
      <div className="flex flex-row gap-2">
        <CustomSelect
          selectOptions={selectOptions}
          placeholder="학교구분"
          value={schoolType}
          onValueChange={(value) => setSchoolType(value as SchoolType)}
          className="w-36"
        />
        <Input
          autoComplete="off"
          placeholder="학교명을 입력해 주세요"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <ul className="flex max-h-96 min-h-96 flex-col gap-2 overflow-y-auto">
        {schoolList.length === 0 ? (
          <p className="flex h-full items-center justify-center text-gray-400">
            {empty}
          </p>
        ) : (
          <>
            {schoolList.map((item) => (
              <li
                key={item.seq}
                className="cursor-pointer rounded-md border p-2 hover:bg-muted"
                onClick={() => handleSelectSchool(item.schoolName)}
              >
                {item.schoolName}
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
}
