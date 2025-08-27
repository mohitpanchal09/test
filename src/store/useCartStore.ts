// store/useCartStore.ts
import { create } from "zustand";

interface CartItem {
  item_type: string;
  item_details: any;
  unit_price: number;
  discount_amount: number;
  total_price: number;
  _id: string;
}

interface CartData {
  session_id: string;
  items: CartItem[];
  status: string;
  subtotal: number;
  total_discount: number;
  final_total: number;
  applied_coupons: any[];
  applied_discounts: any[];
  is_converted: boolean;
  last_activity_at: string;
  expires_at: string;
  created_at: string;
  updated_at: string;
  id: string;
}

interface CartStore {
  cart: CartData | null;
  setCart: (cart: CartData) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: null,
  setCart: (cart) => set({ cart }),
  clearCart: () => set({ cart: null }),
}));
