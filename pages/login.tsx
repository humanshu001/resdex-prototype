import { useState, useEffect } from "react";
import { Input, Button, Card, CardBody } from "@heroui/react";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const { login, user, loading, error, loadUser } = useAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    loadUser();
    if (user) router.push("/home");
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login({ email, password });
    if (success) router.push("/home");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md shadow-lg p-2">
        <CardBody>
          <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email"
              type="email"
              variant="bordered"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              label="Password"
              type="password"
              variant="bordered"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <Button
              type="submit"
              color="primary"
              fullWidth
              isLoading={loading}
            >
              Login
            </Button>
          </form>

          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-600 font-medium">
              Register
            </a>
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
