import { Dispatch, SetStateAction } from "react";

import { AlertDialog, AlertDialogContent } from "@/shared";

import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  userName?: string;
}

export function CreateBlogDialog({ open, setOpen, userName }: Props) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="w-full !max-w-96 max-md:!max-w-10/12">
        <Header />
        <Content userName={userName} />
        <Footer setOpen={setOpen} />
      </AlertDialogContent>
    </AlertDialog>
  );
}
