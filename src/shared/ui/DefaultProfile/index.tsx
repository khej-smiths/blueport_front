import { cn } from "@/shared/lib/cn";
import { User } from "lucide-react";
import { profileVariant } from "./variants";
interface Props {
  variant: "default" | "avatar";
}

export function DefaultProfile({ variant }: Props) {
  return (
    <div className={cn(profileVariant({ variant }))}>
      <User className="size-full p-4 text-gray-400" />
    </div>
  );
}
