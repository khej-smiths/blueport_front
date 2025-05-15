import { AlertDialogContent } from "@/shared";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

export function EditorDemoModal() {
  return (
    <AlertDialogContent className="w-full max-w-96">
      <Header />
      <Content />
      <Footer />
    </AlertDialogContent>
  );
}
