import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // 1. Handle Preflight (OPTIONS) requests commonly sent by browsers
  if (req.method === "OPTIONS") {
    res.setHeader("Allow", "POST");
    return res.status(200).end();
  }

  // 2. Strict check for POST method
  if (req.method !== "POST") {
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await prisma.users.findFirst({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Set auth cookie
    res.setHeader(
      "Set-Cookie",
      `user=${user.id}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24 * 7}`
    );

    // Return the user data (excluding password ideally, but following your structure)
    // It is good practice to remove sensitive data before sending back
    const { password: _, ...userWithoutPassword } = user;
    
    return res.status(200).json({ user: userWithoutPassword });

  } catch (error) {
    console.error("Login API Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}