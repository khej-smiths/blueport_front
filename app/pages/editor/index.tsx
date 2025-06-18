import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

import { Editor, Preview } from "@/features";
import {
  Button,
  cn,
  CreatePostInputDto,
  getErrorMessage,
  Hashtag,
  HOOKS,
  Input,
  ROUTE,
  UpdatePostInputDto,
  useAuthStore,
} from "@/shared";
import { useSearchParams } from "react-router";
import { useNavigate } from "react-router";
import { Controller, useForm } from "react-hook-form";
import { EditorForm } from "./model/type";
import { useCreatePost } from "./api/useCreatePost";
import { zodResolver } from "@hookform/resolvers/zod";
import { editorSchema } from "./model/schema";
import { useUpdatePost } from "./api/useUpdatePost";

export default function EditorPage() {
  const [hashtag, setHashtag] = useState("");
  const [isHashtagInputFocused, setIsHashtagInputFocused] = useState(false);
  const { control, setValue, reset, watch, handleSubmit } = useForm<EditorForm>(
    {
      defaultValues: {
        hashtagList: [],
      },
      resolver: zodResolver(editorSchema),
    }
  );

  const isComposition = useRef(false);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const postId = searchParams.get("postId");
  const isDemo = Boolean(searchParams.get("demo"));
  const isModify = Boolean(postId);

  const { accessToken } = useAuthStore();

  const { data: post } = HOOKS.useGetPost(postId);
  const { mutate: createPost } = useCreatePost();
  const { mutate: updatePost } = useUpdatePost();

  useEffect(() => {
    // 비로그인, 데모 모드 아닐 시 로그인 화면으로 이동
    if (!isDemo && !accessToken) {
      navigate(ROUTE.LOGIN);
    }
  }, [accessToken, isDemo, navigate]);

  useEffect(() => {
    // 수정 진입 시 필드 초기화
    if (isModify && post) {
      reset({
        title: post.title,
        hashtagList: post.hashtagList ? post.hashtagList : [],
        content: post.content,
      });
    }
  }, [postId, post]);

  //** 해시테그 변경 */
  const handleHashtagChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHashtag(e.target.value);
  };

  /** 카테고리 입력 키보드 함수 */
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const key = e.code;

    if (isComposition.current) return;

    if (
      (key === "Space" || key === "Enter" || key === "Comma") &&
      hashtag.trim()
    ) {
      e.preventDefault();

      if (watch("hashtagList").length > 9) {
        setHashtag("");
        return;
      }

      setValue("hashtagList", [...watch("hashtagList"), hashtag.trim()]);
      setHashtag("");
    }

    if (
      key === "Backspace" &&
      watch("hashtagList").length > 0 &&
      hashtag.length === 0
    ) {
      handleHashtagDelete(watch("hashtagList").length - 1);
    }
  };

  /** 해시테그 삭제 함수 */
  const handleHashtagDelete = (indexToDelete: number) => {
    setValue(
      "hashtagList",
      watch("hashtagList").filter((_, index) => index !== indexToDelete)
    );
  };

  /** 게시글 작성 또는 수정 함수 */
  const onSubmit = handleSubmit(
    (data) => {
      if (isDemo || !accessToken) {
        // 데모 모드 또는 비로그인 시 게시글 작성 불가
        toast("체험하기에서는 게시글을 작성할 수 없습니다 🥲");
        return;
      }

      if (isModify && postId) {
        // 수정 요청 시 수행
        const input: UpdatePostInputDto = {
          id: postId,
          title: data.title,
          content: data.content,
          hashtagList: data.hashtagList,
        };

        updatePost(input);

        return;
      }

      // 게시글 작성 요청 시 수행
      const input: CreatePostInputDto = {
        title: data.title,
        content: data.content,
        hashtagList: data.hashtagList,
      };

      createPost(input);
    },
    (error) => {
      const message = getErrorMessage(error);
      toast.error(message);
    }
  );

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
            {watch("hashtagList").map((hashtag, index) => (
              <li key={index}>
                <Hashtag
                  hashtag={hashtag}
                  onClick={() => handleHashtagDelete(index)}
                />
              </li>
            ))}
          </ul>
          {watch("hashtagList").length < 15 && (
            <Input
              variant="borderless"
              value={hashtag}
              onChange={handleHashtagChange}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsHashtagInputFocused(true)}
              onBlur={() => setIsHashtagInputFocused(false)}
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
              isHashtagInputFocused={isHashtagInputFocused}
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
