import Container from "@/components/common/Container";

export default function Resume() {
  return (
    <article className="flex w-full min-w-96 max-w-[1328px] flex-col gap-6 p-6">
      <Container>
        <p className="text-4xl font-bold">이력서</p>
      </Container>
      <Container>
        <p>학력</p>
        <p>학교명</p>
        <p>기간</p>
        <p>졸업여부</p>
        <p>경력</p>
        <p>회사명</p>
        <p>기간</p>
        <p>직책</p>
        <p>재직여부</p>
        <p>소개</p>
        <p>프로젝트</p>
        <p>프로젝트명</p>
        <p>기간</p>
        <p>인원</p>
        <p>소개</p>
        <p>기술스택</p>
        <p>포트폴리오</p>
      </Container>
    </article>
  );
}
