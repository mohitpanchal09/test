import { apiClient } from "@/lib/apiClient";


export async function fetchClustersAndPricing() {
  try {
    const res = await apiClient.get("/meal-subscriptions?page=1&limit=10&sortBy=created_at:desc");
    return res.data.results;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
