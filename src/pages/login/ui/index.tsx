"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { SignupDialog } from "@/features";
import { AlertDialog, AlertDialogTrigger, Button, ROUTE } from "@/shared";
import { LoginForm } from "@/widgets";

import LoginContainer from "./LoginContainer";

export function LoginPage() {
  const [open, setOpen] = useState(false);

  return (
    <LoginContainer>
      <Link href={ROUTE.HOME} className="w-fit">
        <Image src="/assets/text_logo.png" alt="logo" width={128} height={64} />
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
