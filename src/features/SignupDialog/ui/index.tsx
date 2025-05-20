"use client";

import { AlertDialogContent } from "@/shared";
import { Header } from "./Header";
import { Content } from "./Content";
import { useForm } from "react-hook-form";
import { SignupFormDto } from "../model/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupFormSchema } from "../model/schema";
import { Footer } from "./Footer";
import { useCreateUser } from "../api/mutation";
import { toast } from "sonner";
interface Props {
  setOpen(open: boolean): void;
}

export function SignupDialog({ setOpen }: Props) {
  const { mutate: createUser } = useCreateUser();
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

  const onSubmit = handleSubmit((data: SignupFormDto) => {
    console.log(data);
    if (data.verificationCode !== process.env.NEXT_PUBLIC_VERIFICATION_CODE) {
      toast.error("인증 코드가 일치하지 않습니다.");
      return;
    }

    createUser({
      name: data.name,
      email: data.email,
      password: data.password,
    });
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
