import { create } from "zustand";

// ----------------- Types -----------------
interface Cluster {
  _id: string;
  cluster_name: string;
  country: string;
  state: string;
  city: string;
}

interface MealTimePricing {
  veg: number;
  non_veg: number;
  egg: number;
  vegan: number;
}

interface DurationPricing {
  duration_value: number;
  duration_type: string;
  meal_time_pricing: Record<string, MealTimePricing>;
  total_price: number;
}

interface DiscountCriteria {
  min_meals_selected: number;
  discount_type: string;
  discount_value: number;
  excluded_meal_times: string[];
  excluded_meal_types: string[];
  is_active: boolean;
}

interface DeliveryPreference {
  delivery_days: string[];
  is_all_days: boolean;
}

interface RequestLimitSettings {
  pause_limit: number;
  meal_change_limit: number;
  pause_days_advance: number;
  change_days_advance: number;
}

export interface MealSubscription {
  cluster_id: Cluster;
  name: string;
  banner_image: string;
  description: string;
  duration_pricing: DurationPricing[];
  meal_times_available: string[];
  meal_types_available: string[];
  discount_criteria: DiscountCriteria[];
  delivery_preference: DeliveryPreference;
  request_limit_settings: RequestLimitSettings;
  status: string;
  created_by: { id: string };
  is_customizable: boolean;
  created_at: string;
  updated_at: string;
  id: string;
}

// ----------------- Store -----------------
interface MealSubscriptionsState {
  subscriptions: MealSubscription[];
  loading: boolean;
  error: string | null;
  setSubscriptions: (subs: MealSubscription[]) => void;
  setLoading: (val: boolean) => void;
  setError: (msg: string | null) => void;
}

export const useMealSubscriptionsStore = create<MealSubscriptionsState>(
  (set) => ({
    subscriptions: [],
    loading: false,
    error: null,
    setSubscriptions: (subs) => set({ subscriptions: subs }),
    setLoading: (val) => set({ loading: val }),
    setError: (msg) => set({ error: msg }),
  })
);
