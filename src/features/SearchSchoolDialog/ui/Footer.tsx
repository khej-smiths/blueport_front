import { AlertDialogFooter, Button, useDialogStore } from "@/shared";

export const Footer = () => {
  const { dialog } = useDialogStore();

  return (
    <AlertDialogFooter>
      <Button variant="outline" onClick={dialog?.props?.onClose}>
        닫기
      </Button>
      <Button onClick={dialog?.props?.onConfirm}>확인</Button>
    </AlertDialogFooter>
  );
};
