import { GNB } from "@/widgets";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex min-h-dvh flex-col gap-5">
      <GNB />
      {children}
    </section>
  );
}
