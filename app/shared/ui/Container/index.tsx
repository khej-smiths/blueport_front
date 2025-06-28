import { cn } from "@/shared/lib/cn";

export function Container({ ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...props } = rest;
  return (
    <div
      role="container"
      aria-label="container"
      className={cn(
        "flex w-full flex-col rounded-md bg-white p-6 shadow-md not-xl:p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
