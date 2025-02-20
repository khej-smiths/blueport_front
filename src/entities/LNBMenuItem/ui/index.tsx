"use client";

import { cn } from "@/shared";
import { usePathname } from "next/navigation";
import { MenuTree } from "../model/type";
import Link from "next/link";

interface Props {
  menu: MenuTree;
}

export function LNBMenuItem({ menu }: Props) {
  const pathname = usePathname(); // Next.js에서 클라이언트 사이드 라우팅을 감지하는 방법

  return (
    <li
      className={cn(
        "w-full rounded-md p-2 text-xl font-thin transition-colors [&:has(a:hover)]:bg-gray-100",
        pathname === menu.path ? "bg-gray-100" : ""
      )}
    >
      <Link href={menu.path} className="hover:underline">
        {menu.title}
      </Link>
    </li>
  );
}
