import { Button } from "@/shared";

interface Props {
  setOpen(open: boolean): void;
  isPending: boolean;
}

export function Footer({ setOpen, isPending }: Props) {
  return (
    <div className="flex justify-end gap-2">
      <Button variant="outline" type="button" onClick={() => setOpen(false)}>
        닫기
      </Button>
      <Button type="submit" disabled={isPending}>
        회원가입
      </Button>
    </div>
  );
}
