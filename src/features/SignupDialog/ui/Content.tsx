import { Control, Controller } from "react-hook-form";
import { SignupFormDto } from "../model/type";
import { Input } from "@/shared";

interface Props {
  control: Control<SignupFormDto, any>;
}

export function Content({ control }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <Controller
        control={control}
        name="email"
        render={({ field, fieldState: { error } }) => (
          <Input
            type="email"
            variant="underline"
            required
            placeholder="아이디로 사용할 이메일을 입력해 주세요"
            {...field}
            error={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="name"
        render={({ field, fieldState: { error } }) => (
          <Input
            variant="underline"
            required
            placeholder="블로그에서 사용할 이름을 입력해 주세요"
            {...field}
            error={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field, fieldState: { error } }) => (
          <div className="flex flex-col gap-2">
            <Input
              variant="underline"
              required
              type="password"
              placeholder="비밀번호를 입력해 주세요"
              {...field}
              error={error?.message}
            />
            <p className="px-3 text-xs text-gray-400">
              8 ~ 20자 사이 영문, 숫자, 특수문자를 조합해 만들어 주세요
            </p>
          </div>
        )}
      />
      <Controller
        control={control}
        name="passwordConfirm"
        render={({ field, fieldState: { error } }) => (
          <Input
            variant="underline"
            required
            type="password"
            placeholder="비밀번호를 확인해 주세요"
            {...field}
            error={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="verificationCode"
        render={({ field, fieldState: { error } }) => (
          <Input
            variant="underline"
            required
            type="password"
            placeholder="인증번호를 입력해 주세요"
            {...field}
            error={error?.message}
          />
        )}
      />
    </div>
  );
}
