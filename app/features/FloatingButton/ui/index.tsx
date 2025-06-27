import { Button, cn } from "@/shared";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  position?: string;
  animation?: boolean;
}

export function FloatingButton({
  icon,
  position = "",
  animation = true,
  ...props
}: Props) {
  const { className, ...rest } = props;
  return (
    <Button
      className={cn(
        "fixed size-14 rounded-full p-0 not-xl:size-12",
        position,
        animation && "transition-all duration-300 hover:rotate-90",
        className
      )}
      {...rest}
    >
      {icon}
    </Button>
  );
}
