import { LNB, ManageGNB } from "@/widgets";

export default function ManageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <ManageGNB />
      <div className="flex bg-gray-100">
        <LNB />
        {children}
      </div>
    </div>
  );
}
