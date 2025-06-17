import {
  Category,
  DefaultProfile,
  Loading,
  ReadBlogQuery,
  useLayoutStore,
} from "@/shared";

import { ProfileLinks } from "./ProfileLinks";
import { Suspense, useEffect } from "react";

interface Props {
  blog: ReadBlogQuery["readBlog"];
}

/** 블로그 소개 섹션 */
export function Profile({ blog }: Props) {
  const { setBlogGNB } = useLayoutStore();

  useEffect(() => {
    if (!blog) return;

    setBlogGNB({
      name: blog.name,
      domain: blog.domain,
      github: blog.github,
    });
  }, [blog]);

  return (
    <Suspense fallback={<Loading />}>
      {blog && (
        <section className="flex flex-col items-center gap-4">
          <DefaultProfile variant="avatar" />
          <h2 className="text-primary text-3xl font-bold">{blog.greeting}</h2>
          <p className="text-gray-600">{blog.introduction}</p>
          <div className="flex justify-center gap-4">
            {blog.skills?.map((skill) => (
              <Category key={skill} category={skill} />
            ))}
          </div>
          <ProfileLinks github={blog.github} email={blog.email} />
        </section>
      )}
    </Suspense>
  );
}
