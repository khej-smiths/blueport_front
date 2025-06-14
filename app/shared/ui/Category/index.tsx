interface Props {
  category: string;
  total?: number;
  onClick?: () => void;
}

export function Category({ category, total, onClick }: Props) {
  return (
    <button
      className="inline-flex items-center rounded-full bg-background px-3 py-1 text-sm transition-colors hover:bg-accent"
      onClick={onClick}
      type="button"
    >
      <span className="font-medium text-primary">{category}</span>
      {total && <span className="ml-2 text-xs text-secondary">{total}</span>}
    </button>
  );
}
