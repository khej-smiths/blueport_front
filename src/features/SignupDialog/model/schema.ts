import { z } from "zod";
import { PASSWORD_REGEX } from "@/shared";

export const signupFormSchema = z
  .object({
    email: z.string().email("이메일 형식으로 작성해 주세요"),
    name: z.string().min(1, "이름은 최소 1자 이상이어야 합니다"),
    password: z
      .string()
      .min(8, "비밀번호는 최소 8자 이상이어야 합니다.")
      .max(20, "비밀번호는 최대 20자 이하여야 합니다.")
      .regex(
        PASSWORD_REGEX,
        "비밀번호는 영문, 숫자, 특수문자를 조합해 만들어야 합니다."
      ),
    passwordConfirm: z.string(),
    verificationCode: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "비밀번호가 일치하지 않습니다.",
  });
