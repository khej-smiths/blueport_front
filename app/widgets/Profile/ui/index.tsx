import { DefaultProfile, Hashtag, Loading, ReadBlogQuery } from "@/shared";

import { ProfileLinks } from "./ProfileLinks";
import { Suspense } from "react";

interface Props {
  blog: ReadBlogQuery["readBlog"];
}

/** 블로그 소개 섹션 */
export function Profile({ blog }: Props) {
  return (
    <Suspense fallback={<Loading />}>
      {blog && (
        <section className="flex flex-col items-center gap-4">
          <DefaultProfile variant="avatar" />
          <h2 className="text-primary text-3xl font-bold">{blog.greeting}</h2>
          <p className="text-gray-600">{blog.introduction}</p>
          <div className="flex justify-center gap-4">
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
