import { Button } from "@/shared";

interface Props {
  setOpen(open: boolean): void;
  isPending: boolean;
}

export function Footer({ setOpen, isPending }: Props) {
  return (
    <div className="flex justify-end gap-2 not-xl:w-full">
      <Button
        variant="outline"
        type="button"
        onClick={() => setOpen(false)}
        className="not-xl:w-full"
      >
        닫기
      </Button>
      <Button className="not-xl:w-full" type="submit" disabled={isPending}>
        회원가입
      </Button>
    </div>
  );
}
