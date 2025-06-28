import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import {
  Button,
  Container,
  CreateResumeInputDto,
  getErrorMessage,
  Graduation_Status,
  HOOKS,
  UpdateResumeInputDto,
  useAuthStore,
} from "@/shared";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { resumeFormSchema } from "../model/schema";
import { toast } from "sonner";
import { useCreateResume } from "../api/useCreateResume";
import { useUpdateResume } from "../api/useUpdateResume";
import { format } from "date-fns";
import { stringDateToFromDate } from "@/shared/lib/stringDateToFromDate";

const initEducation: EducationDto = {
  order: 0,
  name: "",
  graduationStatus: Graduation_Status.Graduated,
  major: "",
  grade: "",
  standardGrade: "",
  startAt: null,
  endAt: undefined,
};

const initCareer: CareerDto = {
  order: 0,
  company: "",
  department: "",
  position: "",
  description: "",
  startAt: null,
  endAt: undefined,
};

const initProject: ProjectDto = {
  order: 0,
  name: "",
  personnel: "",
  skillList: [],
  description: "",
  projectDate: {
    start: null,
    end: null,
  },
};

const initPortfolio: PortfolioDto = {
  order: 0,
  url: "",
};

export function ResumeForm() {
  const { data: user } = HOOKS.useSelf();
  const { data: resume } = HOOKS.useGetResume(
    user
      ? {
          ownerId: user.id,
        }
      : undefined
  );
  const { mutate: createResume, isPending: isCreatePending } =
    useCreateResume();
  const { mutate: updateResume, isPending: isUpdatePending } =
    useUpdateResume();

  const isModify = !!resume;

  const { control, watch, reset, setValue, getValues, handleSubmit } =
    useForm<ResumeFormDto>({
      defaultValues: {
        educationList: [initEducation],
        careerList: [initCareer],
        projectList: [initProject],
        portfolioList: [initPortfolio],
      },
      resolver: zodResolver(resumeFormSchema),
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

  const navigate = useNavigate();
  const { accessToken } = useAuthStore();

  useEffect(() => {
    if (!resume) return;

    reset({
      ...(resume.educationList && {
        educationList: resume.educationList.map((item) => ({
          ...item,
          graduationStatus:
            (item.graduationStatus as Graduation_Status) ??
            Graduation_Status.Graduated,
          major: item.major ?? undefined,
          grade: `${item.grade}`,
          standardGrade: item.standardGrade ? `${item.standardGrade}` : "none",
          startAt: stringDateToFromDate(item.startAt),
          endAt: item.endAt ? stringDateToFromDate(item.endAt) : undefined,
        })),
      }),
      ...(resume.careerList && {
        careerList: resume.careerList.map((item) => ({
          ...item,
          company: item.company ?? "",
          department: item.department ?? "",
          position: item.position ?? "",
          description: item.description ?? "",
          startAt: stringDateToFromDate(item.startAt),
          endAt: item.endAt ? stringDateToFromDate(item.endAt) : undefined,
        })),
      }),
      ...(resume.projectList && {
        projectList: resume.projectList.map((item) => ({
          ...item,
          personnel: `${item.personnel}`,
          skillList: item.skillList ?? [],
          description: item.description ?? "",
          projectDate: {
            start: stringDateToFromDate(item.startAt),
            end: item.endAt ? stringDateToFromDate(item.endAt) : undefined,
          },
        })),
      }),
      ...(resume.portfolioList && {
        portfolioList: resume.portfolioList.map((item) => ({
          ...item,
          url: item.url ?? "",
        })),
      }),
    });
  }, [resume]);

  const onSubmit = handleSubmit(
    (data) => {
      const body = {
        educationList: data.educationList.map((item) => ({
          ...item,
          standardGrade:
            item.standardGrade === "none"
              ? undefined
              : parseFloat(item.standardGrade),
          grade: item.grade === "none" ? undefined : parseFloat(item.grade),
          graduationStatus: item.graduationStatus as Graduation_Status,
          // 시작일은 모두 유효성 검사에서 null 체크 중
          startAt: format(item.startAt!, "yyyy.MM"),
          endAt: item.endAt ? format(item.endAt, "yyyy.MM") : undefined,
        })),
        careerList: data.careerList.map((item) => ({
          ...item,
          // 시작일은 모두 유효성 검사에서 null 체크 중
          startAt: format(item.startAt!, "yyyy.MM"),
          endAt: item.endAt ? format(item.endAt, "yyyy.MM") : undefined,
        })),
        projectList: data.projectList.map((item) => ({
          ...item,
          projectDate: undefined, // projectDate는 form에서만 입력받기 위한 값, 서버에 전달할 때에는 제거
          personnel: parseInt(item.personnel),
          // 시작일은 모두 유효성 검사에서 null 체크 중
          startAt: format(item.projectDate.start!, "yyyy.MM"),
          endAt: item.projectDate.end
            ? format(item.projectDate.end, "yyyy.MM")
            : undefined,
        })),
        portfolioList: data.portfolioList?.map((item) => ({
          ...item,
        })),
      };

      console.log(body);

      if (isModify) {
        updateResume(body as UpdateResumeInputDto);
      } else {
        createResume(body as CreateResumeInputDto);
      }
    },
    (error) => {
      const message = getErrorMessage(error);
      toast.error(message);
    }
  );

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
        className="flex w-full max-w-[1328px] min-w-96 flex-col gap-6"
        onSubmit={onSubmit}
      >
        <Container className="gap-4">
          <div className="flex flex-col gap-3">
            <SectionTitle
              title="학력"
              onClick={() =>
                educationListAppend({
                  ...initEducation,
                  order: educationList.length,
                })
              }
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
              onClick={() =>
                careerListAppend({
                  ...initCareer,
                  order: careerList.length,
                })
              }
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
              onClick={() =>
                projectListAppend({
                  ...initProject,
                  order: projectList.length,
                })
              }
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
              onClick={() =>
                portfolioListAppend({
                  ...initPortfolio,
                  order: portfolioList.length,
                })
              }
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
        <Button type="submit" disabled={isCreatePending || isUpdatePending}>
          {isCreatePending || isUpdatePending
            ? "잠시만 기다려 주세요..."
            : "저장하기"}
        </Button>
      </form>
    </>
  );
}
