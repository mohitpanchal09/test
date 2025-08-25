import { apiClient } from "@/lib/apiClient";


export async function fetchCategories() {
  try {
    const res = await apiClient.get("/product-categories/");
    return res.data.items;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
