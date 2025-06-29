import { useLocation, Link } from "react-router";
import { cn } from "@/shared";

import { MenuTree } from "../model/type";
import { Dispatch, SetStateAction } from "react";

interface Props {
  menu: MenuTree;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

export function LNBMenuItem({ menu, setOpen }: Props) {
  const location = useLocation();

  return (
    <li
      className={cn(
        "w-full list-none rounded-md p-2 text-xl font-thin transition-colors [&:has(a:hover)]:bg-gray-100",
        location.pathname === menu.path ? "bg-gray-100" : ""
      )}
    >
      <Link
        to={menu.path}
        className="hover:underline"
        onClick={() => setOpen?.(false)}
      >
        {menu.title}
      </Link>
    </li>
  );
}
