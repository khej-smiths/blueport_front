import { LNB, ManageGNB } from "@/widgets";
import { Outlet } from "react-router";

export default function ManageLayout() {
  return (
    <div className="relative flex flex-col">
      <ManageGNB />
      <div className="flex bg-gray-100">
        <LNB />
        <Outlet />
      </div>
    </div>
  );
}
