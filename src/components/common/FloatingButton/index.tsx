import { Button } from "@/components/common/Button";
import { cn } from "@/lib/utils";

interface FloatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  position?: string;
  animation?: boolean;
}

export default function FloatingButton({
  icon,
  position = "",
  animation = true,
  ...props
}: FloatingButtonProps) {
  const { className, ...rest } = props;
  return (
    <Button
      className={cn(
        "fixed p-0 rounded-full w-14 h-14",
        position,
        animation && "hover:rotate-90 transition-all duration-300",
        className
      )}
      {...rest}
    >
      {icon}
    </Button>
  );
}
