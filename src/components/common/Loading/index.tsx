export default function Loading() {
  return (
    // 로딩 인디케이터
    <div
      className="text-center py-8"
      role="feed"
      aria-label="loading-indicator"
    >
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-gray-300 border-t-gray-800" />
    </div>
  );
}
