import { create } from "zustand";

interface User {
  id: number;
  username: string;
  email: string;
  Github?: Github | null;
  createdAt: Date;
  updatedAt: Date;
}

interface Github {
  id: number;
  githubId: string;
  accessToken: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
}

export const useAuthStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
}));
