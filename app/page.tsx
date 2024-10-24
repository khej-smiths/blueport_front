"use client";

import Editor from "@/components/Editor";
import Preview from "@/components/Preview";
import { useCallback, useState } from "react";

export default function Home() {
  const [doc, setDoc] = useState("");

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc);
  }, []);

  return (
    <section className="flex h-full">
      <Editor initialDoc={doc} onChange={handleDocChange} />
      <Preview doc={doc} />
    </section>
  );
}
