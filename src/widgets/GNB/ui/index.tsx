import Link from "next/link";

export function GNB() {
  return (
    <nav className="flex h-24 items-center justify-center border-b px-6">
      <div className="flex w-full max-w-7xl items-center justify-between">
        {/* TODO: 블로그로 이동하도록 변경해야 함 */}
        <Link href="/">
          <h1
            role="heading"
            aria-label="title"
            className="text-2xl font-bold text-primary hover:underline"
          >{`Pangho's Blog`}</h1>
        </Link>
        {/* TODO: 로그인 후 보여지는 Github 링크 달 수 있도록 추가 필요 */}
      </div>
    </nav>
  );
}
