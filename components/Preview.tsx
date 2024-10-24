import useProcessor from "@/hooks/useProcessor";

interface PreviewProps {
  doc: string;
}

export default function Preview({ doc }: PreviewProps) {
  const Content = useProcessor(doc);

  return (
    <div className="flex flex-col  p-3 w-full box-border overflow-auto [&>pre]:bg-[rgba(27,31,35,0.45)] gap-5">
      {Content}
    </div>
  );
}
