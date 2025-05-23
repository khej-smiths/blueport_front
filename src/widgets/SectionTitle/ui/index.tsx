import { AddItemButton } from "@/features/AddItemButton";

interface Props {
  title: string;
  onClick?: () => void;
  hideButton?: boolean;
}

export function SectionTitle({ title, onClick, hideButton = false }: Props) {
  return (
    <div className="flex w-full flex-row items-center justify-between border-b pb-3">
      <h2
        className="text-h2 font-bold text-primary"
        aria-label="section-heading"
      >
        {title}
      </h2>
      {!hideButton && <AddItemButton onClick={onClick} />}
    </div>
  );
}
