"use client";

import Preview from "@/components/section/Preview";
import { EXAMPLE_DOC } from "@/constant/preview";
import { useParams } from "next/navigation";
import Link from "next/link";
import dayjs from "dayjs";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Heading as MdastHeading, PhrasingContent, Text } from "mdast";
import Category from "@/components/common/Category";
import { useInView } from "motion/react";

interface Heading {
  text: string;
  level: number;
  id: string;
}

interface HeadingNode extends MdastHeading {
  type: "heading";
  depth: 1 | 2 | 3 | 4 | 5 | 6;
  children: PhrasingContent[];
}

const getToc = (markdown: string) => {
  const heading: Heading[] = [];
  const usedIds = new Set<string>();

  const tree = unified().use(remarkParse).use(remarkGfm).parse(markdown);

  visit(tree, "heading", (node: HeadingNode) => {
    const textNodes = node.children.filter(
      (child): child is Text => child.type === "text"
    );

    const text = textNodes.map((node) => node.value).join("");

    const baseId = text
      .toLowerCase()
      .replace(/[^a-zA-Z0-9가-힣\s]/g, "")
      .replace(/\s+/g, "-");

    let id = `h${node.depth}-${baseId}`;

    if (usedIds.has(id)) {
      let counter = 1;
      while (usedIds.has(`${id}-${counter}`)) {
        counter++;
      }

      id = `${id}-${counter}`;
    }
    heading.push({
      text,
      level: node.depth,
      id,
    });
  });

  return heading;
};

export default function BlogPost() {
  const [activeId, setActiveId] = useState<string>("");
  const { username } = useParams();
  const headings = useMemo(() => getToc(EXAMPLE_DOC), []);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(titleRef);

  useEffect(() => {
    // Debouncing을 적용하여 성능 최적화가 가능할 것 같음
    const handleScroll = () => {
      // 모든 heading 요소들 가져오기
      const headingElements = Array.from(
        document.querySelectorAll("h1, h2, h3, h4, h5, h6")
      ) as HTMLElement[];

      // 각 heading의 위치를 확인하여 현재 뷰포트에 heading 태그를 찾음
      for (const element of headingElements) {
        const rect = element.getBoundingClientRect();
        // heading이 화면 상단 근처에 있는지 확인, 지금은 100px 이내로 설정
        if (rect.top >= 0 && rect.top <= 100) {
          setActiveId(element.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 초기 로드 시 실행
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToHeading = (heading: Heading) => {
    const element = document.getElementById(heading.id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div className="w-full flex justify-center relative mb-16">
      <article className="max-w-5xl w-full flex flex-col gap-5">
        <div className="max-w-5xl w-full flex flex-col gap-4">
          <h1 ref={titleRef} className="text-5xl font-bold leading-relaxed">
            제목을 뭘로 할까요?
          </h1>
          {/* 작성자 */}
          <div className="flex items-center gap-2">
            <Link
              className="font-bold text-base hover:underline"
              href={`/${username}`}
            >
              {username}
            </Link>
            <p>⁝</p>
            {/* 작성일 */}
            <p className="text-gray-400">
              {dayjs(new Date()).format("YYYY년 MM월 DD일")}
            </p>
          </div>
          {/* 카테고리 */}
          <div className="flex gap-4">
            <Category key="1" category="javascript" />
            <Category key="2" category="typescript" />
            <Category key="3" category="React" />
            <Category key="4" category="Next.js" />
          </div>
          <div className="w-full h-[1px] bg-gray-200" />
          {/* 광고 */}
          <div className="relative flex">
            <Preview doc={EXAMPLE_DOC} />
          </div>
        </div>
      </article>

      {/* TOC를 article 밖으로 분리 */}
      <div className="w-48 ml-8">
        <nav
          className={cn(
            "p-4 border-l-4",
            !inView ? "fixed top-[110px]" : "absolute top-48"
          )}
        >
          <ul className="space-y-2 text-sm">
            {headings.map((heading, index) => (
              <li
                key={index}
                onClick={() => goToHeading(heading)}
                className={cn(
                  "text-base hover:font-bold hover:text-black cursor-pointer text-gray-400 transition-colors",
                  heading.level === 1 || heading.level === 2
                    ? "pl-0"
                    : heading.level === 3
                    ? "pl-4"
                    : "pl-8",
                  // activeId와 일치하면 볼드 처리
                  activeId === heading.id && "font-bold text-black"
                )}
              >
                {heading.text}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
