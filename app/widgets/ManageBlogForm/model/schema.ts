import { z } from "zod";

export const blogSchema = z.object({
  blogName: z.string({ required_error: "블로그 이름을 입력해주세요" }).min(1),
  domain: z.string({ required_error: "도메인을 입력해주세요" }).min(1),
  greeting: z.string({ required_error: "인사말을 입력해주세요" }).min(1),
  description: z.string({ required_error: "소개글을 입력해주세요" }).min(1),
  photo: z.string().or(z.instanceof(File)).optional(),
  github: z
    .string()
    .url({ message: "올바른 URL 형식이 아닙니다" })
    .startsWith("https://github.com/", "github 주소가 올바르지 않습니다")
    .optional(),
  email: z
    .string()
    .optional()
    .refine(
      (val) =>
        val === "" ||
        val === null ||
        val === undefined ||
        z.string().email().safeParse(val).success,
      {
        message: "이메일 형식이 올바르지 않습니다",
      }
    ),
  skills: z.array(z.string()).optional(),
});
