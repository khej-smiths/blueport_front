import { format } from "date-fns";
import { useInView } from "motion/react";
import { Link, useNavigate } from "react-router";
import { useParams } from "react-router";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";

import { DeleteDialog, Preview } from "@/features";
import { Button, cn, HOOKS, Loading, ROUTE, Hashtag } from "@/shared";
import { getToc } from "./model/getToc";
import { Heading } from "./model/type";
import { useDeletePost } from "./api/useDeletePost";

export default function Post() {
  const [activeId, setActiveId] = useState<string>("");
  const { domain, postId } = useParams();

  const { data: self } = HOOKS.useSelf();
  const { data: blog } = HOOKS.useGetBlogByDomain(domain);
  const { data: post } = HOOKS.useGetPost(postId);
  const { mutate: deletePost } = useDeletePost();

  const headings = useMemo(() => getToc(post?.content ?? ""), [post]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(titleRef);
  const navigate = useNavigate();

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
  }, [headings]);

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

  const goToModify = () => {
    navigate(`${ROUTE.EDITOR}?postId=${postId}`);
  };

  if (post === undefined || blog === undefined || self === undefined)
    return null;

  return (
    <Suspense fallback={<Loading />}>
      <div className="relative mb-16 flex w-full justify-center">
        <article className="flex w-full max-w-5xl flex-col gap-5">
          <div className="flex w-full max-w-5xl flex-col gap-4">
            <h1
              ref={titleRef}
              className="text-primary text-5xl leading-relaxed font-bold"
            >
              {post.title}
            </h1>
            {/* 작성자 */}
            <div className="flex items-center gap-2">
              <Link
                className="text-base font-bold hover:underline"
                to={`/${blog.domain}`}
              >
                {post.writer.name}
              </Link>
              <p>⁝</p>
              {/* 작성일 */}
              <p className="text-gray-400">
                {format(post.createdAt, "yyyy년 MM월 dd일")}
              </p>
            </div>
            {/* 카테고리 */}
            <div className="flex items-end justify-between">
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {post.hashtagList?.map((hashtag, index) => (
                  <Hashtag key={`${hashtag}_${index}`} hashtag={hashtag} />
                ))}
              </div>
              {/* 수정, 삭제 (작성자 본인만 표시) */}
              {self.id === post.writer.id && (
                <div className="flex gap-2">
                  <Button variant="outline" onClick={goToModify}>
                    수정
                  </Button>
                  <DeleteDialog
                    trigger={<Button variant="outline">삭제</Button>}
                    onAction={() => deletePost({ id: post.id })}
                  />
                </div>
              )}
            </div>
            <div className="h-[1px] w-full bg-gray-200" />
            {/* 광고 */}
            <div className="relative flex">
              <Preview doc={post.content} />
            </div>
          </div>
        </article>

        {/* TOC를 article 밖으로 분리 */}
        <div className="ml-8 w-48">
          {headings.length > 0 && (
            <nav
              className={cn(
                "border-l-4 p-4",
                !inView ? "fixed top-[110px]" : "absolute top-48"
              )}
            >
              <ul className="space-y-2 text-sm">
                {headings.map((heading, index) => (
                  <li
                    key={index}
                    onClick={() => goToHeading(heading)}
                    className={cn(
                      "cursor-pointer text-base text-gray-400 transition-colors hover:font-bold hover:text-black",
                      heading.level === 1 || heading.level === 2
                        ? "pl-0"
                        : heading.level === 3
                          ? "pl-4"
                          : "pl-8",
                      // activeId와 일치하면 볼드 처리
                      activeId === heading.id && "text-primary font-bold"
                    )}
                  >
                    {heading.text}
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </Suspense>
  );
}
