import { AddItemButton } from "@/features/AddItemButton";
import { SectionTitleProps } from "../model/type";

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex w-full flex-row items-center justify-between border-b pb-3">
      <h2 className="text-h2 font-bold" aria-label="section-heading">
        {title}
      </h2>
      <AddItemButton />
    </div>
  );
}
