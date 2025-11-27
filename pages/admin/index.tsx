import { useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { useRouter } from "next/router";
import axios from "axios";
import DefaultLayout from "@/layouts/default";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("/api/admin/login", { email, password });
      if (res.data.success) router.push("/admin/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <DefaultLayout>
      <div className="flex items-center justify-center min-h-[70vh]">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 shadow-xl rounded-xl max-w-md w-full"
        >
          <h1 className="text-2xl font-semibold mb-6 text-center">
            Admin Login
          </h1>

          {error && <p className="text-red-500 mb-3">{error}</p>}

          <Input
            type="email"
            label="Email"
            variant="bordered"
            className="mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            label="Password"
            variant="bordered"
            className="mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            className="w-full bg-[#2F6BFF] text-white rounded-lg"
          >
            Login
          </Button>
        </form>
      </div>
    </DefaultLayout>
  );
}
