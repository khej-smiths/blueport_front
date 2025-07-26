import { Link } from "react-router";

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  HOOKS,
  ROUTE,
  useAuthStore,
  useResponsive,
} from "@/shared";

import { LogoutButton } from "./LogoutButton";
import { Menu } from "lucide-react";
import { menuTree } from "@/shared";
import { LNBMenuItem } from "@/entities";
import { useState } from "react";

export function ManageGNB() {
  const { isMobile } = useResponsive();
  const { accessToken } = useAuthStore();
  const { data: self } = HOOKS.useSelf(accessToken);
  const [open, setOpen] = useState(false);

  return (
    <div
      className="sticky top-0 z-[1] flex h-16 items-center justify-between border-b bg-white px-6"
      aria-label="ManageGNB"
      data-testid="ManageGNB"
    >
      <Link to={ROUTE.HOME}>
        <img src="/assets/text_logo.png" alt="logo" width={128} height={64} />
      </Link>
      {isMobile ? (
        <Drawer open={open} onOpenChange={setOpen} direction="right">
          <DrawerTrigger>
            <Menu size={24} className="stroke-primary" />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="text-primary text-2xl font-bold">
                {self?.name}
              </DrawerTitle>
            </DrawerHeader>
            <ul className="mt-4 flex flex-col gap-4 p-4">
              {menuTree.map((menu, index) => (
                <LNBMenuItem key={index} menu={menu} setOpen={setOpen} />
              ))}
            </ul>
            <DrawerFooter>
              <LogoutButton />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ) : (
        <LogoutButton />
      )}
    </div>
  );
}
