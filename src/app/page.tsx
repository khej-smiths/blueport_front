import Landing from "@/components/section/Landing";

export default function Home() {
  return (
    <article className="min-h-dvh flex justify-center">
      <div className="flex flex-col max-w-7xl w-full py-24 gap-12">
        <Landing.Intro />
        <Landing.About />
        <Landing.About right />
        <div className="flex flex-row gap-5">
          <Landing.PopularPostList />
          <Landing.RecentPostList />
        </div>
      </div>
    </article>
  );
}
