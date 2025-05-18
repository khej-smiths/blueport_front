"use client";

import { AlertDialog, AlertDialogTrigger } from "@/shared";
import { Footer } from "../../Footer";
import { FloatingButton, EditorDemoDialog } from "@/features";
import { Plus } from "lucide-react";
import { usePathname } from "next/navigation";

export function ClientLayoutBody() {
  const pathname = usePathname();

  const disableButtonPageList = ["/editor", "/login"];

  const isEditor = pathname?.includes("/editor");
  const isDisableButtonPage = disableButtonPageList.includes(pathname ?? "");

  return (
    <>
      {!isEditor && <Footer />}
      {!isDisableButtonPage && (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            {/* 내가 직접 만든 트리거를 사용할 때에는 반드시 asChild를 사용해야 한다 */}
            <FloatingButton
              position="bottom-10 right-10"
              icon={<Plus className="h-6 w-6" />}
            />
          </AlertDialogTrigger>
          <EditorDemoDialog />
        </AlertDialog>
      )}
    </>
  );
}
