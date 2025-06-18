import { mdToPlanText, ReadPostListQuery } from "@/shared";
import { format } from "date-fns";
import { Link } from "react-router";

interface Props {
  post: ReadPostListQuery["readPostList"][number];
}

export function HorizontalPostCard({ post }: Props) {
  return (
    <li
      role="feed"
      aria-label="horizontal-post-card"
      className="group flex w-full"
    >
      <Link
        to={`/${post.writer.blog?.domain}/${post.id}`}
        className="flex w-full flex-col overflow-hidden rounded-lg border transition hover:shadow-lg md:flex-row"
      >
        {/* 썸네일 */}
        <div className="h-full w-full flex-shrink-0 bg-gray-200 md:w-64" />

        {/* 콘텐츠 */}
        <div className="flex flex-grow flex-col justify-between p-6">
          <div className="flex flex-col gap-2">
            <div className="mb-2 flex items-center gap-4">
              <span className="text-sm text-gray-500">
                {format(post.createdAt, "yyyy년 MM월 dd일")}
              </span>
              <span className="text-sm text-gray-500">
                • {post.writer.name}
              </span>
            </div>
            <h4 className="group-hover:text-primary mb-2 line-clamp-2 text-xl font-bold group-hover:transition-colors">
              {post.title}
            </h4>
            <p className="mb-4 line-clamp-3 text-gray-600">
              {mdToPlanText(post.content)}
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
        </div>
      </Link>
    </li>
  );
}
