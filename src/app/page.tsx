import LandingAbout from "@/components/section/landing/LandingAbout";
import LandingIntro from "@/components/section/landing/LandingIntro";
import LandingPopularPostList from "@/components/section/landing/LandingPopularPostList";
import LandingRecentPostList from "@/components/section/landing/LandingRecentPostList";

export default function Home() {
  return (
    <article className="min-h-dvh flex justify-center">
      <div className="flex flex-col max-w-7xl w-full py-24 gap-12">
        <LandingIntro />
        <LandingAbout />
        <LandingAbout right />
        <div className="flex flex-row gap-5">
          <LandingPopularPostList />
          <LandingRecentPostList />
        </div>
      </div>
    </article>
  );
}
