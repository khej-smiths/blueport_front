import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

import { Editor, Preview } from "@/features";
import {
  Button,
  Category,
  cn,
  CreatePostInputDto,
  getErrorMessage,
  Input,
  ROUTE,
  useAuthStore,
} from "@/shared";
import { useSearchParams } from "react-router";
import { useNavigate } from "react-router";
import { Controller, useForm } from "react-hook-form";
import { EditorForm } from "./model/type";
import { useCreatePost } from "./api/useCreatePost";
import { zodResolver } from "@hookform/resolvers/zod";
import { editorSchema } from "./model/schema";

export default function EditorPage() {
  const [category, setCategory] = useState("");
  const [isCategoryInputFocused, setIsCategoryInputFocused] = useState(false);
  const { control, setValue, watch, handleSubmit } = useForm<EditorForm>({
    defaultValues: {
      title: "",
      hashtagList: [],
      content: "",
    },
    resolver: zodResolver(editorSchema),
  });

  const isComposition = useRef(false);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isDemo = Boolean(searchParams.get("demo"));

  const { accessToken } = useAuthStore();

  const { mutate: createPost } = useCreatePost();

  useEffect(() => {
    if (!isDemo && !accessToken) {
      navigate(ROUTE.LOGIN);
    }
  }, [accessToken, isDemo, navigate]);

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const key = e.code;

    if (isComposition.current) return;

    if (
      (key === "Space" || key === "Enter" || key === "Comma") &&
      category.trim()
    ) {
      e.preventDefault();

      if (watch("hashtagList").length > 9) {
        setCategory("");
        return;
      }

      setValue("hashtagList", [...watch("hashtagList"), category.trim()]);
      setCategory("");
    }

    if (
      key === "Backspace" &&
      watch("hashtagList").length > 0 &&
      category.length === 0
    ) {
      handleCategoryDelete(watch("hashtagList").length - 1);
    }
  };

  const handleCategoryDelete = (indexToDelete: number) => {
    setValue(
      "hashtagList",
      watch("hashtagList").filter((_, index) => index !== indexToDelete)
    );
  };

  const onSubmit = handleSubmit(
    (data) => {
      if (isDemo || !accessToken) {
        toast("체험하기에서는 게시글을 작성할 수 없습니다 🥲");
        return;
      }

      const input: CreatePostInputDto = {
        title: data.title,
        content: data.content,
        hashtagList: data.hashtagList,
      };

      createPost(input, {
        onSuccess: ({ domain, id }) => {
          toast.success("게시글이 성공적으로 작성되었습니다.");
          // TODO: 블로그 조회 가능 시 이 navigate 사용
          // navigate(ROUTE.POST.replace(":domain", domain).replace(":id", id));

          navigate(ROUTE.HOME);
        },
      });
    },
    (error) => {
      const message = getErrorMessage(error);
      toast.error(message);
    }
  );

  console.log(watch());

  return (
    <form onSubmit={onSubmit} className="flex min-h-dvh">
      <article className="flex w-1/2 min-w-[960px] flex-col">
        <Controller
          control={control}
          name="title"
          render={({ field }) => (
            <Input
              variant="underline"
              placeholder="지금 생각하고있는 이야기를 써보세요..."
              className="text-primary sticky top-0 z-10 h-22 bg-white px-5 pt-4 pb-2 text-[40px] font-bold placeholder:text-gray-500 placeholder:opacity-20"
              {...field}
            />
          )}
        />
        <div
          className={cn(
            "sticky top-[85px] z-10 flex min-h-14 items-center gap-2 bg-white",
            watch("hashtagList").length > 0 && "pl-5"
          )}
        >
          <ul className="flex gap-2">
            {watch("hashtagList").map((category, index) => (
              <li key={index}>
                <Category
                  category={category}
                  onClick={() => handleCategoryDelete(index)}
                />
              </li>
            ))}
          </ul>
          {watch("hashtagList").length < 15 && (
            <Input
              variant="borderless"
              value={category}
              onChange={handleCategoryChange}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsCategoryInputFocused(true)}
              onBlur={() => setIsCategoryInputFocused(false)}
              onCompositionStart={() => (isComposition.current = true)}
              onCompositionEnd={() => (isComposition.current = false)}
              placeholder="태그를 입력하세요"
              className={cn(
                "flex-1 text-lg placeholder:text-gray-500 placeholder:opacity-50",
                watch("hashtagList").length === 0 ? "px-5" : "px-2"
              )}
            />
          )}
        </div>
        <Controller
          control={control}
          name="content"
          render={({ field }) => (
            <Editor
              initialDoc={field.value}
              onChange={field.onChange}
              isCategoryInputFocused={isCategoryInputFocused}
            />
          )}
        />
        <div className="sticky bottom-0 flex justify-between border-t border-gray-200 bg-white px-5 py-3">
          <Button
            type="button"
            variant="link"
            className="p-0 text-xl text-gray-500"
            onClick={() => navigate(-1)}
          >
            ← 나가기
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" type="button">
              임시저장
            </Button>
            <Button type="submit">개시하기</Button>
          </div>
        </div>
      </article>
      <article className="flex w-1/2 min-w-[940px] flex-col border-l border-gray-200 p-5">
        <h1 className="text-primary mt-7 mb-16 text-[40px] font-bold">
          {watch("title")}
        </h1>
        <Preview doc={watch("content")} />
      </article>
    </form>
  );
}
