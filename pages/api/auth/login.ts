import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  const { email, password } = req.body;

  const user = await prisma.users.findFirst({ where: { email } });

  if (!user)
    return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = bcrypt.compareSync(password, user.password);

  if (!isMatch)
    return res.status(400).json({ message: "Invalid credentials" });

  // Set a simple auth cookie so server-side pages/middleware can detect logged-in users.
  // NOTE: For a production app use a signed token (JWT) and HttpOnly, secure cookies.
  res.setHeader("Set-Cookie", `user=${user.id}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24 * 7}`);

  return res.status(200).json({ user });
}
