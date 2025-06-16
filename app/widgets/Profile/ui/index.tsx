import { Category, DefaultProfile, useLayoutStore } from "@/shared";

import { ProfileLinks } from "./ProfileLinks";
import { useGetBlogByDomain } from "../api/useGetBlogByDomain";
import { Suspense, useEffect } from "react";

interface Props {
  domain?: string;
}

/** 블로그 소개 섹션 */
export function Profile({ domain }: Props) {
  const { data: blog } = useGetBlogByDomain(domain);

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
    <Suspense fallback={<div>Loading...</div>}>
      {blog && (
        <section className="flex flex-col items-center gap-4">
          <DefaultProfile variant="avatar" />
          <h2 className="text-3xl font-bold">{blog.greeting}</h2>
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
