import { AlertDialogContent } from "@/shared";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

interface Props {
  handleSelectSchool: (schoolName: string) => void;
}

export function SearchSchoolDialog({ handleSelectSchool }: Props) {
  return (
    <AlertDialogContent>
      <Header />
      <Content handleSelectSchool={handleSelectSchool} />
      <Footer />
    </AlertDialogContent>
  );
}
