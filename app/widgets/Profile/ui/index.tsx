import {
  DefaultProfile,
  Hashtag,
  Loading,
  ReadBlogQuery,
  useResponsive,
} from "@/shared";

import { ProfileLinks } from "./ProfileLinks";
import { Suspense } from "react";

interface Props {
  blog: ReadBlogQuery["readBlog"];
}

/** 블로그 소개 섹션 */
export function Profile({ blog }: Props) {
  const { isMobile } = useResponsive();
  return (
    <Suspense fallback={<Loading />}>
      {blog && (
        <section className="flex w-full max-w-2xl flex-col items-center gap-4">
          {isMobile ? (
            <div className="w-full overflow-hidden rounded-md">
              <DefaultProfile variant="default" />
            </div>
          ) : (
            <DefaultProfile variant="avatar" />
          )}
          <h2 className="text-primary text-center text-3xl font-bold not-xl:text-2xl">
            {blog.greeting}
          </h2>
          <p className="text-center text-gray-600 not-xl:text-sm">
            {blog.introduction}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {blog.skills?.map((skill) => (
              <Hashtag key={skill} hashtag={skill} />
            ))}
          </div>
          <ProfileLinks
            domain={blog.domain}
            github={blog.github}
            email={blog.email}
            resumeId={blog.resumeId}
          />
        </section>
      )}
    </Suspense>
  );
}
