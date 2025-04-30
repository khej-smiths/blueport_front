import { Button, Logo } from "@/shared";
import Link from "next/link";

export function ManageGNB() {
  return (
    <div className="flex h-16 items-center justify-between border-b bg-white px-6">
      <Link href="/">
        <Logo size="sm" />
      </Link>
      <Button>로그아웃</Button>
    </div>
  );
}
