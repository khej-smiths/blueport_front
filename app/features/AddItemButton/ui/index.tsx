import { Plus } from "lucide-react";

import { Button } from "@/shared";

interface Props {
  onClick?: () => void;
}

export function AddItemButton({ onClick }: Props) {
  return (
    <Button
      className="size-8 rounded-sm p-0"
      variant="ghost"
      onClick={() => onClick?.()}
    >
      <Plus className="size-4 text-gray-400" />
    </Button>
  );
}
