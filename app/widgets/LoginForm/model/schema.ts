import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string({ required_error: "이메일을 입력해 주세요" })
    .email("이메일 형식으로 입력해 주세요"),
  password: z
    .string({ required_error: "비밀번호를 입력해 주세요" })
    .min(8, "비밀번호는 8자 이상이어야 합니다"),
});

export default loginSchema;
