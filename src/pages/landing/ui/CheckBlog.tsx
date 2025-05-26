"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { CreateBlogModal } from "@/features";
import { useAuthStore } from "@/shared";

import { useCheckBlog } from "../api/query";

export function CheckBlog() {
  const [showCreateBlogModal, setShowCreateBlogModal] = useState(false);

  const router = useRouter();
  const { accessToken } = useAuthStore();

  const { data: checkBlog } = useCheckBlog();

  useEffect(() => {
    console.log(checkBlog);

    if (!checkBlog && accessToken) {
      setShowCreateBlogModal(true);
      return;
    }
  }, [checkBlog, router, accessToken]);

  return (
    <CreateBlogModal
      open={showCreateBlogModal}
      setOpen={setShowCreateBlogModal}
    />
  );
}
