import {
  ResumeCareerItem,
  ResumeEducationItem,
  ResumePortfolioItem,
  ResumeProjectItem,
} from "@/entities";
import { HOOKS, Loading } from "@/shared";
import { Suspense } from "react";
import { useParams } from "react-router";

export default function Resume() {
  const { resumeId } = useParams();
  const { data: resume } = HOOKS.useGetResume({
    id: resumeId,
  });

  if (!resume) throw new Error("이력서가 존재하지 않습니다.", { cause: 404 });

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
                educationList.map((item) => (
                  <ResumeEducationItem key={item.id} item={item} />
                ))}
            </ul>
          </div>

          {/* 경력사항 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-primary text-3xl font-bold">경력</h3>
            <ul className="flex flex-col gap-4">
              {careerList &&
                careerList.length > 0 &&
                careerList.map((item) => (
                  <ResumeCareerItem key={item.id} item={item} />
                ))}
            </ul>
          </div>

          {/* 프로젝트 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-primary text-3xl font-bold">프로젝트</h3>
            <ul className="flex flex-col gap-4">
              {projectList &&
                projectList.length > 0 &&
                projectList.map((item) => (
                  <ResumeProjectItem key={item.id} item={item} />
                ))}
            </ul>
          </div>

          {/* 포트폴리오 */}
          {portfolioList &&
            portfolioList.filter(({ url }) => url).length > 0 && (
              <div className="flex flex-col gap-4">
                <h3 className="text-primary text-3xl font-bold">포트폴리오</h3>
                <ul className="flex flex-col gap-4">
                  {portfolioList.flatMap((item) =>
                    item.url ? (
                      <ResumePortfolioItem key={item.id} item={item} />
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
