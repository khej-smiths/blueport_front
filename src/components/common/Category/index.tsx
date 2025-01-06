interface CategoryProps {
  key: React.Key;
  category: string;
  total: number;
}

export default function Category({ key, category, total }: CategoryProps) {
  return (
    <div
      key={key}
      className="inline-flex items-center px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm cursor-pointer transition-colors"
    >
      <span className="font-medium text-gray-700">{category}</span>
      <span className="ml-2 text-xs text-gray-500">{total}</span>
    </div>
  );
}
