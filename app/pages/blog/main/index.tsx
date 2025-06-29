import { HorizontalPostCard, VerticalPostCard } from "@/entities";
import {
  HOOKS,
  Loading,
  Sort_Option,
  Hashtag,
  ReadPostListQuery,
  useResponsive,
} from "@/shared";
import { Profile } from "@/widgets";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { useGetPostListByBlogId } from "../api/useGetPostListByBlogId";

export default function Blog() {
  const [postList, setPostList] = useState<ReadPostListQuery["readPostList"]>(
    []
  );
  const [pageNumber, setPageNumber] = useState(1);
  const [isLast, setIsLast] = useState(false);
  const { domain } = useParams();
  const { data: blog } = HOOKS.useGetBlogByDomain(domain);
  const { isMobile } = useResponsive();

  // 최근 게시글 조회
  const { data: recentPostList } = useGetPostListByBlogId({
    blogId: blog?.id,
    sortOption: Sort_Option.Newest,
    limit: 3,
    pageNumber: 1,
  });

  // 전체 게시글 조회
  const {
    data: postListData,
    isLoading,
    isRefetching,
  } = useGetPostListByBlogId({
    blogId: blog?.id,
    limit: 10,
    pageNumber,
  });

  const observer = useRef<IntersectionObserver | null>(null);

  const loading = isLoading || isRefetching;

  useEffect(() => {
    if (!postListData) return;

    setPostList((prev) => [...prev, ...postListData]);
    setIsLast(postListData.length === 0);
  }, [postListData, blog]);

  const loadingElement = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading || isLast) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPageNumber((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, isLast]
  );

  if (blog === undefined) return null;

  return (
    <main className="mt-16 mb-16 flex min-h-dvh flex-col items-center not-xl:mt-4">
      <article className="flex w-full flex-col gap-16 p-8 not-xl:p-4 xl:max-w-7xl">
        <section className="flex flex-col items-center gap-4">
          <Profile blog={blog} />
        </section>

        {/* 최신 글 섹션 */}
        <section>
          <h3 className="text-primary mb-6 text-2xl font-bold not-xl:text-xl">
            최근 게시글
          </h3>
          {recentPostList && recentPostList.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
              <Suspense fallback={<Loading />}>
                {recentPostList.map((post) => (
                  <VerticalPostCard key={post.id} post={post} />
                ))}
              </Suspense>
            </div>
          ) : (
            <p className="text-center text-2xl font-thin not-xl:text-xl">
              작성된 글이 없습니다!
            </p>
          )}
        </section>

        {/* 해시태그 섹션 */}
        <section className="">
          <h3 className="text-primary mb-6 text-2xl font-bold not-xl:text-xl">
            해시태그
          </h3>
          <div className="flex flex-wrap gap-x-2 gap-y-4">
            <Hashtag key="all" hashtag="전체" total={12} />
            {[
              "Frontend",
              "Backend",
              "DevOps",
              "Algorithm",
              "Database",
              "Security",
              "Mobile",
              "Cloud",
              "Frontend2",
              "Backend2",
              "DevOps2",
              "Algorithm2",
              "Database2",
              "Security2",
              "Mobile2",
              "Cloud2",
              "Frontend3",
              "Backend3",
              "DevOps3",
              "Algorithm3",
              "Database3",
              "Security3",
              "Mobile3",
              "Cloud3",
            ].map((hashtag) => (
              <Hashtag key={hashtag} hashtag={hashtag} total={12} />
            ))}
          </div>
        </section>

        {/* 전체 글 목록 섹션 */}
        <section className="flex flex-col gap-4">
          <h3 className="text-primary text-2xl font-bold not-xl:text-xl">
            전체 게시글
          </h3>
          <ul className="flex flex-col gap-4">
            {postList.map((post) => (
              <>
                {isMobile ? (
                  <VerticalPostCard key={post.id} post={post} />
                ) : (
                  <HorizontalPostCard key={post.id} post={post} />
                )}
              </>
            ))}
          </ul>
          {!loading && isLast && postList.length === 0 && (
            <p className="text-center text-2xl font-thin">
              작성된 글이 없습니다!
            </p>
          )}
          {(!isLast || loading) && (
            <div ref={loadingElement} className="flex justify-center">
              <Loading />
            </div>
          )}
        </section>
      </article>
    </main>
  );
}
