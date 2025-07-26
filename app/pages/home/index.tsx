import {
  LandingAbout,
  LandingIntro,
  PopularPostList,
  RecentPostList,
} from "@/widgets";
import {
  Loading,
  QUERIES,
  QUERY_KEY,
  Sort_Option,
  useResponsive,
} from "@/shared";
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

export async function loader({ request }: { request: Request }) {
  const accessToken =
    request.headers.get("Authorization")?.split(" ")[1] ?? null;
  const queryClient = new QueryClient();

  const pagination = {
    pageNumber: 1,
    limit: 2,
  };

  const popularPostListParams = {
    sortOption: Sort_Option.ViewCount,
    limit: 10,
    pageNumber: 1,
  };

  const recentPostListParams = {
    sortOption: Sort_Option.Newest,
    limit: 10,
    pageNumber: 1,
  };

  /** 블로그 목록 조회 */
  await queryClient.prefetchQuery({
    queryKey: QUERY_KEY.blog.readBlogList(pagination),
    queryFn: () => QUERIES.readBlogList(accessToken, pagination),
  });

  /** 인기 게시글 목록 조회 */
  await queryClient.prefetchQuery({
    queryKey: QUERY_KEY.post.readPostList(popularPostListParams),
    queryFn: () => QUERIES.readPostList(accessToken, popularPostListParams),
  });

  /** 최근 게시글 목록 조회 */
  await queryClient.prefetchQuery({
    queryKey: QUERY_KEY.post.readPostList(recentPostListParams),
    queryFn: () => QUERIES.readPostList(accessToken, recentPostListParams),
  });

  await queryClient.prefetchQuery({
    queryKey: QUERY_KEY.user.readUser(),
    queryFn: () => QUERIES.readUser(accessToken),
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
        <div className="flex w-full flex-row gap-5">
          <Suspense fallback={<Loading />}>
            <PopularPostList />
          </Suspense>
          {!isMobile && (
            <Suspense fallback={<Loading />}>
              <RecentPostList />
            </Suspense>
          )}
        </div>
      </div>
      <CheckBlog />
    </article>
  );
}
