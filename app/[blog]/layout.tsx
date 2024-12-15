import GNB from "@/components/section/GNB";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <GNB />
      <section className="flex justify-center min-h-[calc(100dvh-96px)] h-full">
        {children}
      </section>
    </>
  );
}
