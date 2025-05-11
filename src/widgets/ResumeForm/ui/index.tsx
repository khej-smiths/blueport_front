"use client";

import { Container, useDialogStore } from "@/shared";
import { SectionTitle } from "@/widgets";
import { useForm, useFieldArray } from "react-hook-form";
import { EducationItem } from "./EducationItem";
import { SearchSchoolDialog } from "@/features";
import {
  CareerDto,
  EducationDto,
  PortfolioDto,
  ProjectDto,
  ResumeFormDto,
  ResumeListType,
} from "../model/type";
import { useState } from "react";
import { CareerItem } from "./CareerItem";
import { ProjectItem } from "./ProjectItem";
import { PortfolioItem } from "./PortfolioItem";

const initEducation: EducationDto = {
  schoolName: "",
  educationStatus: "graduate",
  admissionYear: "",
  admissionMonth: "",
  graduationYear: "",
  graduationMonth: "",
  specialty: "",
};

const initCareer: CareerDto = {
  companyName: "",
  position: "",
  description: "",
  joinYear: "",
  joinMonth: "",
  quitYear: "",
  quitMonth: "",
};

const initProject: ProjectDto = {
  projectName: "",
  personnel: "",
  skill: [],
  description: "",
  startDate: null,
  endDate: null,
};

const initPortfolio: PortfolioDto = {
  type: "link",
  url: undefined,
  file: undefined,
};

export function ResumeForm() {
  const [modalCallerIndex, setModalCallerIndex] = useState<number>(0);

  const { setOpen } = useDialogStore();
  const { control, watch, setValue } = useForm<ResumeFormDto>({
    defaultValues: {
      educationList: [initEducation],
      careerList: [initCareer],
      projectList: [initProject],
      portfolioList: [initPortfolio],
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

  const {
    fields: careerList,
    append: careerListAppend,
    remove: careerListRemove,
  } = useFieldArray({
    name: "careerList",
    control,
  });

  const {
    fields: projectList,
    append: projectListAppend,
    remove: projectListRemove,
  } = useFieldArray({
    name: "projectList",
    control,
  });

  const {
    fields: portfolioList,
    append: portfolioListAppend,
    remove: portfolioListRemove,
  } = useFieldArray({
    name: "portfolioList",
    control,
  });

  const handleRemoveItem = (index: number, type: ResumeListType) => {
    if (type === "education") {
      if (educationList.length === 1) return;

      educationListRemove(index);
      return;
    }

    if (type === "career") {
      if (careerList.length === 1) return;

      careerListRemove(index);
    }

    if (type === "project") {
      if (projectList.length === 1) return;

      projectListRemove(index);
    }

    if (type === "portfolio") {
      if (portfolioList.length === 1) return;

      portfolioListRemove(index);
    }
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
                watch={watch}
                remove={handleRemoveItem}
                setModalCallerIndex={setModalCallerIndex}
              />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <SectionTitle
              title="경력"
              onClick={() => careerListAppend(initCareer)}
            />
            {careerList.map((item, index) => (
              <CareerItem
                key={item.id}
                index={index}
                control={control}
                watch={watch}
                setValue={setValue}
                remove={handleRemoveItem}
              />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <SectionTitle
              title="프로젝트"
              onClick={() => projectListAppend(initProject)}
            />
            {projectList.map((item, index) => (
              <ProjectItem
                key={item.id}
                index={index}
                control={control}
                watch={watch}
                remove={handleRemoveItem}
              />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <SectionTitle
              title="포트폴리오"
              onClick={() => portfolioListAppend(initPortfolio)}
            />
            {portfolioList.map((item, index) => (
              <PortfolioItem
                key={item.id}
                index={index}
                control={control}
                watch={watch}
                remove={handleRemoveItem}
              />
            ))}
          </div>
        </Container>
      </article>
      <SearchSchoolDialog handleSelectSchool={handleSelectSchool} />
    </>
  );
}
