import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  const { full_name, email, password } = req.body;

  if (!full_name || !email || !password)
    return res.status(400).json({ message: "All fields are required" });

  const existing = await prisma.users.findFirst({ where: { email } });

  if (existing)
    return res.status(400).json({ message: "Email already registered" });

  const hashed = bcrypt.hashSync(password, 10);

  const user = await prisma.users.create({
    data: { full_name, email, password: hashed },
  });

  // Set auth cookie on register so user is considered logged-in on first visit
  res.setHeader("Set-Cookie", `user=${user.id}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24 * 7}`);

  return res.status(201).json({ user });
}
