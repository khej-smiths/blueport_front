import { AlertDialogFooter, Button, useDialogStore } from "@/shared";

export const Footer = () => {
  const { setOpen } = useDialogStore();
  return (
    <AlertDialogFooter>
      <Button variant="outline" onClick={() => setOpen(false)}>
        닫기
      </Button>
    </AlertDialogFooter>
  );
};
