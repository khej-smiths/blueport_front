import * as React from "react";

import { cn } from "../../lib/cn";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "underline" | "borderless";
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, type, variant = "default", error, ...props }, ref) => {
    return (
      <>
        <input
          type={type}
          className={cn(
            "file:text-foreground placeholder:text-muted-foreground flex h-9 w-full bg-transparent px-3 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            variant === "default" &&
              "border-input focus-visible:ring-ring rounded-md border focus-visible:ring-1",
            variant === "underline" &&
              "border-input focus-visible:border-primary rounded-none border-0 border-b focus-visible:border-b-1",
            variant === "borderless" && "rounded-none border-0 shadow-none",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-secondary text-[0.8rem] font-medium">{error}</p>
        )}
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };
