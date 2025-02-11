import { create } from "zustand";
import { devtools } from "zustand/middleware";
interface DialogProps {
  onClose?: () => void;
  onConfirm?: (event: any) => void;
  closeText?: string;
  confirmText?: string;
  dialogId?: string;
  [property: string]: any;
}

interface Dialog {
  open: boolean;
  props?: DialogProps;
}

interface DialogStore {
  dialog?: Dialog;
  setDialog: (open: boolean, props?: DialogProps) => void;
}

export const useDialogStore = create<DialogStore>()(
  devtools((set) => ({
    dialog: undefined,
    setDialog: (open: boolean, props: DialogProps) =>
      set({ dialog: { open, props } }),
  }))
);
