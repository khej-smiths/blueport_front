"use client";

import { Plus } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { EditorDemoDialog, FloatingButton } from "@/features";
import { AlertDialog, AlertDialogTrigger, ROUTE, useAuthStore } from "@/shared";

import { Footer } from "../../Footer";

export function ClientLayoutBody() {
  const pathname = usePathname();
  const router = useRouter();

  const disableButtonPageList = ["/editor", "/login"];

  const isEditor = pathname?.includes("/editor");
  const isDisableButtonPage = disableButtonPageList.includes(pathname ?? "");

  const { accessToken } = useAuthStore();

  return (
    <>
      {!isEditor && <Footer />}
      {!isDisableButtonPage && (
        <>
          {accessToken ? (
            <FloatingButton
              position="bottom-10 right-10"
              icon={<Plus className="h-6 w-6" />}
              onClick={() => {
                router.push(ROUTE.EDITOR);
              }}
            />
          ) : (
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
      )}
    </>
  );
}
