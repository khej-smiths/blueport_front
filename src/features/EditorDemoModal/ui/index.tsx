import { AlertDialogContent } from "@/shared";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function EditorDemoModal({ setOpen }: Props) {
  return (
    <AlertDialogContent className="w-full max-w-96">
      <Header />
      <Content />
      <Footer setOpen={setOpen} />
    </AlertDialogContent>
  );
}
