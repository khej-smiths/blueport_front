import { CreateBlogDialog } from "@/features";
import { LandingAbout, PopularPostList, RecentPostList } from "@/widgets";

import { LandingIntro } from "@/widgets";
import { useState } from "react";
import { useGetBlogList } from "./api/useGetBlogList";
import { ReadBlogQuery } from "@/shared/api/gql/graphql";

export default function Home() {
  const [open, setOpen] = useState(false);

  const { data: blogList } = useGetBlogList({
    pageNumber: 1,
    limit: 2,
  });

  return (
    <article className="mb-16 flex min-h-dvh justify-center">
      <div className="flex w-full max-w-7xl flex-col gap-12 py-24">
        <LandingIntro />
        {blogList?.map((blog, index) => (
          <LandingAbout key={blog.id} right={index % 2 === 1} blog={blog} />
        ))}
        <div className="flex flex-row gap-5">
          <PopularPostList />
          <RecentPostList />
        </div>
      </div>
      <CreateBlogDialog open={open} setOpen={setOpen} />
    </article>
  );
}
