import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/shared";

interface Props {
  trigger: React.ReactNode;
  onCancel?: () => void;
  onAction?: () => void;
}

export function DeleteDialog({ trigger, onCancel, onAction }: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent className="not-xl:!max-w-10/12">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-primary">
            정말 삭제하시겠습니까?
          </AlertDialogTitle>
          <AlertDialogDescription>
            삭제 시 복구할 수 없습니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>취소</AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90 text-white shadow-sm"
            onClick={onAction}
          >
            삭제
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
