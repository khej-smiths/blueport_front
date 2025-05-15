import {
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shared";

export function Header() {
  return (
    <AlertDialogHeader>
      <AlertDialogTitle>글쓰기</AlertDialogTitle>
      <AlertDialogDescription>
        글쓰기는 허가된 사용자만 작성할 수 있습니다
      </AlertDialogDescription>
    </AlertDialogHeader>
  );
}
