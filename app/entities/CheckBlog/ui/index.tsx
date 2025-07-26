import { useEffect, useState } from "react";

import { CreateBlogDialog } from "../../CreateBlogDialog";
import { HOOKS, useAuthStore } from "@/shared";

export function CheckBlog() {
  const [open, setOpen] = useState(false);
  const { accessToken } = useAuthStore();

  const { data: self } = HOOKS.useSelf(accessToken);

  useEffect(() => {
    if (!self || !accessToken) return;

    setOpen(Boolean(!self.blog?.id));
  }, [self, accessToken]);

  return (
    <CreateBlogDialog open={open} setOpen={setOpen} userName={self?.name} />
  );
}
