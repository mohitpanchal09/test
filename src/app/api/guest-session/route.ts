// app/api/guest-session/route.ts
import { cookies } from "next/headers";
import { apiClient } from "@/lib/apiClient";

export async function GET() {
  const existing = (await cookies()).get("session_id")?.value;
  if (existing) {
    return Response.json({ sessionId: existing });
  }

  const res = await apiClient.get(`/guest-cart/generate-session`);
  const sessionId = res.data?.data.session_id;
  console.log("🚀 ~ GET ~ sessionId:", sessionId)

  if (sessionId) {
   (await cookies()).set("session_id", sessionId, { httpOnly: true, secure: true, sameSite: "lax" });
  }

  return Response.json({ sessionId });
}
