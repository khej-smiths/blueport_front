import { Button, ROOT_KEY, useAuthStore, useInvalidateQueries } from "@/shared";

export function LogoutButton() {
  const { logout } = useAuthStore();
  const { invalidateQueries } = useInvalidateQueries();

  const handleLogout = () => {
    logout();
    invalidateQueries(ROOT_KEY.user);
  };

  return <Button onClick={handleLogout}>로그아웃</Button>;
}
