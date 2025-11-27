import { create } from "zustand";
import axios from "axios";
import type { User } from "@/types/db";

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;

  register: (data: {
    full_name: string;
    email: string;
    password: string;
  }) => Promise<boolean>;

  login: (data: { email: string; password: string }) => Promise<boolean>;
  loadUser: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  error: null,

  register: async (data) => {
    set({ loading: true, error: null });

    try {
      const res = await axios.post<{ user: User }>(
        "/api/auth/register",
        data,
        { withCredentials: true }
      );
      set({ user: res.data.user });
      localStorage.setItem("user", JSON.stringify(res.data.user));
      return true;
    } catch (err: any) {
      set({
        error: err.response?.data?.message ?? "Registration failed",
      });
      return false;
    } finally {
      set({ loading: false });
    }
  },

  login: async (data) => {
    set({ loading: true, error: null });

    try {
      const res = await axios.post<{ user: User }>(
        "/api/auth/login",
        data,
        { withCredentials: true }
      );
      set({ user: res.data.user });
      localStorage.setItem("user", JSON.stringify(res.data.user));
      return true;
    } catch (err: any) {
      set({
        error: err.response?.data?.message ?? "Login failed",
      });
      return false;
    } finally {
      set({ loading: false });
    }
  },

  loadUser: () => {
    const saved = localStorage.getItem("user");
    if (saved) {
      set({ user: JSON.parse(saved) });
    }
  },

  logout: () => {
    // Call server to clear cookie, then clear local state
    try {
      axios.post("/api/auth/logout", {}, { withCredentials: true }).catch(() => {});
    } catch (e) {}
    localStorage.removeItem("user");
    set({ user: null });
  },
}));
