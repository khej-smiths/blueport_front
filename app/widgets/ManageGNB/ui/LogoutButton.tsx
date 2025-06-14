import { useNavigate } from "react-router";

import { Button, ROUTE, useAuthStore } from "@/shared";

export function LogoutButton() {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate(ROUTE.HOME);
  };

  return <Button onClick={handleLogout}>로그아웃</Button>;
}
