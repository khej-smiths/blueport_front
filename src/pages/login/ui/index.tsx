import Link from "next/link";

import { Logo, ROUTE } from "@/shared";
import LoginContainer from "./LoginContainer";
import LoginForm from "./LoginForm";

export function LoginPage() {
  return (
    <LoginContainer>
      <Logo />
      <LoginForm />
      <div className="flex flex-row gap-2 text-gray-400">
        <p>아직 계정이 없으신가요?</p>
        <Link href={ROUTE.SIGNUP} className="hover:underline">
          회원가입
        </Link>
      </div>
    </LoginContainer>
  );
}
