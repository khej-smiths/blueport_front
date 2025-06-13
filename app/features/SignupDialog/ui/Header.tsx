import { AlertDialogHeader, AlertDialogTitle } from "@/shared";

export function Header() {
  return (
    <AlertDialogHeader id="signup-dialog-header">
      <AlertDialogTitle aria-describedby="signup-dialog-title">
        <img src="/assets/text_logo.png" alt="logo" width={180} height={40} />
      </AlertDialogTitle>
    </AlertDialogHeader>
  );
}
