import Link from "next/link";
import LoginForm from "./_form/Loginform";
import LoginContainer from "./_usecase/LoginContainer";
import LoginLogo from "./_usecase/LoginLogo";
import route from "@/constant/route";

export default function LoginPage() {
  return (
    <LoginContainer>
      <LoginLogo />
      <LoginForm />
      <div className="flex flex-row gap-4">
        <p>아직 계정이 없으신가요?</p>
        <Link href={route.SIGNUP}>회원가입</Link>
      </div>
    </LoginContainer>
  );
}
