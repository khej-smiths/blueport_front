"use client";

import { useState } from "react";

import { AlertDialog, AlertDialogContent } from "@/shared";

import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function CreateBlogModal() {
  const [open, setOpen] = useState(true);

  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="w-full max-w-96">
        <Header />
        <Content />
        <Footer setOpen={setOpen} />
      </AlertDialogContent>
    </AlertDialog>
  );
}
