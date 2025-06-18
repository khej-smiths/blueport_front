import { HorizontalPostCard, VerticalPostCard } from "@/entities";
import { Category, HOOKS, Loading, Sort_Option } from "@/shared";
import { Profile } from "@/widgets";
import { Suspense } from "react";
import { useParams } from "react-router";

export default function Blog() {
  const { domain } = useParams();
  const { data: blog } = HOOKS.useGetBlogByDomain(domain);
  const { data: recentPostList } = HOOKS.useGetRecentPostList({
    blogId: blog?.id,
    sortOption: Sort_Option.Newest,
    limit: 3,
    pageNumber: 1,
  });

  if (blog === undefined) return null;

  return (
    <main className="mt-16 mb-16 flex min-h-dvh flex-col items-center bg-white">
      <article className="flex max-w-7xl flex-col gap-16 p-8">
        <Profile blog={blog} />

        {/* 최신 글 섹션 */}
        <section className="">
          <h3 className="text-primary mb-6 text-2xl font-bold">최신 글</h3>
          {recentPostList && recentPostList.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Suspense fallback={<Loading />}>
                {recentPostList.map((post) => (
                  <VerticalPostCard key={post.id} post={post} />
                ))}
              </Suspense>
            </div>
          ) : (
            <p className="text-center text-2xl font-thin">
              작성된 글이 없습니다!
            </p>
          )}
        </section>

        {/* 카테고리 섹션 */}
        <section className="">
          <h3 className="text-primary mb-6 text-2xl font-bold">카테고리</h3>
          <div className="flex flex-wrap gap-x-2 gap-y-4">
            <Category key="all" category="전체" total={12} />
            {[
              "Frontend",
              "Backend",
              "DevOps",
              "Algorithm",
              "Database",
              "Security",
              "Mobile",
              "Cloud",
              "Frontend2",
              "Backend2",
              "DevOps2",
              "Algorithm2",
              "Database2",
              "Security2",
              "Mobile2",
              "Cloud2",
              "Frontend3",
              "Backend3",
              "DevOps3",
              "Algorithm3",
              "Database3",
              "Security3",
              "Mobile3",
              "Cloud3",
            ].map((category) => (
              <Category key={category} category={category} total={12} />
            ))}
          </div>
        </section>

        {/* 전체 글 목록 섹션 */}
        <section className="flex flex-col gap-4">
          <h3 className="text-primary text-2xl font-bold">전체 글</h3>
          <ul className="flex flex-col gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <HorizontalPostCard
                key={i}
                username={domain as string}
                postId={i.toString()}
              />
            ))}
          </ul>

          <Loading />
        </section>
      </article>
    </main>
  );
}
