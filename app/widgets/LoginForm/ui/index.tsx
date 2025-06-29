import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Button,
  getErrorMessage,
  Input,
  ROUTE,
  useAuthStore,
  useResponsive,
} from "@/shared";

import { useLogin } from "../api/mutation";
import { LoginFormDto } from "../model/type";
import { useNavigate } from "react-router";

export function LoginForm() {
  const navigate = useNavigate();
  const { accessToken, setAccessToken } = useAuthStore();
  const { isMobile } = useResponsive();

  const { control, handleSubmit } = useForm<LoginFormDto>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useLogin();

  useEffect(() => {
    // 로그인 사용자 접속 방지
    if (accessToken) {
      navigate(ROUTE.HOME);
    }
  }, [accessToken, navigate]);

  const onSubmit = handleSubmit(
    async (data) => {
      mutate(data, {
        onSuccess: (res) => {
          setAccessToken(res.login);
          navigate(ROUTE.HOME);
        },
      });
    },
    (error) => {
      const message = getErrorMessage(error);
      toast.error(message);
    }
  );

  return (
    <form
      className="flex w-full items-center justify-center p-4"
      onSubmit={onSubmit}
    >
      <div className="flex w-[480px] flex-col gap-4 max-md:w-full">
        {!isMobile && (
          <p className="text-2xl font-thin">당신만의 이야기를 시작해보세요</p>
        )}
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input
              variant="underline"
              placeholder="이메일을 입력해 주세요"
              inputMode="email"
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
              inputMode="text"
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
