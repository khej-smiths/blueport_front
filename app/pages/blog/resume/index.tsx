import {
  ResumeCareerItem,
  ResumeEducationItem,
  ResumePortfolioItem,
  ResumeProjectItem,
} from "@/entities";

export default function Resume() {
  return (
    <main className="mb-16 flex min-h-dvh flex-col items-center">
      <article className="flex w-full max-w-7xl flex-col gap-16 p-8">
        {/* 개인정보 */}
        <div className="flex items-end gap-2">
          <h3 className="text-primary text-5xl font-bold">이름</h3>
          <p className="text-gray-400">이메일</p>
        </div>

        {/* 학력사항 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-primary text-3xl font-bold">학력</h3>
          <ul className="flex flex-col gap-4">
            <ResumeEducationItem />
            <ResumeEducationItem />
          </ul>
        </div>

        {/* 경력사항 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-primary text-3xl font-bold">경력</h3>
          <ul className="flex flex-col gap-4">
            <ResumeCareerItem />
            <ResumeCareerItem />
          </ul>
        </div>

        {/* 프로젝트 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-primary text-3xl font-bold">프로젝트</h3>
          <ul className="flex flex-col gap-4">
            <ResumeProjectItem />
            <ResumeProjectItem />
          </ul>
        </div>

        {/* 포트폴리오 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-primary text-3xl font-bold">포트폴리오</h3>
          <ul className="flex flex-col gap-4">
            <ResumePortfolioItem />
            <ResumePortfolioItem />
          </ul>
        </div>
      </article>
    </main>
  );
}
