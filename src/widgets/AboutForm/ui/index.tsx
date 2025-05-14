"use client";

import { LabelInput } from "@/entities";
import { FileUpload } from "@/features";
import {
  Button,
  Category,
  Container,
  FormLabel,
  Input,
  Textarea,
} from "@/shared";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import { AboutFormDto } from "../model/type";
import { KeyboardEvent, useRef, useState } from "react";

export function AboutForm() {
  const [skillKeyword, setSkillKeyword] = useState("");
  const [preview, setPreview] = useState("");

  const isComposite = useRef(false);
  const { control, watch, setValue, getValues, handleSubmit } =
    useForm<AboutFormDto>({
      defaultValues: {
        blogName: "",
        domain: "",
        github: "",
        photo: null,
        description: "",
        skills: [],
      },
    });

  console.log(watch());

  const onSubmit = handleSubmit((data) => console.log(data));

  const handleAddSkills = () => {
    const currentSkills = getValues("skills") ?? [];

    setValue("skills", [...currentSkills, skillKeyword]);
    setSkillKeyword("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const key = event.code;

    if (isComposite.current) return;

    if (
      skillKeyword !== "" &&
      (key === "Enter" || key === "Space" || key === "Comma")
    ) {
      handleAddSkills();
      event.preventDefault();
    }
  };

  const handleDeleteSkill = (index: number) => {
    const currentSkills = getValues("skills") ?? [];
    setValue(
      "skills",
      currentSkills.filter((_, i) => index !== i)
    );
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <Container className="flex flex-col gap-4">
        <div className="flex gap-6">
          <div className="flex flex-1 flex-col gap-4">
            <Controller
              control={control}
              name="blogName"
              render={({ field }) => (
                <LabelInput
                  required
                  placeholder="블로그 이름을 입력해주세요."
                  {...field}
                >
                  블로그 이름
                </LabelInput>
              )}
            />
            <Controller
              control={control}
              name="domain"
              render={({ field }) => (
                <LabelInput
                  required
                  placeholder="도메인 이름을 입력해주세요."
                  {...field}
                >
                  도메인 이름
                </LabelInput>
              )}
            />
            <div className="flex h-full flex-col gap-2">
              <FormLabel>프로필 사진</FormLabel>
              <FileUpload setValue={setValue} setPreview={setPreview} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-400">프로필 미리보기</p>
            <div className="flex flex-1 items-end gap-6">
              <Image
                className="h-[376px] w-[480px] rounded-md object-cover"
                width={480}
                height={376}
                src={preview}
                alt="profile_sample_default"
              />
              <Image
                className="size-32 rounded-full object-cover"
                width={128}
                height={128}
                src={preview}
                alt="profile_sample_avatar"
              />
            </div>
          </div>
        </div>
        <Controller
          control={control}
          name="github"
          render={({ field }) => (
            <LabelInput
              placeholder="github 프로필 링크를 입력해 주세요"
              {...field}
            >
              Github
            </LabelInput>
          )}
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <Controller
              control={control}
              name="description"
              render={({ field }) => (
                <>
                  <FormLabel>자기소개</FormLabel>
                  <Textarea
                    placeholder="나를 어필할 수 있는 간단소개를 작성해보세요!"
                    {...field}
                  />
                </>
              )}
            />
          </div>
          <div className="flex flex-col gap-3">
            <FormLabel>기술스택</FormLabel>
            <ul className="flex gap-2">
              {watch("skills")?.map((skill, index) => (
                <li key={index}>
                  <Category
                    category={skill}
                    onClick={() => handleDeleteSkill(index)}
                  />
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <Input
                variant="underline"
                placeholder="기술스택을 입력해주세요."
                value={skillKeyword}
                onChange={(e) => setSkillKeyword(e.target.value)}
                onKeyDown={handleKeyDown}
                onCompositionStart={() => (isComposite.current = true)}
                onCompositionEnd={() => (isComposite.current = false)}
              />
              <Button onClick={handleAddSkills}>추가</Button>
            </div>
          </div>
        </div>
      </Container>
      <Button type="submit">저장하기</Button>
    </form>
  );
}
