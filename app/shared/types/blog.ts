export interface BlogFormDto {
  blogName: string;
  domain: string;
  greeting: string;
  description: string;
  photo?: File | string | null;
  github?: string;
  email?: string;
  skills?: string[];
}
