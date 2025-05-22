import Image from "next/image";
import Link from "next/link";

import { ROUTE } from "@/shared";

import { LogoutButton } from "./LogoutButton";

export function ManageGNB() {
  return (
    <div
      className="sticky top-0 z-[1] flex h-16 items-center justify-between border-b bg-white px-6"
      aria-label="ManageGNB"
      data-testid="ManageGNB"
    >
      <Link href={ROUTE.HOME}>
        <Image src="/assets/text_logo.png" alt="logo" width={128} height={64} />
      </Link>
      <LogoutButton />
    </div>
  );
}
