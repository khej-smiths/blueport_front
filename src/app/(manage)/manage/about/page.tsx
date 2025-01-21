import Container from "@/components/common/Container";
import AboutForm from "./_components/AboutForm";

export default function ManageAbout() {
  return (
    <article className="flex w-full min-w-96 max-w-[1328px] flex-col gap-6 p-6">
      <Container>
        <p className="text-4xl font-bold">블로그 설정</p>
      </Container>
      <Container>
        <AboutForm />
      </Container>
    </article>
  );
}
