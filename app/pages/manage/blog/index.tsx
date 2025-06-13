import { Container } from "@/shared";
import { BlogForm } from "@/widgets";

export default function ManageBlog() {
  return (
    <article className="flex w-full max-w-[1328px] min-w-96 flex-col gap-6 p-6">
      <Container>
        <h1 className="text-h1 text-primary font-bold">블로그 설정</h1>
      </Container>
      <BlogForm />
    </article>
  );
}
