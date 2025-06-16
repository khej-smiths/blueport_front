import { z } from "zod";

export const editorSchema = z.object({
  title: z.string({ required_error: "제목을 입력해주세요." }).min(1, { message: "제목을 입력해주세요." }),
  content: z.string({ required_error: "내용을 입력해주세요." }).min(1, { message: "내용을 입력해주세요." }),
  hashtagList: z.array(z.string()).min(1, { message: "해시태그 최소 1개 이상 입력해주세요." }).max(100, { message: "해시태그는 최대 100개까지 입력할 수 있습니다." }),
});