import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface DialogStore {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useDialogStore = create<DialogStore>()(
  devtools((set, get) => ({
    open: false,
    setOpen: (open: boolean) => set({ open }),
  }))
);
