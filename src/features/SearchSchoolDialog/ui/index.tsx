import { AlertDialogContent } from "@/shared";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

export function SearchSchoolDialog() {
  return (
    <AlertDialogContent>
      <Header />
      <Content />
      <Footer />
    </AlertDialogContent>
  );
}
