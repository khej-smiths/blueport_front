import { HorizontalPostCard } from "@/entities";

export function PopularPostList() {
  return (
    <div
      role="listbox"
      aria-label="popular-post-list-section"
      className="flex w-full flex-col gap-5"
    >
      <h2 className="text-2xl font-bold">초 인기 게시글</h2>
      <ul className="flex flex-col gap-5">
        <HorizontalPostCard />
        <HorizontalPostCard />
        <HorizontalPostCard />
        <HorizontalPostCard />
        <HorizontalPostCard />
        <HorizontalPostCard />
        <HorizontalPostCard />
        <HorizontalPostCard />
        <HorizontalPostCard />
        <HorizontalPostCard />
      </ul>
    </div>
  );
}
