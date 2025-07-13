import { AlertDialogContent } from "@/shared";

import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function EditorDemoDialog() {
  return (
    <AlertDialogContent className="w-full !max-w-96 max-md:!max-w-10/12">
      <Header />
      <Content />
      <Footer />
    </AlertDialogContent>
  );
}
