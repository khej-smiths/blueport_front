export default function GNB() {
  return (
    <nav className="h-24 flex justify-center items-center px-6 border-b">
      <div className="max-w-7xl w-full flex items-center justify-between">
        <h1>{`Pangho's Blog`}</h1>
        {/* TODO: 로그인 후 보여지는 Github 링크 달 수 있도록 추가 필요 */}
      </div>
    </nav>
  );
}
