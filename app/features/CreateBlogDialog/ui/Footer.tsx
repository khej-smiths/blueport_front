import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router";

import { AlertDialogAction, AlertDialogFooter, ROUTE } from "@/shared";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function Footer({ setOpen }: Props) {
  return (
    <AlertDialogFooter>
      {/* 개발용 닫기 버튼 */}
      <Link to={`${ROUTE.MANAGE_BLOG}`}>
        <AlertDialogAction onClick={() => setOpen(false)}>
          블로그 만들기
        </AlertDialogAction>
      </Link>
    </AlertDialogFooter>
  );
}
