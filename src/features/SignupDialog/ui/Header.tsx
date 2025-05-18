import { AlertDialogHeader } from "@/shared";
import Image from "next/image";

export function Header() {
  return (
    <AlertDialogHeader>
      <Image src="/assets/text_logo.png" alt="logo" width={180} height={40} />
    </AlertDialogHeader>
  );
}
