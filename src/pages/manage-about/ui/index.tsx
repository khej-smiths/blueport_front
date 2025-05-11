import { Container } from "@/shared";
import { AboutForm } from "@/widgets";

export function ManageAboutPage() {
  return (
    <article className="flex w-full min-w-96 max-w-[1328px] flex-col gap-6 p-6">
      <Container>
        <h1 className="text-h1 font-bold">블로그 설정</h1>
      </Container>
      <Container>
        <AboutForm />
      </Container>
    </article>
  );
}
