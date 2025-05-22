import { Dispatch, SetStateAction } from "react";

import { AlertDialogContent } from "@/shared";

import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface Props {
  handleSelectSchool: (schoolName: string) => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function SearchSchoolDialog({ handleSelectSchool, setOpen }: Props) {
  return (
    <AlertDialogContent>
      <Header />
      <Content handleSelectSchool={handleSelectSchool} />
      <Footer setOpen={setOpen} />
    </AlertDialogContent>
  );
}
