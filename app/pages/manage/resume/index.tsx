import { Container } from "@/shared";
import { ManageResumeForm } from "@/widgets";

export default function ManageResume() {
  return (
    <article className="flex w-full max-w-[1328px] min-w-96 flex-col gap-6 p-6 not-xl:min-w-0 not-xl:p-4">
      <Container>
        <h1 className="text-h1 text-primary font-bold not-xl:text-2xl">
          이력서
        </h1>
      </Container>
      <ManageResumeForm />
    </article>
  );
}
