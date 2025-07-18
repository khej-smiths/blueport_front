import { cn } from "../../lib/cn";

interface Props {
  hashtag: string;
  isSelected?: boolean;
  total?: number;
  onClick?: () => void;
}

export function Hashtag({ hashtag, total, onClick, isSelected }: Props) {
  return (
    <button
      className={cn(
        isSelected ? "bg-accent" : "bg-background",
        "hover:bg-accent inline-flex flex-shrink-0 cursor-pointer items-center rounded-full px-3 py-1 text-sm transition-colors not-xl:p-1"
      )}
      onClick={onClick}
      type="button"
    >
      <span className="text-primary font-medium">{hashtag}</span>
      {total && <span className="text-secondary ml-2 text-xs">{total}</span>}
    </button>
  );
}
