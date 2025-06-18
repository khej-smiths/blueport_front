import { KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { LabelInput } from "@/entities";
import { FileUpload } from "@/features";
import {
  Button,
  Container,
  CreateBlogInputDto,
  DefaultProfile,
  FormLabel,
  getErrorMessage,
  Hashtag,
  HOOKS,
  Input,
  ROUTE,
  Textarea,
  useAuthStore,
} from "@/shared";

import { useCreateBlog, useUpdateBlog } from "../api/mutation";
import { useGetBlog } from "../api/query";
import { BlogFormDto } from "../model/type";
import { useNavigate } from "react-router";

export function BlogForm() {
  const [skillKeyword, setSkillKeyword] = useState("");
  const [preview, setPreview] = useState("");

  const navigate = useNavigate();
  const isComposite = useRef(false);
  const { accessToken } = useAuthStore();

  const { control, watch, reset, setValue, getValues, handleSubmit } =
    useForm<BlogFormDto>({
      defaultValues: {
        blogName: "",
        domain: "",
        github: "",
        greeting: "",
        email: "",
        photo: null,
        description: "",
        skills: [],
      },
    });

  const { data: user } = HOOKS.useSelf();
  const { data: blog } = useGetBlog(user?.id);
  const { mutate: createBlog } = useCreateBlog();
  const { mutate: updateBlog } = useUpdateBlog();

  const isModify = useMemo(() => (blog?.id ? true : false), [blog]);

  useEffect(() => {
    if (!accessToken) {
      navigate(ROUTE.LOGIN);
    }
  }, [accessToken, navigate]);

  useEffect(() => {
    if (!blog) return;

    reset({
      blogName: blog.name,
      domain: blog.domain,
      greeting: blog.greeting,
      email: blog.email ?? "",
      github: blog.github ?? "",
      description: blog.introduction ?? "",
      skills: blog.skills ?? [],
    });
  }, [blog, reset]);

  const onSubmit = handleSubmit(
    async (data) => {
      // FIXME: 임시처리 이미지 업로드 추가 후 링크로 넣어야 함
      const photo = typeof data.photo === "string" ? data.photo : "";

      const body: CreateBlogInputDto = {
        domain: data.domain,
        greeting: data.greeting,
        introduction: data.description,
        name: data.blogName,
        photo,
        ...(data.skills && { skills: data.skills }),
        ...(data.email && { email: data.email }),
        ...(data.github && { github: data.github }),
      };

      if (isModify) {
        updateBlog(body, {
          onSuccess: () => {
            toast.success("블로그 정보가 변경되었습니다.");
          },
        });
        return;
      }

      createBlog(body, {
        onSuccess: (res) => {
          toast.success("블로그가 생성되었습니다.");
          navigate(ROUTE.BLOG.replace(":domain", res.domain));
        },
      });
    },
    (error) => {
      const message = getErrorMessage(error);
      toast.error(message);
    }
  );

  const handleAddSkills = () => {
    const currentSkills = getValues("skills") ?? [];

    if (currentSkills.includes(skillKeyword)) return;

    if (currentSkills.length >= 100) return;

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
              {preview ? (
                <>
                  <img
                    className="h-[376px] w-[480px] rounded-md object-cover"
                    width={480}
                    height={376}
                    src={preview}
                    alt="profile_sample_default"
                  />
                  <img
                    className="size-32 rounded-full object-cover"
                    width={128}
                    height={128}
                    src={preview}
                    alt="profile_sample_avatar"
                  />
                </>
              ) : (
                <>
                  <DefaultProfile variant="default" />
                  <DefaultProfile variant="avatar" />
                </>
              )}
            </div>
          </div>
        </div>
        <Controller
          control={control}
          name="greeting"
          render={({ field }) => (
            <LabelInput
              required
              placeholder="인사말을 입력해주세요."
              {...field}
            >
              인사말
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
                  <FormLabel required>자기소개</FormLabel>
                  <Textarea
                    placeholder="나를 어필할 수 있는 간단소개를 작성해보세요!"
                    {...field}
                  />
                </>
              )}
            />
          </div>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <LabelInput
                placeholder="연락용 이메일을 입력해주세요."
                {...field}
              >
                연락용 이메일
              </LabelInput>
            )}
          />
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
          <div className="flex flex-col gap-3">
            <FormLabel>기술스택</FormLabel>
            <ul className="flex gap-2">
              {watch("skills")?.map((skill, index) => (
                <li key={index}>
                  <Hashtag
                    hashtag={skill}
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
