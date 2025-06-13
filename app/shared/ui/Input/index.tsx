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
            "flex h-9 w-full bg-transparent px-3 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            variant === "default" &&
              "rounded-md border border-input focus-visible:ring-1 focus-visible:ring-ring",
            variant === "underline" &&
              "focus-visible:border-b-1 rounded-none border-0 border-b border-input focus-visible:border-primary",
            variant === "borderless" && "rounded-none border-0 shadow-none",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-[0.8rem] font-medium text-secondary">{error}</p>
        )}
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };
