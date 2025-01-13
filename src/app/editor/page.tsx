"use client";

import { ChangeEvent, KeyboardEvent, useCallback, useState } from "react";
import { Button } from "@/components/common/Button";
import Category from "@/components/common/Category";
import { Input } from "@/components/common/Input";
import Editor from "@/components/section/Editor";
import Preview from "@/components/section/Preview";
import { EXAMPLE_DOC } from "@/constant/preview";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function EditorPage() {
  const [doc, setDoc] = useState(EXAMPLE_DOC);
  const [categories, setCategories] = useState<string[]>([]);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [isCategoryInputFocused, setIsCategoryInputFocused] = useState(false);
  const router = useRouter();

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === " " || e.key === "Enter") && category.trim()) {
      e.preventDefault();

      if (categories.length > 9) {
        setCategory("");
        return;
      }

      setCategories((prev) => [...prev, category.trim()]);
      setCategory("");
    }

    if (
      e.key === "Backspace" &&
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
      <article className="flex flex-col min-w-[960px] w-1/2">
        <Input
          variant="underline"
          placeholder="지금 생각하고있는 이야기를 써보세요..."
          className="h-22 text-[40px] font-bold px-5 pt-4 pb-2 sticky top-0 bg-white z-10 placeholder:text-gray-500 placeholder:opacity-20"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div
          className={cn(
            "flex items-center gap-2 min-h-14 sticky top-[85px] bg-white z-10",
            categories.length > 0 && "pl-5"
          )}
        >
          {categories.map((category, index) => (
            <Category
              key={index}
              category={category}
              onClick={() => handleCategoryDelete(index)}
            />
          ))}
          {categories.length < 15 && (
            <Input
              variant="borderless"
              value={category}
              onChange={handleCategoryChange}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsCategoryInputFocused(true)}
              onBlur={() => setIsCategoryInputFocused(false)}
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
        <div className="flex justify-between px-5 py-3 sticky bottom-0 bg-white border-t border-gray-200">
          <Button
            variant="link"
            className="text-gray-500 text-xl p-0"
            onClick={() => router.back()}
          >
            ← 나가기
          </Button>
          <div className="flex gap-2">
            <Button variant="outline">임시저장</Button>
            <Button>개시하기</Button>
          </div>
        </div>
      </article>
      <article className="flex flex-col min-w-[940px] w-1/2 border-l border-gray-200 p-5">
        <h1 className="text-[40px] font-bold mt-7 mb-16">{title}</h1>
        <Preview doc={doc} />
      </article>
    </section>
  );
}
