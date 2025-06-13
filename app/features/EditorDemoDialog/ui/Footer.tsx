import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
} from "@/shared";
import { useNavigate } from "react-router";

export function Footer() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
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
