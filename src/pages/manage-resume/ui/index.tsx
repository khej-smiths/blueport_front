"use client";

import { Container } from "@/shared";
import { SectionTitle } from "@/widgets";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { EducationItem } from "./EducationItem";
import { SearchSchoolDialog } from "@/features";
import { EducationDto } from "../model/type";

const initEducation = {
  id: uuid(),
  schoolName: "",
  admissionDate: null,
  graduationDate: null,
};

export function ManageResumePage() {
  const [educationList, setEducationList] = useState<EducationDto[]>([
    initEducation,
  ]);

  const handleAddEducationList = () => {
    const newEducation: EducationDto = {
      id: uuid(),
      schoolName: "",
      admissionDate: null,
      graduationDate: null,
    };

    setEducationList((prev) => [...prev, newEducation]);
  };

  return (
    <>
      <article className="flex w-full min-w-96 max-w-[1328px] flex-col gap-6 p-6">
        <Container>
          <h1 className="text-h1 font-bold">이력서</h1>
        </Container>
        <Container className="gap-4">
          <div className="flex flex-col gap-3">
            <SectionTitle title="학력" onClick={handleAddEducationList} />
            {educationList.map((item) => (
              <EducationItem
                key={item.id}
                item={item}
                educationList={educationList}
                setEducationList={setEducationList}
              />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <SectionTitle title="경력" />
            <p>회사명</p>
            <p>기간</p>
            <p>직책</p>
            <p>재직여부</p>
            <p>소개</p>
          </div>
          <div className="flex flex-col gap-3">
            <SectionTitle title="프로젝트" />
            <p>프로젝트명</p>
            <p>기간</p>
            <p>인원</p>
            <p>소개</p>
            <p>기술스택</p>
          </div>
          <div className="flex flex-col gap-3">
            <SectionTitle title="포트폴리오" />
            <p>유형</p>
            <p>파일 또는 링크</p>
          </div>
        </Container>
      </article>
      <SearchSchoolDialog />
    </>
  );
}
