"use client";

import { AlertDialogContent } from "@/shared";
import { Header } from "./Header";
import { Content } from "./Content";
import { useForm } from "react-hook-form";
import { SignupFormDto } from "../model/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupFormSchema } from "../model/schema";
import { Footer } from "./Footer";
interface Props {
  setOpen(open: boolean): void;
}

export function SignupDialog({ setOpen }: Props) {
  const { control, watch, handleSubmit } = useForm<SignupFormDto>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      verificationCode: "",
    },
    resolver: zodResolver(signupFormSchema),
    mode: "onSubmit",
  });

  const onSubmit = handleSubmit((data: any) => {
    console.log(data);
  });

  console.log(watch());

  return (
    <AlertDialogContent
      className="w-full max-w-96"
      aria-describedby="signup-dialog-content"
    >
      <form onSubmit={onSubmit} className="flex flex-col gap-8">
        <Header />
        <Content control={control} />
        <Footer setOpen={setOpen} />
      </form>
    </AlertDialogContent>
  );
}
