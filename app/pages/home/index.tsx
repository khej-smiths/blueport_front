import { CreateBlogDialog } from "@/features";
import { LandingAbout, PopularPostList, RecentPostList } from "@/widgets";

import { LandingIntro } from "@/widgets";
import { Suspense, useEffect, useState } from "react";
import { useGetBlogList } from "./api/useGetBlogList";
import { HOOKS, Loading, useAuthStore, useResponsive } from "@/shared";

export default function Home() {
  const [open, setOpen] = useState(false);
  const { accessToken } = useAuthStore();

  const { isMobile } = useResponsive();

  const { data: blogList } = useGetBlogList({
    pageNumber: 1,
    limit: 2,
  });

  const { data: self } = HOOKS.useSelf();

  useEffect(() => {
    if (!self || !accessToken) return;

    setOpen(Boolean(!self.blog?.id));
  }, [self, accessToken]);

  return (
    <article className="mb-16 flex min-h-dvh justify-center">
      <div className="flex w-full max-w-7xl flex-col gap-12 py-24 not-xl:p-4">
        <LandingIntro />
        {blogList?.map((blog, index) => (
          <LandingAbout key={blog.id} right={index % 2 === 1} blog={blog} />
        ))}
        <div className="flex flex-row gap-5">
          <PopularPostList />
          {!isMobile && <RecentPostList />}
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <CreateBlogDialog open={open} setOpen={setOpen} userName={self?.name} />
      </Suspense>
    </article>
  );
}
