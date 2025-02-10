export interface FloatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  position?: string;
  animation?: boolean;
}
