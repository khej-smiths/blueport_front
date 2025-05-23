import { Container } from "@/shared";
import { ManageUserForm } from "@/widgets";

export function ManageUserPage() {
  return <article className="flex w-full min-w-96 max-w-[1328px] flex-col gap-6 p-6">
    <Container>
      <h1 className="text-h1 font-bold text-primary">사용자 설정</h1>
    </Container>
    <ManageUserForm />
  </article>
}