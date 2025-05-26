import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
  ROUTE,
} from "@/shared";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function Footer({ setOpen }: Props) {
  return (
    <AlertDialogFooter>
      {/* 개발용 닫기 버튼 */}
      <AlertDialogCancel onClick={() => setOpen(false)}>
        FIXME: 개발용 닫기
      </AlertDialogCancel>
      <Link href={`${ROUTE.MANAGE_BLOG}`}>
        <AlertDialogAction onClick={() => setOpen(false)}>
          블로그 만들기
        </AlertDialogAction>
      </Link>
    </AlertDialogFooter>
  );
}
