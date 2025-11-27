import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Clear the auth cookie
  res.setHeader(
    "Set-Cookie",
    `user=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`
  );

  return res.status(200).json({ success: true });
}
