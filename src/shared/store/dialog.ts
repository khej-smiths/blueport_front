import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { DialogProps, DialogStore } from "../types/dialog";

export const useDialogStore = create<DialogStore>()(
  devtools((set) => ({
    dialog: undefined,
    setDialog: (open: boolean, props: DialogProps) =>
      set({ dialog: { open, props } }),
  }))
);
