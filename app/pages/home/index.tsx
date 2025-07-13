import {
  LandingAbout,
  LandingIntro,
  PopularPostList,
  RecentPostList,
} from "@/widgets";
import { Loading, QUERIES, QUERY_KEY, useResponsive } from "@/shared";
import { MetaFunction } from "react-router";
import { CheckBlog } from "@/entities";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { Suspense } from "react";
import { useGetBlogList } from "./api/useGetBlogList";

export const meta: MetaFunction = () => {
  return [
    { title: "Blueport" },
    { name: "description", content: "생각을 정박시키는 개발 블로그" },
  ];
};

export async function loader() {
  const queryClient = new QueryClient();

  const pagination = {
    pageNumber: 1,
    limit: 2,
  };

  await queryClient.prefetchQuery({
    queryKey: QUERY_KEY.blog.readBlogList(pagination),
    queryFn: () => QUERIES.readBlogList(pagination),
  });

  return { dehydratedState: dehydrate(queryClient) };
}

export default function Home() {
  const { data: blogList } = useGetBlogList({
    pageNumber: 1,
    limit: 2,
  });

  const { isMobile } = useResponsive();

  return (
    <article className="mb-16 flex min-h-dvh justify-center">
      <div className="flex w-full max-w-7xl flex-col gap-12 py-24 not-xl:p-4">
        <LandingIntro />
        <Suspense fallback={<Loading />}>
          {blogList?.map((blog, index) => (
            <LandingAbout key={blog.id} right={index % 2 === 1} blog={blog} />
          ))}
        </Suspense>
        <div className="flex flex-row gap-5">
          <PopularPostList />
          {!isMobile && <RecentPostList />}
        </div>
      </div>
      <CheckBlog />
    </article>
  );
}
