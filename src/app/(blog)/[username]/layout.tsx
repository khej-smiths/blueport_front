import GNB from "@/components/section/GNB";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex flex-col gap-5 min-h-[calc(100dvh-96px)]">
      <GNB />
      {children}
    </section>
  );
}
