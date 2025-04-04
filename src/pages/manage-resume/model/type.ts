export interface ResumeForm {
  educationList: EducationDto[];
  careerList: CareerDto[];
  projectList: ProjectDto[];
  portfolioList: Portfolio[];
}

export interface EducationDto {
  schoolName: string;
  educationStatus: EducationStatus;
  admissionYear: string;
  admissionMonth: string;
  graduationYear: string;
  graduationMonth: string;
  specialty: string;
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
  startDate: Date | null;
  endDate: Date | null;
}

export interface Portfolio {
  type: "link" | "file";
  file?: File;
  url?: string;
}

export type EducationStatus = "graduate" | "attend" | "expected";
