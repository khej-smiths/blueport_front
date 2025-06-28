export interface BlogFormDto {
  blogName: string;
  domain: string;
  greeting: string;
  description: string;
  photo?: File | null;
  github?: string;
  email?: string;
  skills?: string[];
}
