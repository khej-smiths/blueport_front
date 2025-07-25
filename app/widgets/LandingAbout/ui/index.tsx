import {
  Button,
  cn,
  DefaultProfile,
  ReadBlogListQuery,
  useResponsive,
} from "@/shared";
import { Link } from "react-router";
import { useState } from "react";

interface Props {
  right?: boolean;
  blog: ReadBlogListQuery["readBlogList"][number];
}

export function LandingAbout({ right, blog }: Props) {
  const { isMobile } = useResponsive();
  const [isValidImage, setIsValidImage] = useState(true);

  return (
    <>
      {isMobile ? (
        <Link to={`/${blog.domain}`} prefetch="viewport">
          <article
            role="article"
            aria-label="about-section"
            className="group flex flex-col gap-0 overflow-hidden rounded-lg border transition hover:shadow-lg"
          >
            {blog.photo && isValidImage ? (
              <img
                className="h-[376px] w-full object-cover"
                src={blog.photo}
                alt={blog.name}
                onError={() => setIsValidImage(false)}
              />
            ) : (
              <DefaultProfile variant="default" />
            )}
            <div className="flex flex-col gap-4 px-2 py-4">
              <h2 className="text-primary line-clamp-3 text-2xl font-bold not-lg:text-xl">
                {blog.greeting}
              </h2>
              <p className="text-muted-foreground scrollbar-hide max-h-[348px] overflow-auto text-lg not-lg:text-sm">
                {blog.introduction}
              </p>
              <div className="flex flex-col gap-4">
                <h3 className="text-primary text-xl font-bold not-lg:text-base">
                  사용 기술 스택
                </h3>
                <div className="flex flex-wrap gap-2">
                  {blog.skills?.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gray-100 px-3 py-1.5 text-sm not-lg:text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </Link>
      ) : (
        <article
          role="article"
          aria-label="about-section"
          className={cn(
            "group flex flex-row gap-0 overflow-hidden rounded-lg border transition hover:shadow-lg",
            right && "flex-row-reverse"
          )}
        >
          <div className="relative h-[376px] w-full flex-shrink-0 md:h-auto md:w-[480px]">
            {blog.photo && isValidImage ? (
              <img
                className="h-[376px] w-full object-cover"
                src={blog.photo}
                alt={blog.name}
                onError={() => setIsValidImage(false)}
              />
            ) : (
              <DefaultProfile variant="default" />
            )}
          </div>

          <div className="flex flex-grow flex-col justify-between gap-8 p-6 md:p-8">
            <div className="flex flex-col gap-4">
              <h2 className="group-hover:text-primary line-clamp-3 text-2xl font-bold group-hover:transition-colors">
                {blog.greeting}
              </h2>
              <p className="text-muted-foreground scrollbar-hide max-h-[348px] overflow-auto text-lg">
                {blog.introduction}
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="group-hover:text-primary text-xl font-bold group-hover:transition-colors">
                  사용 기술 스택
                </h3>
                <div className="flex flex-wrap gap-2">
                  {blog.skills?.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gray-100 px-3 py-1.5 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <Link to={`/${blog.domain}`} prefetch="intent">
                <Button variant="outline" className="max-w-fit cursor-pointer">
                  더 알아보기
                </Button>
              </Link>
            </div>
          </div>
        </article>
      )}
    </>
  );
}
