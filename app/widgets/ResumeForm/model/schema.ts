import { z } from "zod";

export const educationSchema = z
  .object({
    name: z
      .string({
        required_error: "교육 기관명을 입력해주세요.",
      })
      .min(1, "교육 기관명을 입력해주세요."),
    graduationStatus: z.enum(["GRADUATED", "ENROLLED", "EXPECTED_GRADUATION"], {
      required_error: "졸업 상태를 선택해주세요.",
    }),
    major: z
      .string({
        required_error: "전공을 입력해주세요.",
      })
      .min(1, "전공을 입력해주세요."),
    grade: z.string({
      required_error: "학점을 입력해주세요.",
    }),
    standardGrade: z
      .string({
        required_error: "기준 학점을 입력해주세요.",
      })
      .min(1, "기준 학점을 입력해주세요."),
    startAt: z.date({
      required_error: "입학일을 입력해주세요.",
    }),
    endAt: z.date().optional(),
  })
  .refine(({ standardGrade, grade }) => {
    if (standardGrade && parseFloat(standardGrade) < parseFloat(grade)) {
      return false;
    }
    return true;
  }, "학점은 기준 학점을 넘을 수 없습니다.")
  .refine(({ graduationStatus, endAt, startAt }) => {
    if (
      (graduationStatus === "GRADUATED" ||
        graduationStatus === "EXPECTED_GRADUATION") &&
      endAt &&
      endAt <= startAt
    ) {
      return false;
    }
    return true;
  }, "졸업일은 입학일 이후여야 합니다.");

export const careerSchema = z
  .object({
    company: z
      .string({
        required_error: "회사명을 입력해주세요.",
      })
      .min(1, "회사명을 입력해주세요."),
    department: z
      .string({
        required_error: "부서명을 입력해주세요.",
      })
      .min(1, "부서명을 입력해주세요."),
    position: z
      .string({
        required_error: "직급을 입력해주세요.",
      })
      .min(1, "직급을 입력해주세요."),
    description: z
      .string({
        required_error: "업무 내용을 입력해주세요.",
      })
      .min(1, "업무 내용을 입력해주세요."),
    startAt: z.date({
      required_error: "입사일을 입력해주세요.",
    }),
    endAt: z.date().optional(),
  })
  .refine(({ endAt, startAt }) => {
    if (endAt && endAt <= startAt) {
      return false;
    }
    return true;
  }, "퇴사일은 입사일 이후여야 합니다.");

export const projectSchema = z.object({
  name: z
    .string({
      required_error: "프로젝트 명을 입력해주세요.",
    })
    .min(1, "프로젝트 명을 입력해주세요."),
  personnel: z
    .string({
      required_error: "참여 인원을 입력해주세요.",
    })
    .min(1, "참여 인원을 입력해주세요."),
  skillList: z
    .array(
      z.string({
        required_error: "기술 스택을 입력해주세요.",
      })
    )
    .min(1, "기술 스택을 입력해주세요."),
  description: z
    .string({
      required_error: "프로젝트 설명을 입력해주세요.",
    })
    .min(1, "프로젝트 설명을 입력해주세요."),
  projectDate: z
    .object({
      start: z.date({
        required_error: "프로젝트 시작일을 입력해주세요.",
      }),
      end: z.date({
        required_error: "프로젝트 종료일을 입력해주세요.",
      }),
    })
    .refine(({ end, start }) => {
      if (end && end <= start) {
        return false;
      }
      return true;
    }, "프로젝트 종료일은 시작일 이후여야 합니다."),
});

export const portfolioSchema = z.object({
  url: z
    .string()
    .optional()
    .refine((url) => {
      if (url) {
        return z.string().url().safeParse(url).success;
      }
      return true;
    }, "올바른 포트폴리오 링크를 입력해주세요."),
});

export const resumeFormSchema = z.object({
  educationList: z.array(educationSchema).min(1, "학력을 추가해주세요."),
  careerList: z.array(careerSchema).min(1, "경력을 추가해주세요."),
  projectList: z.array(projectSchema).min(1, "프로젝트를 추가해주세요."),
  portfolioList: z.array(portfolioSchema).optional(),
});
