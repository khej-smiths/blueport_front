"use client";

import { LabelInput } from "@/entities";
import { FileUpload } from "@/features";
import { Button, Category, FormLabel, Input, Textarea } from "@/shared";
import Image from "next/image";
import { useFormState } from "react-dom";

interface AboutFormState {
  title: string;
  domain: string;
  profile: File | undefined;
  description: string;
  skills: string[];
}

export function AboutForm() {
  const handleSubmit = async (
    initalState: AboutFormState,
    formData: FormData
  ) => {
    return initalState;
  };

  const [state, formAction] = useFormState(handleSubmit, {
    title: "",
    domain: "",
    profile: undefined,
    description: "",
    skills: [],
  });

  return (
    <form className="flex flex-col gap-4" action={formAction}>
      <div className="flex gap-6">
        <div className="flex flex-1 flex-col gap-4">
          <LabelInput required placeholder="블로그 이름을 입력해주세요.">
            블로그 이름
          </LabelInput>
          <LabelInput required placeholder="도메인 이름을 입력해주세요.">
            도메인 이름
          </LabelInput>
          <div className="flex h-full flex-col gap-2">
            <FormLabel required>프로필 사진</FormLabel>
            <FileUpload />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-400">프로필 미리보기</p>
          <div className="flex flex-1 items-end gap-6">
            <Image
              className="h-[376px] w-[480px] rounded-md object-cover"
              width={480}
              height={376}
              src="https://avatars.githubusercontent.com/u/72400381?v=4"
              alt="profile_sample_default"
            />
            <Image
              className="size-32 rounded-full object-cover"
              width={128}
              height={128}
              src="https://avatars.githubusercontent.com/u/72400381?v=4"
              alt="profile_sample_avatar"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <FormLabel required>자기소개</FormLabel>
          <Textarea />
        </div>
        <div className="flex flex-col gap-3">
          <FormLabel required>기술스택</FormLabel>
          <ul className="flex gap-2">
            {Array.from({ length: 15 }).map((_, index) => (
              <li key={index}>
                <Category category={`${index + 1} Skill`} />
              </li>
            ))}
          </ul>
          <Input variant="underline" placeholder="기술스택을 입력해주세요." />
        </div>
      </div>
      <div className="flex justify-end pt-6">
        <Button type="submit">저장하기</Button>
      </div>
    </form>
  );
}
