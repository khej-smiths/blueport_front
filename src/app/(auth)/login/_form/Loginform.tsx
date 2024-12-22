"use client";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Controller, useForm } from "react-hook-form";

export default function LoginForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(() => {
    console.log("submit");
  });

  return (
    <form className="flex justify-center items-center" onSubmit={onSubmit}>
      <div className="w-[480px] gap-4 flex flex-col">
        <p className="text-2xl font-thin">당신만의 이야기를 시작해보세요</p>
        <Controller
          render={({ field }) => (
            <Input placeholder="이메일" autoComplete="off" {...field} />
          )}
          name="email"
          control={control}
        />
        <Controller
          render={({ field }) => (
            <Input
              type="password"
              placeholder="비밀번호"
              autoComplete="off"
              {...field}
            />
          )}
          name="password"
          control={control}
        />
        <Button type="submit">로그인</Button>
      </div>
    </form>
  );
}
