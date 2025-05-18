export interface AboutFormDto {
  blogName: string;
  domain: string;
  github: string;
  head: string;
  description: string;
  photo?: File | null;
  email?: string;
  skills?: string[];
}
