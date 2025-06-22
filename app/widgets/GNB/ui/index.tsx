import { Link } from "react-router";
import { ROUTE, useLayoutStore } from "@/shared";
import { FaGithub } from "react-icons/fa";
import { Settings } from "lucide-react";

export function GNB() {
  const { blogGNB } = useLayoutStore();

  return (
    <nav className="flex h-24 items-center justify-center border-b px-6">
      <div className="flex w-full max-w-7xl items-center justify-between">
        {/* TODO: 블로그로 이동하도록 변경해야 함 */}
        <Link to={blogGNB.domain}>
          <h1
            role="heading"
            aria-label="title"
            className="text-primary text-2xl font-bold hover:underline"
          >
            {blogGNB.name}
          </h1>
        </Link>
        <div className="flex flex-row items-center gap-4">
          {blogGNB.github && (
            <a href={blogGNB.github} target="_blank">
              <FaGithub size={32} fill="var(--primary)" />
            </a>
          )}
          {blogGNB.isMine && (
            <Link
              to={ROUTE.MANAGE_USER}
              className="transition-transform hover:transform-[rotate(90deg)]"
            >
              <Settings size={32} stroke="var(--primary)" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
