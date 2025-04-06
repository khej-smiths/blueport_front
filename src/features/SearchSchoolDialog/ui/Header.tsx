import {
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shared";

export const Header = () => {
  return (
    <AlertDialogHeader>
      <AlertDialogTitle>학교 찾아보기</AlertDialogTitle>
      <AlertDialogDescription>
        학교를 검색 후 선택해 주세요
      </AlertDialogDescription>
    </AlertDialogHeader>
  );
};
