"use client";

import { AlertDialogContent } from "@/shared";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Content } from "./Content";
import { useForm } from "react-hook-form";
import { SignupFormDto } from "../model/type";

export function SignupDialog() {
  const { control, watch, handleSubmit } = useForm<SignupFormDto>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      verificationCode: "",
    },
  });

  const onSubmit = handleSubmit((data: any) => {
    console.log(data);
  });

  console.log(watch());

  return (
    <AlertDialogContent className="w-full max-w-96">
      <form onSubmit={onSubmit} className="flex flex-col gap-8">
        <Header />
        <Content control={control} />
        <Footer />
      </form>
    </AlertDialogContent>
  );
}
