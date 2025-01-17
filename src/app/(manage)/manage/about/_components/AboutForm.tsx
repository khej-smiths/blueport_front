"use client";

import { Button } from "@/components/common/Button";
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
        <div className="flex w-1/2 flex-col gap-4"></div>
        <div className="flex w-1/2 gap-6"></div>
      </div>
      <div className="flex flex-col gap-4"></div>
      <div className="flex justify-end border-t pt-6">
        <Button type="submit">저장하기</Button>
      </div>
    </form>
  );
}
