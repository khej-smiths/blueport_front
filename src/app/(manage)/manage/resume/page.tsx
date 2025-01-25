import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

export default function Resume() {
  return (
    <article className="flex w-full min-w-96 max-w-[1328px] flex-col gap-6 p-6">
      <Container>
        <h1 className="text-h1 font-bold">이력서</h1>
      </Container>
      <Container className="gap-4">
        <div className="flex flex-col gap-3">
          <SectionTitle title="학력" />
          <p>학교명</p>
          <p>기간</p>
          <p>졸업여부</p>
        </div>
        <div className="flex flex-col gap-3">
          <SectionTitle title="경력" />
          <p>회사명</p>
          <p>기간</p>
          <p>직책</p>
          <p>재직여부</p>
          <p>소개</p>
        </div>
        <div className="flex flex-col gap-3">
          <SectionTitle title="프로젝트" />
          <p>프로젝트명</p>
          <p>기간</p>
          <p>인원</p>
          <p>소개</p>
          <p>기술스택</p>
        </div>
        <div className="flex flex-col gap-3">
          <SectionTitle title="포트폴리오" />
        </div>
        <div>
          
        </div>
      </Container>
    </article>
  );
}
