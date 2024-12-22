import LandingRecentPost from "./LandingRecentPost";

export default function LandingRecentPostList() {
  return (
    <div className="min-w-[480px] max-w-[480px] flex flex-col gap-5">
      <h2 className="text-2xl font-bold">최근 게시글</h2>
      <ul className="flex flex-col gap-4">
        <LandingRecentPost />
        <LandingRecentPost />
        <LandingRecentPost />
        <LandingRecentPost />
        <LandingRecentPost />
        <LandingRecentPost />
        <LandingRecentPost />
        <LandingRecentPost />
        <LandingRecentPost />
        <LandingRecentPost />
      </ul>
    </div>
  );
}
