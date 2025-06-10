"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { CreateBlogDialog } from "@/features";
import { useAuthStore } from "@/shared";

import { useReadUser } from "../api/query";

export function CheckBlog() {
  const [showCreateBlogDialog, setShowCreateBlogDialog] = useState(false);

  const router = useRouter();
  const { accessToken } = useAuthStore();

  const { data: user } = useReadUser();

  useEffect(() => {
    console.log(user);

    if (!user && accessToken) {
      setShowCreateBlogDialog(true);
      return;
    }
  }, [user, router, accessToken]);

  return (
    <CreateBlogDialog
      open={showCreateBlogDialog}
      setOpen={setShowCreateBlogDialog}
    />
  );
}
