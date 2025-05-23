import { CreateBlogModal } from "@/features";
import {
  LandingAbout,
  LandingIntro,
  PopularPostList,
  RecentPostList,
} from "@/widgets";

export function Landing() {
  return (
    <article className="mb-16 flex min-h-dvh justify-center">
      <div className="flex w-full max-w-7xl flex-col gap-12 py-24">
        <LandingIntro />
        <LandingAbout />
        <LandingAbout right />
        <div className="flex flex-row gap-5">
          <PopularPostList />
          <RecentPostList />
        </div>
      </div>
      <CreateBlogModal />
    </article>
  );
}
