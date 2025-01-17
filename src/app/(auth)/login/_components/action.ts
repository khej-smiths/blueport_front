"use server";

import loginSchema from "./schema";

export async function action(_: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = await loginSchema.safeParseAsync(data);

  if (!result.success) {
    return result.error.flatten();
  }

  const { email, password } = result.data;

  // TODO: 로그인 요청
  // const res = await fetch("");

  // if (!res) return { error: "로그인 실패" };

  // return { success: "로그인 성공" };
}
