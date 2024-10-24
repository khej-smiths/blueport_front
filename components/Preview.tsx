import useProcessor from "@/hooks/useProcessor";

interface PreviewProps {
  doc: string;
}

export default function Preview({ doc }: PreviewProps) {
  const Content = useProcessor(doc);

  return (
    <div className="w-full p-12 box-border overflow-auto bg-[#fafafa] [&>pre]:bg-[#fdfcfd]">
      <div className="flex flex-col w-full gap-[18px] text-[1.125em] leading-[1.5]">
        {Content}
      </div>
    </div>
  );
}
