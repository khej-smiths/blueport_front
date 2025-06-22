import { Graduation_Status } from "@/shared";

export interface ResumeFormDto {
  educationList: EducationDto[];
  careerList: CareerDto[];
  projectList: ProjectDto[];
  portfolioList?: PortfolioDto[];
}

export interface EducationDto {
  /** 정렬 순서 */
  order: number;
  /** 교육 기관명 */
  name: string;
  /** 졸업 상태 */
  graduationStatus: Graduation_Status;
  /** 전공 */
  major: string;
  /** 학점 */
  grade: string;
  /** 기준 학점 */
  standardGrade: string;
  /** 입학일 */
  startAt: Date | null;
  /** 졸업일 */
  endAt?: Date | null;
}

export interface CareerDto {
  /** 정렬 순서 */
  order: number;
  /** 회사 */
  company: string;
  /** 부서 */
  department: string;
  /** 직급 */
  position: string;
  /** 업무 내용 */
  description: string;
  /** 입사일 */
  startAt: Date | null;
  /** 퇴사일 */
  endAt?: Date | null;
}

export interface ProjectDto {
  /** 정렬 순서 */
  order: number;
  /** 프로젝트 명 */
  name: string;
  /** 참여 인원 */
  personnel: string;
  /** 기술 스택 */
  skillList: string[];
  /** 프로젝트 설명 */
  description: string;
  /** 프로젝트 기간 */
  projectDate: ProjectDateDto;
}

interface ProjectDateDto {
  start: Date | null;
  end: Date | null;
}
export interface PortfolioDto {
  /** 정렬 순서 */
  order: number;
  /** 포트폴리오 링크 */
  url: string;
}

export type ResumeListType = "education" | "career" | "project" | "portfolio";
