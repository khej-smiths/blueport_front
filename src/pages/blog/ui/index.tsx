"use client";

import { useParams } from "next/navigation";

import { Category, Loading } from "@/shared";
import { HorizontalPostCard, VerticalPostCard } from "@/entities";
import { Profile } from "@/widgets";

export function BlogPage() {
  const params = useParams();
  const username = params?.username;

  return (
    <main className="mb-16 mt-16 flex min-h-dvh flex-col items-center bg-white">
      <article className="flex max-w-7xl flex-col gap-16 p-8">
        <Profile />

        {/* 최신 글 섹션 */}
        <section className="">
          <h3 className="mb-6 text-2xl font-bold">최신 글</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <VerticalPostCard
                key={i}
                username={username as string}
                postId={i.toString()}
              />
            ))}
          </div>
        </section>

        {/* 카테고리 섹션 */}
        <section className="">
          <h3 className="mb-6 text-2xl font-bold">카테고리</h3>
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
          <h3 className="text-2xl font-bold">전체 글</h3>
          <ul className="flex flex-col gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <HorizontalPostCard
                key={i}
                username={username as string}
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
