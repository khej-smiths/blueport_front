import { useDialogStore } from "@/store/dialog";
import { Button } from "../Button";
import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./DialogStyle";

export default function SearchSchoolDialog() {
  const { dialog } = useDialogStore();

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
        <Button variant="outline" onClick={dialog?.props?.onClose}>
          닫기
        </Button>
        <Button onClick={dialog?.props?.onConfirm}>확인</Button>
      </AlertDialogFooter>
    );
  };

  return (
    <AlertDialogContent>
      {Header()}
      {Content()}
      {Footer()}
    </AlertDialogContent>
  );
}
