export interface ResumeFormDto {
  educationList: EducationDto[];
  careerList: CareerDto[];
  projectList: ProjectDto[];
  portfolioList: PortfolioDto[];
}

export interface EducationDto {
  schoolName: string;
  educationStatus: EducationStatus;
  specialty: string;
  admissionDate: Date | null;
  graduationDate?: Date | null;
}

export interface CareerDto {
  companyName: string;
  position: string;
  description: string;
  joinDate: Date | null;
  quitDate?: Date | null;
}

export interface ProjectDto {
  projectName: string;
  personnel: string;
  skill: string[];
  description: string;
  projectDate: ProjectDateDto;
}

interface ProjectDateDto {
  start: Date | null;
  end: Date | null;
}
export interface PortfolioDto {
  type: "link" | "file";
  file?: File;
  url?: string;
}

export type EducationStatus = "graduate" | "attend" | "expected";

export type ResumeListType = "education" | "career" | "project" | "portfolio";
