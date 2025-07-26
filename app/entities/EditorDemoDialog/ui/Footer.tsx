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
      <div className="flex gap-2 not-xl:w-full">
        <AlertDialogCancel className="not-xl:w-full">
          좀 더 둘러보기
        </AlertDialogCancel>
        <AlertDialogAction onClick={handleLogin} className="not-xl:w-full">
          로그인 하러가기
        </AlertDialogAction>
      </div>
    </AlertDialogFooter>
  );
}
