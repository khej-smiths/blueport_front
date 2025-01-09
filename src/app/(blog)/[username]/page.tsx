"use client";

import PostCard from "@/components/section/PostCard";
import Profile from "@/components/section/Profile";
import Loading from "@/components/common/Loading";
import Category from "@/components/common/Category";
import { useParams } from "next/navigation";

export default function Blog() {
  const { username } = useParams();

  return (
    <main className="min-h-dvh mt-16 flex flex-col items-center bg-white mb-16">
      <article className="max-w-7xl flex flex-col gap-16 p-8">
        <Profile />

        {/* 최신 글 섹션 */}
        <section className="">
          <h3 className="text-2xl font-bold mb-6">최신 글</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <PostCard.Vertical
                key={i}
                username={username as string}
                postId={i.toString()}
              />
            ))}
          </div>
        </section>

        {/* 카테고리 섹션 */}
        <section className="">
          <h3 className="text-2xl font-bold mb-6">카테고리</h3>
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
              <PostCard.Horizontal
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
