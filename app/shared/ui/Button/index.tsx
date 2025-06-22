import { Slot } from "@radix-ui/react-slot";
import { VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../lib/cn";
import { buttonVariants } from "./variants";

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    { className, variant, size, asChild = false, type = "button", ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        type={type}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
