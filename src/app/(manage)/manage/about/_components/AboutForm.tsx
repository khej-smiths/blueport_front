"use client";

import { Button } from "@/components/common/Button";
import FileUpload from "@/components/common/FileUpload";
import Label from "@/components/common/Label";
import LabelInput from "@/components/common/LabelInput";
import Image from "next/image";
import { useFormState } from "react-dom";

interface AboutFormState {
  title: string;
  domain: string;
  profile: File | undefined;
  description: string;
  skills: string[];
}

export default function AboutForm() {
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
          <LabelInput
            label="블로그 이름"
            required
            placeholder="블로그 이름을 입력해주세요."
          />
          <LabelInput
            label="도메인 이름"
            required
            placeholder="도메인 이름을 입력해주세요."
          />
          <div className="flex h-full flex-col gap-2">
            <Label label="프로필 사진" required />
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
      <div className="flex flex-col gap-4"></div>
      <div className="flex justify-end border-t pt-6">
        <Button type="submit">저장하기</Button>
      </div>
    </form>
  );
}
