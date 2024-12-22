import LandingPopularPost from "./LandingPopularPost";

export default function LandingPopularPostList() {
  return (
    <div className="w-full flex flex-col gap-5">
      <h2 className="text-2xl font-bold">초 인기 게시글</h2>
      <ul className="flex flex-col gap-5">
        <LandingPopularPost />
        <LandingPopularPost />
        <LandingPopularPost />
        <LandingPopularPost />
        <LandingPopularPost />
        <LandingPopularPost />
        <LandingPopularPost />
        <LandingPopularPost />
        <LandingPopularPost />
        <LandingPopularPost />
      </ul>
    </div>
  );
}
