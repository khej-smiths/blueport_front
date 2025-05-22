"use client";

import { LNBMenuItem } from "@/entities";

import { menuTree } from "../model/tree";

export function LNB() {
  return (
    <nav className="sticky top-16 h-full min-h-dvh w-64 border-r bg-white p-6">
      <ul className="flex flex-col gap-4">
        {menuTree.map((menu, index) => (
          <LNBMenuItem key={index} menu={menu} />
        ))}
      </ul>
    </nav>
  );
}
