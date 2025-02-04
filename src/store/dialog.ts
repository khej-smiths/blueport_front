import React, { ComponentType } from "react";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface DialogProps {
  onClose?: () => void;
  onConfirm?: (event: any) => void;
  closeText?: string;
  confirmText?: string;
  dialogId?: string;
  [property: string]: any;
}

interface Dialog {
  props: DialogProps;
  Component: ComponentType<DialogProps>;
}

interface DialogStore {
  dialog?: Dialog;
  open: (Component: ComponentType<any>, props: DialogProps) => void;
  close: () => void;
}

export const useDialogStore = create<DialogStore>()(
  devtools((set, get) => ({
    dialog: undefined,
    open: (Component: ComponentType<any>, props: DialogProps) =>
      set({ dialog: { Component, props } }),
    close: () => set({ dialog: undefined }),
  }))
);

export const useDialogStoreOpen = () => useDialogStore((state) => state.open);
export const useDialogStoreClose = () => useDialogStore((state) => state.close);
