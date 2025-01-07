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
import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { Heading as MdastHeading, PhrasingContent, Text } from "mdast";

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
  const { username } = useParams();
  const headings = useMemo(() => getToc(EXAMPLE_DOC), []);

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
    <article className="min-w-[768px] mt-40 flex flex-col gap-5 relative">
      <h1 className="text-5xl font-bold leading-relaxed">
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
      {/* 광고 */}
      <Preview doc={EXAMPLE_DOC} />
      {/* TOC */}
      <div className="fixed top-40 right-60">
        <nav className="w-48 p-4 border-l-4">
          <ul className="space-y-2 text-sm">
            {headings.map((heading, index) => (
              <li
                key={index}
                onClick={() => goToHeading(heading)}
                className={cn(
                  "text-base hover:font-bold cursor-pointer",
                  heading.level === 1 || heading.level === 2
                    ? "pl-0"
                    : heading.level === 3
                    ? "pl-4"
                    : heading.level === 4
                    ? "pl-8"
                    : "pl-8"
                )}
              >
                {heading.text}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </article>
  );
}
