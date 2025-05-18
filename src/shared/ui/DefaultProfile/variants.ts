import { cva } from "class-variance-authority";

export const profileVariant = cva(
  "flex items-center justify-center bg-gray-200 object-cover",
  {
    variants: {
      variant: {
        default: "h-[376px] w-[480px]",
        avatar: "rounded-full size-32",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
