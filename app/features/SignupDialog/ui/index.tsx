import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { AlertDialogContent, getErrorMessage } from "@/shared";

import { useCreateUser } from "../api/mutation";
import { signupFormSchema } from "../model/schema";
import { SignupFormDto } from "../model/type";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";
interface Props {
  setOpen(open: boolean): void;
}

export function SignupDialog({ setOpen }: Props) {
  const { mutate: createUser, isPending } = useCreateUser();
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
    if (
      data.verificationCode !== import.meta.env.VITE_PUBLIC_VERIFICATION_CODE
    ) {
      toast.error("인증 코드가 일치하지 않습니다.");
      return;
    }

    createUser(
      {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          toast.success("🎉 회원가입이 완료되었습니다.");
          setOpen(false);
        },
        onError: (error) => {
          const message = getErrorMessage(error);
          toast.error(message);
        },
      }
    );
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
        <Footer setOpen={setOpen} isPending={isPending} />
      </form>
    </AlertDialogContent>
  );
}
