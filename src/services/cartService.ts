// lib/cartService.ts
import { apiClient } from "@/lib/apiClient";

export async function addToGuestCart(
  sessionId: string,
  payload: {
    item_type: string;
    item_details: {
      meal_subscription_id: string;
      duration_value: number;
      selected_meals: { meal_time: string; meal_type: string }[];
    };
  }
) {
  try {
    const res = await apiClient.post(`/guest-cart/${sessionId}`, payload);
    return res.data;
  } catch (error: any) {
    console.error("Error adding to guest cart:", error);
    throw new Error(error?.response?.data?.message || "Failed to add to guest cart");
  }
}
