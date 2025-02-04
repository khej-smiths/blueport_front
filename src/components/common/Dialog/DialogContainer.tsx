"use client";

import { DialogProps, useDialogStore } from "@/store/dialog";
import { AlertDialog, AlertDialogContent } from "./DialogStyle";

export default function DialogContainer() {
  const { dialog, close } = useDialogStore();

  if (!dialog) return;

  const { Component, props } = dialog;
  const { onConfirm = () => {}, onClose = () => {}, dialogId, ...rest } = props;

  const handleClose = async () => {
    await onClose?.();
    close();
  };

  const handleConfirm = async (_props?: DialogProps) => {
    try {
      await onConfirm?.(_props);
      close();
    } catch (error) {
      console.error("dialog confirm error:", error);
    }
  };

  return (
    <AlertDialog open={Boolean(dialog)}>
      <AlertDialogContent>
        <Component
          dialogId={dialogId}
          onConfirm={handleConfirm}
          onClose={handleClose}
          {...rest}
        />
      </AlertDialogContent>
    </AlertDialog>
  );
}
