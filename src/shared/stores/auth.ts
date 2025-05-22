import { create, StateCreator } from "zustand";
import { createJSONStorage, devtools, persist, PersistOptions } from "zustand/middleware";

interface AuthStore {
  accessToken: string | null;
  setAccessToken: (accessToken: string) => void;
}

type PersistAuthStore = (
  config: StateCreator<AuthStore>,
  options: PersistOptions<AuthStore>
) => StateCreator<AuthStore>;

export const useAuthStore = create<AuthStore>()(
  devtools(
    (persist as PersistAuthStore)(
      (set) => ({
        accessToken: null,
        setAccessToken: (accessToken) => set({ accessToken }),
        logout: () => set({ accessToken: null }),
      }),
      {
        name: "auth",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
