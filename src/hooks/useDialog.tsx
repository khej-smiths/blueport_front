"use client";

import {
  DialogProps,
  useDialogStoreClose,
  useDialogStoreOpen,
} from "@/store/dialog";
import { ComponentType } from "react";

export default function useDialog() {
  const open = useDialogStoreOpen();
  const close = useDialogStoreClose();

  const openDialog = <P extends DialogProps>(
    Component: ComponentType<P>,
    props?: P
  ) => {
    open(Component, props || {});
  };

  const closeDialog = () => {
    close();
  };

  return { openDialog, closeDialog };
}
