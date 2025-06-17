import { VerticalPostCard } from "@/entities";
import { Loading, Sort_Option } from "@/shared";
import { HOOKS } from "@/shared";
import { Suspense } from "react";

export function RecentPostList() {
  const { data: recentPostList } = HOOKS.useGetRecentPostList({
    sortOption: Sort_Option.Newest,
    limit: 10,
    pageNumber: 1,
  });

  if (recentPostList === undefined) return null;
  return (
    <div
      role="listbox"
      aria-label="recent-post-list-section"
      className="flex max-w-[480px] min-w-[480px] flex-col gap-5"
    >
      <h2 className="text-primary text-2xl font-bold">최근 게시글</h2>
      <ul className="flex flex-col gap-4">
        <Suspense fallback={<Loading />}>
          {recentPostList?.map((post) => (
            <VerticalPostCard key={post.id} post={post} />
          ))}
        </Suspense>
      </ul>
    </div>
  );
}
