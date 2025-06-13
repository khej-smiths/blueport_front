import { Link } from "react-router";

import { ROUTE } from "@/shared";

import { LogoutButton } from "./LogoutButton";

export function ManageGNB() {
  return (
    <div
      className="sticky top-0 z-[1] flex h-16 items-center justify-between border-b bg-white px-6"
      aria-label="ManageGNB"
      data-testid="ManageGNB"
    >
      <Link to={ROUTE.HOME}>
        <img src="/assets/text_logo.png" alt="logo" width={128} height={64} />
      </Link>
      <LogoutButton />
    </div>
  );
}
