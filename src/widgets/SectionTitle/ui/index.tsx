import { AddItemButton } from "@/features/AddItemButton";

interface Props {
  title: string;
  onClick?: () => void;
}

export function SectionTitle({ title, onClick }: Props) {
  return (
    <div className="flex w-full flex-row items-center justify-between border-b pb-3">
      <h2 className="text-h2 font-bold" aria-label="section-heading">
        {title}
      </h2>
      <AddItemButton onClick={onClick} />
    </div>
  );
}
