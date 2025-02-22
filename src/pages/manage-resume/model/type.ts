export interface EducationDto {
  id: string;
  schoolName: string;
  admissionDate: Date | null;
  graduationDate?: Date | null;
  specialty?: string;
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
