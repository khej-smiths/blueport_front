export interface AboutFormDto {
  blogName: string;
  domain: string;
  github: string;
  photo?: File | null;
  description?: string;
  skills?: string[];
}
