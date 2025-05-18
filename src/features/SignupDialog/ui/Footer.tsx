import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
} from "@/shared";

export function Footer() {
  return (
    <AlertDialogFooter>
      <AlertDialogCancel>닫기</AlertDialogCancel>
      <AlertDialogAction type="submit">회원가입</AlertDialogAction>
    </AlertDialogFooter>
  );
}
