import { CreateBlogDialog } from "@/features";
import { LandingAbout, PopularPostList, RecentPostList } from "@/widgets";

import { LandingIntro } from "@/widgets";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

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
      <CreateBlogDialog open={open} setOpen={setOpen} />
    </article>
  );
}
