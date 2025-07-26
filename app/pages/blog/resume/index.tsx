import {
  ResumeCareerItem,
  ResumeEducationItem,
  ResumePortfolioItem,
  ResumeProjectItem,
} from "@/entities";
import { HOOKS, Loading, QUERIES, QUERY_KEY, useAuthStore } from "@/shared";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { Suspense } from "react";
import { useParams } from "react-router";

export async function loader({
  params: { resumeId },
  request,
}: {
  params: { resumeId: string };
  request: Request;
}) {
  const accessToken =
    request.headers.get("Authorization")?.split(" ")[1] ?? null;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: QUERY_KEY.resume.readResume({ id: resumeId }),
    queryFn: () => QUERIES.readResume(accessToken, { id: resumeId }),
  });

  return {
    dehydratedState: dehydrate(queryClient),
  };
}

export default function Resume() {
  const { resumeId } = useParams();
  const { accessToken } = useAuthStore();
  const { data: resume } = HOOKS.useGetResume(
    accessToken,
    resumeId
      ? {
          id: resumeId,
        }
      : undefined
  );

  if (!resume) return null;

  const { educationList, careerList, projectList, portfolioList } = resume;

  return (
    <Suspense fallback={<Loading />}>
      <main className="mb-16 flex min-h-dvh flex-col items-center">
        <article className="flex w-full max-w-7xl flex-col gap-16 p-8">
          {/* 개인정보 */}
          <div
            className={
              resume?.owner.name.length > 12
                ? "flex flex-col gap-2"
                : "flex items-end gap-2"
            }
          >
            <h3 className="text-primary text-5xl font-bold">
              {resume.owner.name}
            </h3>
            <p className="text-gray-400">{resume.owner.email}</p>
          </div>

          {/* 학력사항 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-primary text-3xl font-bold">학력</h3>
            <ul className="flex flex-col gap-4">
              {educationList &&
                educationList.length > 0 &&
                educationList.map((item, index) => (
                  <ResumeEducationItem key={index} item={item} />
                ))}
            </ul>
          </div>

          {/* 경력사항 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-primary text-3xl font-bold">경력</h3>
            <ul className="flex flex-col gap-4">
              {careerList &&
                careerList.length > 0 &&
                careerList.map((item, index) => (
                  <ResumeCareerItem key={index} item={item} />
                ))}
            </ul>
          </div>

          {/* 프로젝트 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-primary text-3xl font-bold">프로젝트</h3>
            <ul className="flex flex-col gap-4">
              {projectList &&
                projectList.length > 0 &&
                projectList.map((item, index) => (
                  <ResumeProjectItem key={index} item={item} />
                ))}
            </ul>
          </div>

          {/* 포트폴리오 */}
          {portfolioList &&
            portfolioList.filter(({ url }) => url).length > 0 && (
              <div className="flex flex-col gap-4">
                <h3 className="text-primary text-3xl font-bold">포트폴리오</h3>
                <ul className="flex flex-col gap-4">
                  {portfolioList.flatMap((item, index) =>
                    item.url ? (
                      <ResumePortfolioItem key={index} item={item} />
                    ) : (
                      []
                    )
                  )}
                </ul>
              </div>
            )}
        </article>
      </main>
    </Suspense>
  );
}
