import Link from "next/link";
import menuTree from "./menuTree";

export default function LNB() {
  return (
    <nav className="h-full min-h-dvh w-64 border-r bg-white p-6">
      <ul className="flex flex-col gap-6">
        {menuTree.map((menu, index) => (
          <li key={index}>
            <Link
              href={menu.path}
              className="text-4xl font-thin hover:underline"
            >
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
