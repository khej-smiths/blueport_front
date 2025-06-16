import { Link } from "react-router";
import { useLayoutStore } from "@/shared";
import { FaGithub } from "react-icons/fa";

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
        {/* TODO: 로그인 후 보여지는 Github 링크 달 수 있도록 추가 필요 */}
        {blogGNB.github && (
          <a href={blogGNB.github} target="_blank">
            <FaGithub size={32} fill="var(--primary)" />
          </a>
        )}
      </div>
    </nav>
  );
}
