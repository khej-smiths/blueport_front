interface Props {
  category: string;
  total?: number;
  onClick?: () => void;
}

export function Category({ category, total, onClick }: Props) {
  return (
    <button
      className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm transition-colors hover:bg-gray-200"
      onClick={onClick}
      type="button"
    >
      <span className="font-medium text-gray-700">{category}</span>
      {total && <span className="ml-2 text-xs text-gray-500">{total}</span>}
    </button>
  );
}
