import { Dispatch, SetStateAction } from "react";

import { AlertDialog, AlertDialogContent } from "@/shared";

import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function CreateBlogModal({ open, setOpen }: Props) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="w-full max-w-96">
        <Header />
        <Content />
        <Footer setOpen={setOpen} />
      </AlertDialogContent>
    </AlertDialog>
  );
}
