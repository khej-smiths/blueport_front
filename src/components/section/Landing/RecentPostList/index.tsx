import PostCard from "@/components/section/PostCard";

export default function RecentPostList() {
  return (
    <div
      role="listbox"
      aria-label="recent-post-list-section"
      className="min-w-[480px] max-w-[480px] flex flex-col gap-5"
    >
      <h2 className="text-2xl font-bold">최근 게시글</h2>
      <ul className="flex flex-col gap-4">
        <PostCard.Vertical />
        <PostCard.Vertical />
        <PostCard.Vertical />
        <PostCard.Vertical />
        <PostCard.Vertical />
        <PostCard.Vertical />
        <PostCard.Vertical />
        <PostCard.Vertical />
        <PostCard.Vertical />
      </ul>
    </div>
  );
}
