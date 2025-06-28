import { Controller, useForm } from "react-hook-form";

import { LabelInput } from "@/entities";
import { Button, Container, MobileSubmitButton, useResponsive } from "@/shared";
import { SectionTitle } from "@/widgets/SectionTitle";

export function ManageUserForm() {
  const { control, handleSubmit } = useForm();
  const { isMobile } = useResponsive();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <Container className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <SectionTitle title="기본 정보" hideButton />
          <div className="flex flex-col gap-4">
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <LabelInput
                  required
                  placeholder="이름을 입력해 주세요"
                  {...field}
                >
                  이름
                </LabelInput>
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <LabelInput
                  placeholder="이메일을 입력해 주세요"
                  disabled
                  value={field.value}
                >
                  이메일
                </LabelInput>
              )}
            />
            <Button className="w-fit" variant="outline">
              비밀번호 변경하기
            </Button>
          </div>
        </div>
      </Container>
      {isMobile ? (
        <MobileSubmitButton className="w-full" />
      ) : (
        <Button type="submit">저장하기</Button>
      )}
    </form>
  );
}
