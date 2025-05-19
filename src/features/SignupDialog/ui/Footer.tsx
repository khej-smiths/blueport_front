import { Button } from "@/shared";

interface Props {
  setOpen(open: boolean): void;
}

export function Footer({ setOpen }: Props) {
  return (
    <div className="flex justify-end gap-2">
      <Button variant="outline" type="button" onClick={() => setOpen(false)}>
        닫기
      </Button>
      <Button type="submit">회원가입</Button>
    </div>
  );
}
