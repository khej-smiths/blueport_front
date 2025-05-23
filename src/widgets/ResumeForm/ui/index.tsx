"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";

import { Button, Container, ROUTE, useAuthStore } from "@/shared";

import { SectionTitle } from "../../SectionTitle";
import {
  CareerDto,
  EducationDto,
  PortfolioDto,
  ProjectDto,
  ResumeFormDto,
  ResumeListType,
} from "../model/type";
import { CareerItem } from "./CareerItem";
import { EducationItem } from "./EducationItem";
import { PortfolioItem } from "./PortfolioItem";
import { ProjectItem } from "./ProjectItem";

const initEducation: EducationDto = {
  schoolName: "",
  educationStatus: "graduate",
  admissionDate: null,
  graduationDate: undefined,
  specialty: "",
};

const initCareer: CareerDto = {
  companyName: "",
  position: "",
  description: "",
  joinDate: null,
  quitDate: undefined,
};

const initProject: ProjectDto = {
  projectName: "",
  personnel: "",
  skill: [],
  description: "",
  projectDate: {
    start: null,
    end: null,
  },
};

const initPortfolio: PortfolioDto = {
  type: "link",
  url: "",
  file: null,
};

export function ResumeForm() {
  const { control, watch, setValue, getValues, handleSubmit } =
    useForm<ResumeFormDto>({
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

  const router = useRouter();
  const { accessToken } = useAuthStore();

  useEffect(() => {
    if (!accessToken) {
      router.push(ROUTE.LOGIN);
    }
  }, [accessToken, router]);

  const onSubmit = handleSubmit((data) => console.log(data));

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

  return (
    <>
      <form
        className="flex w-full min-w-96 max-w-[1328px] flex-col gap-6 p-6"
        onSubmit={onSubmit}
      >
        <Container>
          <h1 className="text-h1 font-bold text-primary">이력서</h1>
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
                setValue={setValue}
                remove={handleRemoveItem}
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
                setValue={setValue}
                getValues={getValues}
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
                setValue={setValue}
                remove={handleRemoveItem}
              />
            ))}
          </div>
        </Container>
        <Button type="submit">저장하기</Button>
      </form>
    </>
  );
}
