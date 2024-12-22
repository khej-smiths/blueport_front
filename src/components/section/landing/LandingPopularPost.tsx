import { Button } from "@/components/ui/Button";

export default function LandingPopularPost() {
  return (
    <li className="flex flex-row gap-5">
      <div className="size-[220px] aspect-square object-cover bg-gray-500" />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-2">
            <p className="text-sm text-gray-400">
              {new Date().toLocaleDateString("ko-KR")}
            </p>
            <p className="text-sm text-gray-500">작성자 누구누구씨</p>
          </div>
          <p className="text-xl font-bold line-clamp-2">
            인기 게시글 제목이에요 인기 게시글 제목이에요인기 게시글 제목이에요
            인기 게시글 제목이에요
          </p>
          <p className="line-clamp-3">
            인기 게시글 내용이에요 인기 게시글 내용이에요 인기 게시글 내용이에요
            인기 게시글 내용이에요 인기 게시글 내용이에요 인기 게시글 내용이에요
            인기 게시글 내용이에요 인기 게시글 내용이에요 인기 게시글 내용이에요
            인기 게시글 내용이에요 인기 게시글 내용이에요 인기 게시글 내용이에요
            인기 게시글 내용이에요 인기 게시글 내용이에요 인기 게시글 내용이에요
            인기 게시글 내용이에요 인기 게시글 내용이에요 인기 게시글 내용이에요
            인기 게시글 내용이에요 인기 게시글 내용이에요 인기 게시글 내용이에요
          </p>
        </div>
        <Button variant="link" className="size-fit p-0">
          <p>더보기</p>
        </Button>
      </div>
    </li>
  );
}
