// app/actions/getSessionId.ts
"use server";

import { cookies } from "next/headers";

export async function getSessionId() {
  return (await cookies()).get("session_id")?.value || "";
}
