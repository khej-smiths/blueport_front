import { cn } from "../../lib/cn";
import { LogoProps } from "../../types/logo";

export function Logo({ size = "md" }: LogoProps) {
  return (
    <div className="flex w-full flex-row">
      <h1 className="flex flex-row items-baseline" aria-label="P.log">
        <p className={cn("font-bold", size === "sm" ? "text-4xl" : "text-6xl")}>
          EP.
        </p>
        <p className={cn("font-thin", size === "sm" ? "text-3xl" : "text-5xl")}>
          log
        </p>
      </h1>
    </div>
  );
}
