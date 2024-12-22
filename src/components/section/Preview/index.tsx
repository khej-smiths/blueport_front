import useProcessor from "@/hooks/useProcessor";
import "@/style/atom-light.css";

interface PreviewProps {
  doc: string;
}

export default function Preview({ doc }: PreviewProps) {
  const Content = useProcessor(doc);

  return (
    <section className="w-full  box-border bg-[#ffffff] [&>pre]:bg-[#fdfcfd]">
      <article className="flex flex-col w-full gap-[18px] text-[1.125em] leading-[1.7]">
        {Content}
      </article>
    </section>
  );
}
