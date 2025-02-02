interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex w-full flex-col border-b pb-3">
      <h2 className="text-h2 font-bold" aria-label="section-heading">
        {title}
      </h2>
    </div>
  );
}
