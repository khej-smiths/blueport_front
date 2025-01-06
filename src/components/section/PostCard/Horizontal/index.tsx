import Link from "next/link";

export default function Horizontal() {
  return (
    <li role="feed" aria-label="horizontal-post-card" className="flex w-full">
      <Link
        href="/"
        className="w-full border rounded-lg overflow-hidden hover:shadow-lg transition flex flex-col md:flex-row"
      >
        {/* 썸네일 */}
        <div className="w-full md:w-64 h-full bg-gray-200 flex-shrink-0" />

        {/* 콘텐츠 */}
        <div className="p-6 flex flex-col justify-between flex-grow">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-sm text-gray-500">
                {new Date().toLocaleDateString("ko-KR")}
              </span>
              <span className="text-sm text-gray-500">• 작성자 누구누구씨</span>
            </div>
            <h4 className="text-xl font-bold mb-2 line-clamp-2">
              인기 게시글 제목이에요 인기 게시글 제목이에요 인기 게시글
              제목이에요
            </h4>
            <p className="text-gray-600 mb-4 line-clamp-3">
              인기 게시글 내용이에요 인기 게시글 내용이에요 인기 게시글
              내용이에요 인기 게시글 내용이에요 인기 게시글 내용이에요
            </p>
            <div className="flex gap-2">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                React
              </span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                Next.js
              </span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
