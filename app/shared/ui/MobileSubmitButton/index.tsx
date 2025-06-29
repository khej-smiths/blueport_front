import { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "../Button";
import { cn } from "@/shared/lib/cn";

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function MobileSubmitButton({
  className,
  variant,
  size,
  asChild,
  ...props
}: Props) {
  return (
    <div className="fixed right-0 bottom-0 left-0 flex h-16 items-center justify-center px-4">
      <Button
        type="submit"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        저장하기
      </Button>
    </div>
  );
}
