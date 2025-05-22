"use client";

import { useRouter } from "next/navigation";

import { Button, ROUTE, useAuthStore } from "@/shared";

export function LogoutButton() {
  const router = useRouter();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.push(ROUTE.HOME);
  };

  return <Button onClick={handleLogout}>로그아웃</Button>;
}
