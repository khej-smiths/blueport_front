"use client";

import Editor from "@/components/section/Editor";
import Preview from "@/components/section/Preview";
import { EXAMPLE_DOC } from "@/constant/preview";
import { useCallback, useState } from "react";

export default function EditorPage() {
  const [doc, setDoc] = useState(EXAMPLE_DOC);

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc);
  }, []);

  return (
    <section className="min-h-dvh">
      <article className="flex h-dvh">
        <article className="flex flex-col w-full">
          <div>test</div>
          <Editor initialDoc={doc} onChange={handleDocChange} />
        </article>
        <article className="flex flex-col w-full">
          <Preview doc={doc} />
        </article>
      </article>
    </section>
  );
}
