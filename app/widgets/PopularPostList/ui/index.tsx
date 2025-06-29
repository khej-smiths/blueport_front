import { HorizontalPostCard, VerticalPostCard } from "@/entities";
import { Loading, Sort_Option, useResponsive } from "@/shared";
import { HOOKS } from "@/shared";
import { Suspense } from "react";

export function PopularPostList() {
  const { data: popularPostList } = HOOKS.useGetPostList({
    sortOption: Sort_Option.ViewCount,
    limit: 10,
    pageNumber: 1,
  });

  const { isMobile } = useResponsive();

  if (popularPostList === undefined) return null;

  return (
    <div
      role="listbox"
      aria-label="popular-post-list-section"
      className="flex w-full flex-col gap-5"
    >
      <h2 className="text-primary text-2xl font-bold">인기 게시글</h2>
      <ul className="flex flex-col gap-5">
        <Suspense fallback={<Loading />}>
          {popularPostList.map((post) => (
            <>
              {isMobile ? (
                <VerticalPostCard key={post.id} post={post} />
              ) : (
                <HorizontalPostCard key={post.id} post={post} />
              )}
            </>
          ))}
        </Suspense>
      </ul>
    </div>
  );
}
