// app/(auth)/signin/SignIn.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();

  // Redirect to /dashboard if already authenticated
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false, // Prevent server-side redirect
      });

      if (result?.error) {
        setError("Invalid email or password");
        setLoading(false);
        return;
      }

      // Client-side navigation to /dashboard
      router.push("/dashboard");
    } catch (err) {
      setError("An unexpected error occurred");
      setLoading(false);
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Sign in to your account</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="form-input w-full py-2 px-3 border border-gray-300 rounded-md"
              type="email"
              placeholder="corybarker@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className="form-input w-full py-2 px-3 border border-gray-300 rounded-md"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>
        </div>
        {error && <div className="mt-4 text-red-600 text-sm">{error}</div>}
        <div className="mt-6">
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 bg-gradient-to-t from-blue-600 to-blue-500 text-white rounded-md shadow transition-all ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </div>
      </form>
      <div className="mt-6 text-center">
        <Link className="text-sm text-gray-700 underline hover:no-underline" href="/reset-password">
          Forgot password
        </Link>
      </div>
    </div>
  );
}