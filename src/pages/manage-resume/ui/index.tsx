"use client";

import { Container, useDialogStore } from "@/shared";
import { SectionTitle } from "@/widgets";
import { useForm, useFieldArray } from "react-hook-form";
import { EducationItem } from "./EducationItem";
import { SearchSchoolDialog } from "@/features";
import { EducationDto, ResumeForm } from "../model/type";
import { useState } from "react";

const initEducation: EducationDto = {
  schoolName: "",
  educationStatus: "graduate",
  admissionYear: "",
  admissionMonth: "",
  graduationYear: "",
  graduationMonth: "",
  specialty: "",
};

export function ManageResumePage() {
  const [modalCallerIndex, setModalCallerIndex] = useState<number>(0);

  const { setOpen } = useDialogStore();
  const { control, watch, setValue } = useForm<ResumeForm>({
    defaultValues: {
      educationList: [initEducation],
    },
  });

  const {
    fields: educationList,
    append: educationListAppend,
    remove: educationListRemove,
  } = useFieldArray({
    name: "educationList",
    control,
  });

  const handleEducationListRemove = (index: number) => {
    if (educationList.length === 1) return;

    educationListRemove(index);
  };

  const handleSelectSchool = (schoolName: string) => {
    setValue(`educationList.${modalCallerIndex}.schoolName`, schoolName);
    setOpen(false);
  };

  console.log(watch());

  return (
    <>
      <article className="flex w-full min-w-96 max-w-[1328px] flex-col gap-6 p-6">
        <Container>
          <h1 className="text-h1 font-bold">이력서</h1>
        </Container>
        <Container className="gap-4">
          <div className="flex flex-col gap-3">
            <SectionTitle
              title="학력"
              onClick={() => educationListAppend(initEducation)}
            />
            {educationList.map((item, index) => (
              <EducationItem
                key={item.id}
                index={index}
                control={control}
                remove={handleEducationListRemove}
                watch={watch}
                setModalCallerIndex={setModalCallerIndex}
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
      <SearchSchoolDialog handleSelectSchool={handleSelectSchool} />
    </>
  );
}
