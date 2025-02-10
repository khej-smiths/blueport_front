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
        학교명을 입력해 검색해주세요
      </AlertDialogDescription>
    </AlertDialogHeader>
  );
};
