import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface BlogGNB {
  name: string;
  domain: string;
  github?: string | null
}

interface LayoutStore {
  blogGNB: BlogGNB;
  setBlogGNB: (blogGNB: BlogGNB) => void;
}

export const useLayoutStore = create<LayoutStore>()(
  devtools((set) => ({
    blogGNB: {
      name: "",
      domain: "",
      github: null
    },
    setBlogGNB: (blogGNB) => set({ blogGNB }),
  }))
)