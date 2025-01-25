interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div
      className="flex w-full flex-col border-b pb-3"
      role="heading"
      aria-level={2}
      aria-label="section-heading"
    >
      <h2 className="text-h2 font-bold">{title}</h2>
    </div>
  );
}
