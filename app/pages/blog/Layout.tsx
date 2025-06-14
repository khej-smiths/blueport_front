import { GNB } from "@/widgets";
import { Outlet } from "react-router";

export default function BlogLayout() {
  return (
    <section className="flex min-h-dvh flex-col gap-5">
      <GNB />
      <Outlet />
    </section>
  );
}
