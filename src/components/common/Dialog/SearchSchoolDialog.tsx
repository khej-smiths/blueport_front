import { DialogProps } from "@/store/dialog";
import { Button } from "../Button";
import {
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./DialogStyle";

export default function SearchSchoolDialog({
  onConfirm,
  onClose,
}: DialogProps) {
  const Header = () => {
    return (
      <AlertDialogHeader>
        <AlertDialogTitle>학교 찾아보기</AlertDialogTitle>
        <AlertDialogDescription>
          학교명을 입력해 검색해주세요
        </AlertDialogDescription>
      </AlertDialogHeader>
    );
  };

  const Content = () => {
    return <div>테스트 다이얼로그 내용부분</div>;
  };

  const Footer = () => {
    return (
      <AlertDialogFooter>
        <Button variant="outline" onClick={onClose}>
          닫기
        </Button>
        <Button onClick={onConfirm}>확인</Button>
      </AlertDialogFooter>
    );
  };

  return (
    <>
      {Header()}
      {Content()}
      {Footer()}
    </>
  );
}
