import Link from "next/link";

interface Props {
  username?: string;
  postId?: string;
}

export function HorizontalPostCard({ username, postId }: Props) {
  return (
    <li role="feed" aria-label="horizontal-post-card" className="flex w-full">
      <Link
        href={`/${username}/${postId}`}
        className="flex w-full flex-col overflow-hidden rounded-lg border transition hover:shadow-lg md:flex-row"
      >
        {/* 썸네일 */}
        <div className="h-full w-full flex-shrink-0 bg-gray-200 md:w-64" />

        {/* 콘텐츠 */}
        <div className="flex flex-grow flex-col justify-between p-6">
          <div className="flex flex-col gap-2">
            <div className="mb-2 flex items-center gap-4">
              <span className="text-sm text-gray-500">
                {new Date().toLocaleDateString("ko-KR")}
              </span>
              <span className="text-sm text-gray-500">• 작성자 누구누구씨</span>
            </div>
            <h4 className="mb-2 line-clamp-2 text-xl font-bold">
              인기 게시글 제목이에요 인기 게시글 제목이에요 인기 게시글
              제목이에요
            </h4>
            <p className="mb-4 line-clamp-3 text-gray-600">
              인기 게시글 내용이에요 인기 게시글 내용이에요 인기 게시글
              내용이에요 인기 게시글 내용이에요 인기 게시글 내용이에요
            </p>
            <div className="flex gap-2">
              <span className="rounded bg-gray-100 px-2 py-1 text-xs">
                React
              </span>
              <span className="rounded bg-gray-100 px-2 py-1 text-xs">
                Next.js
              </span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
