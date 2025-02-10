import { Plus } from "lucide-react";

import { Button } from "@/shared";
import { AddItemButtonProps } from "../model/type";

export function AddItemButton({ onClick }: AddItemButtonProps) {
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
