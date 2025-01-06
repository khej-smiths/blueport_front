import PostCard from "@/components/section/PostCard";

export default function PopularPostList() {
  return (
    <div
      role="listbox"
      aria-label="popular-post-list-section"
      className="w-full flex flex-col gap-5"
    >
      <h2 className="text-2xl font-bold">초 인기 게시글</h2>
      <ul className="flex flex-col gap-5">
        <PostCard.Horizontal />
        <PostCard.Horizontal />
        <PostCard.Horizontal />
        <PostCard.Horizontal />
        <PostCard.Horizontal />
        <PostCard.Horizontal />
        <PostCard.Horizontal />
        <PostCard.Horizontal />
        <PostCard.Horizontal />
        <PostCard.Horizontal />
      </ul>
    </div>
  );
}
