"use client";

import localFont from "next/font/local";
import "./globals.css";
import "../style/prismTheme.css";
import Footer from "@/components/section/Footer";
import { Plus } from "lucide-react";
import FloatingButton from "@/components/common/FloatingButton";
import { usePathname, useRouter } from "next/navigation";
import { Toaster } from "@/components/common/Sonner";

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
        {children}
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
