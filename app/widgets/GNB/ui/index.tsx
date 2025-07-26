import { Link, useParams } from "react-router";
import { HOOKS, Loading, ROUTE, useAuthStore } from "@/shared";
import { FaGithub } from "react-icons/fa";
import { Settings } from "lucide-react";
import { Suspense } from "react";

export function GNB() {
  const { domain } = useParams();
  const { accessToken } = useAuthStore();

  const { data: user } = HOOKS.useSelf(accessToken);
  const { data: blog } = HOOKS.useGetBlogByDomain(accessToken, domain);

  return (
    <nav className="flex h-16 items-center justify-center border-b px-6">
      <div className="flex w-full max-w-7xl items-center justify-between">
        <Suspense fallback={<Loading />}>
          <Link
            prefetch="viewport"
            to={
              blog
                ? `${ROUTE.BLOG.replace(":domain", blog.domain)}`
                : `${ROUTE.HOME}`
            }
          >
            <h1
              role="heading"
              aria-label="title"
              className="text-primary text-2xl font-bold not-xl:text-xl hover:underline"
            >
              {blog?.name || "Blueport"}
            </h1>
          </Link>
        </Suspense>
        <div className="flex flex-row items-center gap-4">
          {blog?.github && (
            <a href={blog.github} target="_blank">
              <FaGithub size={24} fill="var(--primary)" />
            </a>
          )}
          {accessToken && user?.id === blog?.ownerId && (
            <Link
              to={ROUTE.MANAGE_USER}
              className="transition-transform hover:transform-[rotate(90deg)]"
            >
              <Settings size={24} stroke="var(--primary)" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
