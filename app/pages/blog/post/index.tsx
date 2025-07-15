import { format } from "date-fns";
import { Link, useNavigate } from "react-router";
import { useParams } from "react-router";
import { Suspense, useEffect, useMemo, useState } from "react";

import { DeleteDialog, Preview } from "@/features";
import {
  Button,
  cn,
  HOOKS,
  Loading,
  ROUTE,
  Hashtag,
  useResponsive,
  QUERIES,
  QUERY_KEY,
} from "@/shared";
import { getToc } from "./model/getToc";
import { Heading } from "./model/type";
import { useDeletePost } from "./api/useDeletePost";
import { Pencil, Trash2 } from "lucide-react";
import { dehydrate, QueryClient } from "@tanstack/react-query";

export async function loader({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: QUERY_KEY.post.readPost(postId),
    queryFn: () => QUERIES.readPost({ id: postId }),
  });

  return {
    dehydratedState: dehydrate(queryClient),
  };
}

export default function Post() {
  const [activeId, setActiveId] = useState<string>("");
  const { domain, postId } = useParams();

  const { data: self } = HOOKS.useSelf();
  const { data: blog } = HOOKS.useGetBlogByDomain(domain);
  const { data: post } = HOOKS.useGetPost(postId);
  const { mutate: deletePost } = useDeletePost();

  const { isMobile } = useResponsive();

  const headings = useMemo(() => getToc(post?.content ?? ""), [post]);
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

  if (post === undefined || blog === undefined) return null;

  return (
    <Suspense fallback={<Loading />}>
      <div className="relative mt-16 mb-16 flex w-full justify-center not-xl:mt-4">
        <article className="flex w-full flex-col gap-5 xl:max-w-5xl">
          <div className="flex w-full flex-col gap-4 not-xl:p-4 xl:max-w-5xl">
            <h1 className="text-primary text-5xl leading-relaxed font-bold not-xl:text-3xl">
              {post.title}
            </h1>
            {/* 작성자 */}
            <div className="flex items-center gap-2">
              <Link
                prefetch="viewport"
                className="text-base font-bold not-xl:underline hover:underline"
                to={`/${blog.domain}`}
              >
                {post.owner.name}
              </Link>
              <p>⁝</p>
              {/* 작성일 */}
              <p className="text-gray-400">
                {format(post.createdAt, "yyyy년 MM월 dd일")}
              </p>
            </div>
            {/* 해시태그 */}
            <div className="flex items-center justify-between gap-x-4">
              <div className="scrollbar-hide flex-1 overflow-auto">
                <div className="flex flex-nowrap gap-x-4 gap-y-2">
                  {post.hashtagList?.map((hashtag, index) => (
                    <Hashtag key={`${hashtag}_${index}`} hashtag={hashtag} />
                  ))}
                </div>
              </div>
              {/* 수정, 삭제 (작성자 본인만 표시) */}
              {self?.id === post.owner.id && (
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    onClick={goToModify}
                    className="size-10 p-1"
                  >
                    <Pencil className="stroke-muted-foreground size-5" />
                  </Button>
                  <DeleteDialog
                    trigger={
                      <Button variant="ghost" className="size-10 p-1">
                        <Trash2 className="stroke-muted-foreground size-5" />
                      </Button>
                    }
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
        {!isMobile && (
          <div className="ml-8 w-48">
            {headings.length > 0 && (
              <nav className={"fixed top-[188px] border-l-4 p-4"}>
                <ul className="space-y-2 text-sm">
                  {headings.map((heading, index) => (
                    <li
                      key={index}
                      onClick={() => goToHeading(heading)}
                      className={cn(
                        "hover:text-primary cursor-pointer text-base text-gray-400 transition-colors hover:font-bold",
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
        )}
      </div>
    </Suspense>
  );
}
