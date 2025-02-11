"use client";

import localFont from "next/font/local";
import "./globals.css";
import "./prismTheme.css";
import { Plus } from "lucide-react";

import { AlertDialog, useDialogStore, Toaster } from "@/shared";
import { FloatingButton } from "@/features";
import { Footer } from "@/widgets";
import { usePathname, useRouter } from "next/navigation";

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();
  const { dialog } = useDialogStore();

  const isEditor = pathname.includes("/editor");

  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css"
          integrity="sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${pretendard.variable} min-h-dvh`}>
        {/* Dialog 애니메이션이 닫을때에도 정상적으로 나오려면 Dialog가 미리 렌더링 되어있어야 하며
            조건부 렌더링 시 모달을 닫을때에는 애니메이션이 재생되지 않고 모달이 사라짐 */}
        <AlertDialog open={dialog ? dialog.open : false}>
          {children}
        </AlertDialog>
        {!isEditor && <Footer />}
        {!isEditor && (
          <FloatingButton
            position="bottom-10 right-10"
            icon={<Plus className="h-6 w-6" />}
            onClick={() => router.push("/editor")}
          />
        )}
        <Toaster theme="light" />
      </body>
    </html>
  );
}
