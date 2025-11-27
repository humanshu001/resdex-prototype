import type { NextApiRequest, NextApiResponse } from "next";
import { ADMIN_EMAIL, ADMIN_PASSWORD } from "@/config/admin";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    // save simple cookie
    res.setHeader(
    "Set-Cookie",
    `admin_auth=valid; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`
    );

    return res.json({ success: true });
  }

  return res.status(401).json({ message: "Invalid credentials" });
}
