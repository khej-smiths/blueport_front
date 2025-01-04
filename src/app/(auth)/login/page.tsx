import Link from "next/link";
import LoginForm from "./_components/LoginForm";
import LoginContainer from "./_components/LoginContainer";
import route from "@/constant/route";
import Logo from "@/components/common/Logo";

export default function LoginPage() {
  return (
    <LoginContainer>
      <Logo />
      <LoginForm />
      <div className="flex flex-row gap-2 text-gray-400">
        <p>아직 계정이 없으신가요?</p>
        <Link href={route.SIGNUP} className="hover:underline">
          회원가입
        </Link>
      </div>
    </LoginContainer>
  );
}
