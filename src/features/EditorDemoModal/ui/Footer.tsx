import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
} from "@/shared";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function Footer({ setOpen }: Props) {
  const router = useRouter();

  const handleLogin = () => {
    setOpen(false);
    router.push("/login");
  };

  return (
    <AlertDialogFooter>
      <AlertDialogCancel onClick={() => setOpen(false)}>
        좀 더 둘러보기
      </AlertDialogCancel>
      <AlertDialogAction onClick={handleLogin}>
        로그인 하러가기
      </AlertDialogAction>
    </AlertDialogFooter>
  );
}
