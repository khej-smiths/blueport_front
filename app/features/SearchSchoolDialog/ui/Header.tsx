import {
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shared";

export function Header() {
  return (
    <AlertDialogHeader>
      <AlertDialogTitle className="text-primary">
        학교 찾아보기
      </AlertDialogTitle>
      <AlertDialogDescription>
        학교를 검색 후 선택해 주세요
      </AlertDialogDescription>
    </AlertDialogHeader>
  );
}
