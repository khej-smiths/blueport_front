import { useProcessor } from "@/shared";
import "../model/atom-light.css";

interface Props {
  doc: string;
}

export function Preview({ doc }: Props) {
  const Content = useProcessor(doc);

  return (
    <section
      role="section"
      aria-label="preview-section"
      className="box-border w-full bg-[#ffffff] [&>pre]:bg-[#fdfcfd]"
    >
      <article className="flex w-full flex-col gap-[18px] text-[1.125em] leading-[1.7]">
        {Content}
      </article>
    </section>
  );
}
