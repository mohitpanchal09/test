import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;
console.log("🚀 ~ baseURL:", baseURL)

// Normal API client (no credentials)
export const apiClient = axios.create({
  baseURL,
});

// Authenticated API client (with credentials)
export const apiClientWithAuth = axios.create({
  baseURL,
  withCredentials: true, // sends cookies / auth headers
});
