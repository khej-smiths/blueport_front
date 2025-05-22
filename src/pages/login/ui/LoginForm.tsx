"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button, getErrorMessage, Input, ROUTE, useAuthStore } from "@/shared";

import { useLogin } from "../api/mutation";
import { LoginFormDto } from "../model/type";

export default function LoginForm() {
  const router = useRouter();
  const { accessToken, setAccessToken } = useAuthStore();

  const { control, handleSubmit } = useForm<LoginFormDto>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useLogin();

  useEffect(() => {
    if (accessToken) {
      router.push(ROUTE.HOME);
    }
  }, [accessToken, router]);

  const onSubmit = handleSubmit(
    async (data) => {
      mutate(data, {
        onSuccess: (res) => {
          setAccessToken(res.login);
          router.push(ROUTE.HOME);
        },
      });
    },
    (error) => {
      const message = getErrorMessage(error);
      toast.error(message);
    }
  );

  return (
    <form className="flex items-center justify-center" onSubmit={onSubmit}>
      <div className="flex w-[480px] flex-col gap-4">
        <p className="text-2xl font-thin">당신만의 이야기를 시작해보세요</p>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input
              variant="underline"
              placeholder="이메일을 입력해 주세요"
              autoComplete="off"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <Input
              variant="underline"
              type="password"
              placeholder="비밀번호를 입력해 주세요"
              autoComplete="off"
              {...field}
            />
          )}
        />
        <Button type="submit" disabled={isPending}>
          로그인
        </Button>
      </div>
    </form>
  );
}
