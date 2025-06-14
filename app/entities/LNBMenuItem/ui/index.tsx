import { useLocation, Link } from "react-router";
import { cn } from "@/shared";

import { MenuTree } from "../model/type";

interface Props {
  menu: MenuTree;
}

export function LNBMenuItem({ menu }: Props) {
  const location = useLocation();

  return (
    <li
      className={cn(
        "w-full rounded-md p-2 text-xl font-thin transition-colors [&:has(a:hover)]:bg-gray-100",
        location.pathname === menu.path ? "bg-gray-100" : ""
      )}
    >
      <Link to={menu.path} className="hover:underline">
        {menu.title}
      </Link>
    </li>
  );
}
