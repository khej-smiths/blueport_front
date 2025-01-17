"use client";

import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import { useFormState } from "react-dom";
import { action } from "./action";

export default function LoginForm() {
  const [state, dispatch] = useFormState(action, null);

  return (
    <form className="flex items-center justify-center" action={dispatch}>
      <div className="flex w-[480px] flex-col gap-4">
        <p className="text-2xl font-thin">당신만의 이야기를 시작해보세요</p>
        <Input placeholder="이메일" autoComplete="off" name="email" />
        <Input
          type="password"
          placeholder="비밀번호"
          autoComplete="off"
          name="password"
        />
        <Button>로그인</Button>
      </div>
    </form>
  );
}
