import { create } from "zustand";
import axios from "axios";
import type { Candidate } from "@/types/db";

interface CandidateState {
  candidates: Candidate[];
  loading: boolean;
  error: string | null;

  fetchCandidates: () => Promise<void>;
  searchCandidates: (filters: Record<string, any>) => Promise<void>;
  updateCandidate: (id: string, data: Partial<Candidate>) => Promise<boolean>;
  deleteCandidate: (id: string) => Promise<boolean>;
}

export const useCandidateStore = create<CandidateState>((set, get) => ({
  candidates: [],
  loading: false,
  error: null,

  fetchCandidates: async () => {
    set({ loading: true });

    try {
      const res = await axios.get<Candidate[]>("/api/candidates");
      set({ candidates: res.data });
    } catch {
      set({ error: "Failed to load candidates" });
    } finally {
      set({ loading: false });
    }
  },

  searchCandidates: async (filters) => {
    set({ loading: true });

    try {
      const res = await axios.get<Candidate[]>("/api/candidates", {
        params: filters,
      });
      set({ candidates: res.data });
    } catch {
      set({ error: "Search failed" });
    } finally {
      set({ loading: false });
    }
  },

  updateCandidate: async (id, data) => {
    try {
      const res = await axios.put<Candidate>(`/api/candidates/${id}`, data);
      const updated = res.data;

      set({
        candidates: get().candidates.map((c) =>
          c.id === id ? updated : c
        ),
      });

      return true;
    } catch {
      return false;
    }
  },

  deleteCandidate: async (id) => {
    try {
      await axios.delete(`/api/candidates/${id}`);
      set({
        candidates: get().candidates.filter((c) => c.id !== id),
      });
      return true;
    } catch {
      return false;
    }
  },
}));
