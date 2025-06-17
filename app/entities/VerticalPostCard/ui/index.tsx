import { ReadPostListQuery } from "@/shared";
import { format } from "date-fns";
import { Link } from "react-router";

interface Props {
  post: ReadPostListQuery["readPostList"][number];
}

export function VerticalPostCard({ post }: Props) {
  return (
    <Link
      role="feed"
      aria-label="vertical-post-card"
      to={`/${post.writer.blog?.domain}/${post.id}`}
      className="block overflow-hidden rounded-lg border transition hover:shadow-lg"
    >
      {/* 썸네일 */}
      <div className="h-48 bg-gray-200" />

      {/* 콘텐츠 */}
      <div className="p-4">
        <div className="mb-2 flex items-center gap-4">
          <span className="text-sm text-gray-500">
            {format(post.createdAt, "yyyy.MM.dd")}
          </span>
          <span className="text-sm text-gray-500">• {post.writer.name}</span>
        </div>
        <h3 className="text-primary mb-2 line-clamp-2 text-xl font-bold">
          {post.title}
        </h3>
        <p className="mb-4 line-clamp-2 max-w-11/12 text-sm text-ellipsis whitespace-nowrap text-gray-600">
          {post.content}
        </p>
        <div className="flex gap-2">
          {post.hashtagList?.map((tag, index) => (
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
