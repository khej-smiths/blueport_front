export interface BlogFormDto {
  blogName: string;
  domain: string;
  github: string;
  greeting: string;
  description: string;
  photo?: File | null;
  email?: string;
  skills?: string[];
}
