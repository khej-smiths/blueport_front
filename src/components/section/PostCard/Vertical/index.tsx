import Link from "next/link";

interface VerticalProps {
  username: string;
  postId: string;
}

export default function Vertical({ username, postId }: VerticalProps) {
  return (
    <Link
      role="feed"
      aria-label="vertical-post-card"
      href={`/${username}/${postId}`}
      className="border rounded-lg overflow-hidden hover:shadow-lg transition block"
    >
      {/* 썸네일 */}
      <div className="h-48 bg-gray-200" />

      {/* 콘텐츠 */}
      <div className="p-4">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-sm text-gray-500">
            {new Date().toLocaleDateString("ko-KR")}
          </span>
          <span className="text-sm text-gray-500">• 작성자 누구누구씨</span>
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2">
          최근 게시글 제목이에요 최근 게시글 제목이에요
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          최근 게시글 내용에 대한 간단한 설명이 들어갑니다.
        </p>
        <div className="flex gap-2">
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">React</span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">Next.js</span>
        </div>
      </div>
    </Link>
  );
}
