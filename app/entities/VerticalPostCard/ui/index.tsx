import { ReadPostListQuery } from "@/shared";
import { format } from "date-fns";
import { Link } from "react-router";

interface Props {
  post?: ReadPostListQuery["readPostList"][number];
}

export function VerticalPostCard({ post }: Props) {
  const url = post
    ? `/${post.writer.blog?.domain}/${post.id}`
    : "#";
  const createdAt = post
    ? format(post.createdAt, "yyyy.MM.dd")
    : new Date().toLocaleDateString("ko-KR");
  const writer = post?.writer.name ?? "작성자 누구누구씨";
  const title =
    post?.title ?? "게시글 제목이에요 게시글 제목이에요 게시글 제목이에요";
  const content =
    post?.content ??
    "게시글 내용이에요 게시글 내용이에요 게시글 내용이에요 게시글 내용이에요 게시글 내용이에요";
  const hashtagList = post?.hashtagList ?? ["React", "Next.js"];

  return (
    <Link
      role="feed"
      aria-label="vertical-post-card"
      to={url}
      className="group block overflow-hidden rounded-lg border transition hover:shadow-lg"
    >
      {/* 썸네일 */}
      <div className="h-48 bg-gray-200" />

      {/* 콘텐츠 */}
      <div className="p-4">
        <div className="mb-2 flex items-center gap-4">
          <span className="text-sm text-gray-500">{createdAt}</span>
          <span className="text-sm text-gray-500">• {writer}</span>
        </div>
        <h3 className="group-hover:text-primary mb-2 line-clamp-2 text-xl font-bold group-hover:transition-colors">
          {title}
        </h3>
        <p className="mb-4 line-clamp-2 max-w-11/12 text-sm text-ellipsis whitespace-nowrap text-gray-600">
          {content}
        </p>
        <div className="flex gap-2">
          {hashtagList.map((tag, index) => (
            <span
              key={`${tag}_${index}`}
              className="rounded bg-gray-100 px-2 py-1 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
