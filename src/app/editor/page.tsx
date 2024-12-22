"use client";

import Editor from "@/components/Editor";
import Preview from "@/components/Preview";
import { useCallback, useState } from "react";

export default function EditorPage() {
  const [doc, setDoc] = useState("");

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc);
  }, []);

  return (
    <section className="flex h-full overflow-y-auto">
      <article className="flex flex-col w-full h-full p-12">
        <Editor initialDoc={doc} onChange={handleDocChange} />
      </article>
      <article className="flex flex-col w-full h-full gap-3 p-12">
        <Preview doc={doc} />
      </article>
    </section>
  );
}
