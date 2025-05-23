import {
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shared";

export function Header() {
  return (
    <AlertDialogHeader>
      <AlertDialogTitle className="text-primary">블로그 생성</AlertDialogTitle>
      <AlertDialogDescription>
        아직 생성된 블로그가 없어요 🥲
      </AlertDialogDescription>
    </AlertDialogHeader>
  );
}
