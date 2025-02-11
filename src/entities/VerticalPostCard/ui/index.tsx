import Link from "next/link";

interface Props {
  username?: string;
  postId?: string;
}

export function VerticalPostCard({ username, postId }: Props) {
  return (
    <Link
      role="feed"
      aria-label="vertical-post-card"
      href={`/${username}/${postId}`}
      className="block overflow-hidden rounded-lg border transition hover:shadow-lg"
    >
      {/* 썸네일 */}
      <div className="h-48 bg-gray-200" />

      {/* 콘텐츠 */}
      <div className="p-4">
        <div className="mb-2 flex items-center gap-4">
          <span className="text-sm text-gray-500">
            {new Date().toLocaleDateString("ko-KR")}
          </span>
          <span className="text-sm text-gray-500">• 작성자 누구누구씨</span>
        </div>
        <h3 className="mb-2 line-clamp-2 text-xl font-bold">
          최근 게시글 제목이에요 최근 게시글 제목이에요
        </h3>
        <p className="mb-4 line-clamp-2 text-sm text-gray-600">
          최근 게시글 내용에 대한 간단한 설명이 들어갑니다.
        </p>
        <div className="flex gap-2">
          <span className="rounded bg-gray-100 px-2 py-1 text-xs">React</span>
          <span className="rounded bg-gray-100 px-2 py-1 text-xs">Next.js</span>
        </div>
      </div>
    </Link>
  );
}
