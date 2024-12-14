import "./globals.css";
import "../style/prismTheme.css";
import GNB from "@/components/section/GNB";

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
      <body>
        <GNB />
        <section className="flex justify-center min-h-[calc(100dvh-96px)] h-full">
          {children}
        </section>
      </body>
    </html>
  );
}
