import { Dispatch, SetStateAction } from "react";

import { AlertDialogCancel, AlertDialogFooter } from "@/shared";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function Footer({ setOpen }: Props) {
  return (
    <AlertDialogFooter>
      <AlertDialogCancel onClick={() => setOpen(false)}>닫기</AlertDialogCancel>
    </AlertDialogFooter>
  );
}
