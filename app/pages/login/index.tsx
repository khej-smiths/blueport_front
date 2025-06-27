import { Link } from "react-router";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  Button,
  ROUTE,
  useResponsive,
} from "@/shared";

import { LoginContainer } from "@/entities";
import { LoginForm } from "@/widgets";
import { SignupDialog } from "@/features";

export default function Login() {
  const [open, setOpen] = useState(false);

  const { isMobile } = useResponsive();

  return (
    <>
      {isMobile ? (
        <div className="flex min-h-dvh flex-col items-center justify-center">
          <div className="flex w-11/12 flex-col gap-32">
            <div className="flex flex-col items-center gap-2">
              <Link to={ROUTE.HOME}>
                <img
                  src="/assets/text_logo.png"
                  className="w-96 max-md:w-80"
                  alt="logo"
                />
              </Link>
              <p className="text-xl font-thin">
                당신만의 이야기를 시작해보세요
              </p>
            </div>
            <LoginForm />
            <div className="flex flex-col items-center gap-2 text-gray-400">
              <p>아직 계정이 없으신가요?</p>
              <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogTrigger asChild>
                  <Button
                    className="h-fit p-0 text-gray-400 underline"
                    variant="link"
                  >
                    회원가입
                  </Button>
                </AlertDialogTrigger>
                <SignupDialog setOpen={setOpen} />
              </AlertDialog>
            </div>
          </div>
        </div>
      ) : (
        <LoginContainer>
          <Link to={ROUTE.HOME} className="w-fit">
            <img
              src="/assets/text_logo.png"
              alt="logo"
              width={128}
              height={64}
            />
          </Link>
          <LoginForm />
          <div className="flex items-center gap-2 text-gray-400">
            <p>아직 계정이 없으신가요?</p>
            <AlertDialog open={open} onOpenChange={setOpen}>
              <AlertDialogTrigger asChild>
                <Button className="h-fit p-0 text-gray-400" variant="link">
                  회원가입
                </Button>
              </AlertDialogTrigger>
              <SignupDialog setOpen={setOpen} />
            </AlertDialog>
          </div>
        </LoginContainer>
      )}
    </>
  );
}
