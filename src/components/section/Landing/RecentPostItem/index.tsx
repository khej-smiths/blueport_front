import Link from "next/link";

export default function RecentPostItem() {
  return (
    <Link href="/" className="flex flex-col gap-3">
      <h3 className="text-xl font-bold line-clamp-2">
        최근 게시글 제목이에요 최근 게시글 제목이에요 최근 게시글 제목이에요
        최근 게시글 제목이에요 최근 게시글 제목이에요 최근 게시글 제목이에요
      </h3>
      <div className="flex flex-row gap-2 text-sm text-gray-500">
        <p>작성자 누구누구씨</p>
        <p>{new Date().toLocaleDateString("ko-KR")}</p>
      </div>
    </Link>
  );
}
