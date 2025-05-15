import localFont from "next/font/local";
import "./globals.css";
import "./prismTheme.css";

import { Toaster } from "@/shared";
import { Providers } from "./_provider";
import { ClientLayoutBody } from "@/widgets";

const pretendard = localFont({
  src: "../src/shared/assets/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <Providers>
          {/* Dialog 애니메이션이 닫을때에도 정상적으로 나오려면 Dialog가 미리 렌더링 되어있어야 하며
            조건부 렌더링 시 모달을 닫을때에는 애니메이션이 재생되지 않고 모달이 사라짐 */}
          {children}
          <ClientLayoutBody />
          <Toaster theme="light" />
        </Providers>
      </body>
    </html>
  );
}
