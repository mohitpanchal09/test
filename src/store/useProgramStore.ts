// store/useProgramsStore.ts
import { create } from "zustand";

interface Clinic {
  _id: string;
  clinic_name: string;
  email: string;
  phone_no: string;
  cluster_id: string;
}

interface Membership {
  _id: string;
  plan: string;
  name: string;
  duration: number;
  discount_percent: number;
  amount: number;
  currency: string;
  status: string;
  is_popular: boolean;
  sort_order: number;
  discounted_amount: number;
  final_amount: number;
}

interface Program {
  _id: string;
  name: string;
  description: string;
  thumbnail_url: string;
  status: string;
  is_active: boolean;
  applicable_to_clinics: Clinic[];
  memberships: Membership[];
  show_to_leads: boolean;
  created_at: string;
  updated_at: string;
  __v: number;
}

interface ProgramsState {
  programs: Program[];
  loading: boolean;
  error: string | null;
  setPrograms: (programs: Program[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useProgramsStore = create<ProgramsState>((set) => ({
  programs: [],
  loading: false,
  error: null,
  setPrograms: (programs) => set({ programs }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
