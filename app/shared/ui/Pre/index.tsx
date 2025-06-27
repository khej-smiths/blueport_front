import { ReactNode, useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { toast } from "sonner";
import { Copy } from "lucide-react";

interface Props {
  children: ReactNode;
}

export function Pre({ children }: Props) {
  const preRef = useRef<HTMLPreElement>(null);
  const [text, setText] = useState("");

  useEffect(() => {
    setText(preRef.current?.textContent ?? "");
  }, [preRef.current]);

  const handleCopy = () => {
    if (!text) {
      toast.error("복사할 내용이 없습니다.");
      return;
    }

    navigator.clipboard.writeText(text);
    toast.success("복사되었습니다.");
  };

  return (
    <div className="relative">
      <Button
        className="absolute top-5 right-5 z-10 size-10 bg-[#fafafa] p-1"
        variant="ghost"
        type="button"
        onClick={handleCopy}
      >
        <Copy className="stroke-muted-foreground" />
      </Button>
      <pre
        ref={preRef}
        className="relative w-full overflow-auto rounded-md bg-[#fafafa] p-5 leading-[1.3] [&>code]:bg-transparent [&>code]:p-0 [&>code]:leading-[0]"
      >
        {children}
      </pre>
    </div>
  );
}
