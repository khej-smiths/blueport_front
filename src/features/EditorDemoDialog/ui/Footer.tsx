"use client";

import { useRouter } from "next/navigation";

import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
} from "@/shared";

export function Footer() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <AlertDialogFooter>
      <AlertDialogCancel>좀 더 둘러보기</AlertDialogCancel>
      <AlertDialogAction onClick={handleLogin}>
        로그인 하러가기
      </AlertDialogAction>
    </AlertDialogFooter>
  );
}
