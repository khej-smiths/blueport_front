import { Container } from "@/shared";
import { ResumeForm } from "@/widgets";

export function ManageResumePage() {
  return (
    <article className="flex w-full min-w-96 max-w-[1328px] flex-col gap-6 p-6">
      <Container>
        <h1 className="text-h1 font-bold text-primary">이력서</h1>
      </Container>
      <ResumeForm />
    </article>
  );
}
