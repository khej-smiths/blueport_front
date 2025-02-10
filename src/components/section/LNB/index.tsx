"use client";

import Link from "next/link";
import menuTree from "./menuTree";
import { cn } from "@/shared/lib/cn";
import { usePathname } from "next/navigation";

export default function LNB() {
  const pathname = usePathname(); // Next.js에서 클라이언트 사이드 라우팅을 감지하는 방법

  return (
    <nav className="h-full min-h-dvh w-64 border-r bg-white p-6">
      <ul className="flex flex-col gap-4">
        {menuTree.map((menu, index) => (
          <li
            key={index}
            className={cn(
              "w-full rounded-md p-2 text-xl font-thin transition-colors [&:has(a:hover)]:bg-gray-100",
              pathname === menu.path ? "bg-gray-100" : ""
            )}
          >
            <Link href={menu.path} className="hover:underline">
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
