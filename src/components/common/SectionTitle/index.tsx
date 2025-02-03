import { Button } from "../Button";
import { Plus } from "lucide-react";

interface SectionTitleProps {
  title: string;
  onClick?: () => void;
}

export default function SectionTitle({ title, onClick }: SectionTitleProps) {
  return (
    <div className="flex w-full flex-row items-center justify-between border-b pb-3">
      <h2 className="text-h2 font-bold" aria-label="section-heading">
        {title}
      </h2>
      <Button
        className="size-8 rounded-sm p-0"
        variant="ghost"
        onClick={() => onClick?.()}
      >
        <Plus className="size-4 text-gray-400" />
      </Button>
    </div>
  );
}
