import * as React from "react";

import { InputProps } from "../../types/input";
import { cn } from "../../lib/cn";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "default", ...props }, ref) => {
    return (
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
    );
  }
);
Input.displayName = "Input";

export { Input };
