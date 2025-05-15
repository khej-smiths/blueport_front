"use client";

import { AlertDialog, AlertDialogTrigger } from "@/shared";
import { Footer } from "../../Footer";
import { FloatingButton, EditorDemoModal } from "@/features";
import { Plus } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function ClientLayoutBody() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isEditor = pathname?.includes("/editor");
  return (
    <>
      {!isEditor && <Footer />}
      {!isEditor && (
        <AlertDialog open={open}>
          <AlertDialogTrigger>
            <FloatingButton
              position="bottom-10 right-10"
              icon={<Plus className="h-6 w-6" />}
            />
          </AlertDialogTrigger>
          <EditorDemoModal setOpen={setOpen} />
        </AlertDialog>
      )}
    </>
  );
}
