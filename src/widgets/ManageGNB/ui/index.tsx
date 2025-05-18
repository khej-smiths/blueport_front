import { Button, ROUTE } from "@/shared";
import Image from "next/image";
import Link from "next/link";

export function ManageGNB() {
  return (
    <div className="sticky top-0 z-[1] flex h-16 items-center justify-between border-b bg-white px-6">
      <Link href={ROUTE.HOME}>
        <Image src="/assets/text_logo.png" alt="logo" width={128} height={64} />
      </Link>
      <Button>로그아웃</Button>
    </div>
  );
}
