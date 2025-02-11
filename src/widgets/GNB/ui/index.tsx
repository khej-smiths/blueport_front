export function GNB() {
  return (
    <nav className="flex h-24 items-center justify-center border-b px-6">
      <div className="flex w-full max-w-7xl items-center justify-between">
        <h1>{`Pangho's Blog`}</h1>
        {/* TODO: 로그인 후 보여지는 Github 링크 달 수 있도록 추가 필요 */}
      </div>
    </nav>
  );
}
