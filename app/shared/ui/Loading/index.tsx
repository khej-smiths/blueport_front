export function Loading() {
  return (
    // 로딩 인디케이터
    <div
      className="py-8 text-center"
      role="feed"
      aria-label="loading-indicator"
    >
      <div className="border-accent border-t-primary inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid" />
    </div>
  );
}
