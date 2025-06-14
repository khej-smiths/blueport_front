import { Container } from "@/shared";
import { ManageUserForm } from "@/widgets";

export default function ManageUser() {
  return (
    <article className="flex w-full max-w-[1328px] min-w-96 flex-col gap-6 p-6">
      <Container>
        <h1 className="text-h1 text-primary font-bold">사용자 설정</h1>
      </Container>
      <ManageUserForm />
    </article>
  );
}
