export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex justify-center min-h-[calc(100dvh-96px)] h-full">
      {children}
    </section>
  );
}
