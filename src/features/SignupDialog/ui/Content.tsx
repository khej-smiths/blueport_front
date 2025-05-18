import { Control, Controller } from "react-hook-form";
import { SignupFormDto } from "../model/type";
import { Input } from "@/shared";

interface Props {
  control: Control<SignupFormDto, any>;
}

export function Content({ control }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <Controller
        control={control}
        name="username"
        render={({ field }) => (
          <Input
            variant="underline"
            required
            placeholder="아이디를 입력해 주세요"
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
            required
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="passwordConfirm"
        render={({ field }) => (
          <Input
            variant="underline"
            required
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="verificationCode"
        render={({ field }) => (
          <Input
            variant="underline"
            required
            type="password"
            placeholder="인증번호를 입력해 주세요"
            {...field}
          />
        )}
      />
    </div>
  );
}
