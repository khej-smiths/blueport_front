import { Link } from "react-router";
import { useState } from "react";
import { AlertDialog, AlertDialogTrigger, Button, ROUTE } from "@/shared";

import { LoginContainer } from "@/entities";
import { LoginForm } from "@/widgets";
import { SignupDialog } from "@/features";

export default function Login() {
  const [open, setOpen] = useState(false);

  return (
    <LoginContainer>
      <Link to={ROUTE.HOME} className="w-fit">
        <img src="/assets/text_logo.png" alt="logo" width={128} height={64} />
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
  );
}
