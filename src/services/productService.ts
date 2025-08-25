import { apiClient } from "@/lib/apiClient";

export async function fetchCategoriesWithProducts() {
    try {
        const res = await apiClient.get("/products/all-categories?limit=10");
        return res.data.data;
    } catch (error) {
        console.error("Error fetching categories with products:", error);
        return [];
    }
}


export async function fetchProductById(productId: string) {
  try {
    const res = await apiClient.get(`/products/${productId}`);
    return res.data.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}