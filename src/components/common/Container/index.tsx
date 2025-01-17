import { cn } from "@/lib/utils";

export default function Container({
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...props } = rest;
  return (
    <div
      role="container"
      aria-label="container"
      className={cn(
        "flex flex-col rounded-md bg-white p-6 shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
