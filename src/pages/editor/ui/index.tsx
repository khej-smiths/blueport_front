"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { toast } from "sonner";

import { Editor, Preview } from "@/features";
import {
  Button,
  Category,
  cn,
  EXAMPLE_DOC,
  Input,
  ROUTE,
  useAuthStore,
} from "@/shared";

export function EditorPage() {
  const [doc, setDoc] = useState(EXAMPLE_DOC);
  const [categories, setCategories] = useState<string[]>([]);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [isCategoryInputFocused, setIsCategoryInputFocused] = useState(false);

  const isComposition = useRef(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const isDemo = Boolean(searchParams?.get("demo"));

  const { accessToken } = useAuthStore();

  useEffect(() => {
    if (!isDemo && !accessToken) {
      router.push(ROUTE.LOGIN);
    }
  }, [accessToken, isDemo, router]);

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

      if (categories.length > 9) {
        setCategory("");
        return;
      }

      setCategories((prev) => [...prev, category.trim()]);
      setCategory("");
    }

    if (
      key === "Backspace" &&
      categories.length > 0 &&
      category.trim() === ""
    ) {
      handleCategoryDelete(categories.length - 1);
    }
  };

  const handleCategoryDelete = (indexToDelete: number) => {
    setCategories((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc);
  }, []);

  return (
    <section className="flex min-h-dvh">
      <article className="flex w-1/2 min-w-[960px] flex-col">
        <Input
          variant="underline"
          placeholder="지금 생각하고있는 이야기를 써보세요..."
          className="h-22 sticky top-0 z-10 bg-white px-5 pb-2 pt-4 text-[40px] font-bold placeholder:text-gray-500 placeholder:opacity-20"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div
          className={cn(
            "sticky top-[85px] z-10 flex min-h-14 items-center gap-2 bg-white",
            categories.length > 0 && "pl-5"
          )}
        >
          <ul className="flex gap-2">
            {categories.map((category, index) => (
              <li key={index}>
                <Category
                  category={category}
                  onClick={() => handleCategoryDelete(index)}
                />
              </li>
            ))}
          </ul>
          {categories.length < 15 && (
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
                categories.length === 0 ? "px-5" : "px-2"
              )}
            />
          )}
        </div>
        <Editor
          initialDoc={doc}
          onChange={handleDocChange}
          isCategoryInputFocused={isCategoryInputFocused}
        />
        <div className="sticky bottom-0 flex justify-between border-t border-gray-200 bg-white px-5 py-3">
          <Button
            variant="link"
            className="p-0 text-xl text-gray-500"
            onClick={() => router.back()}
          >
            ← 나가기
          </Button>
          <div className="flex gap-2">
            <Button variant="outline">임시저장</Button>
            <Button onClick={() => toast("test")}>개시하기</Button>
          </div>
        </div>
      </article>
      <article className="flex w-1/2 min-w-[940px] flex-col border-l border-gray-200 p-5">
        <h1 className="mb-16 mt-7 text-[40px] font-bold">{title}</h1>
        <Preview doc={doc} />
      </article>
    </section>
  );
}
