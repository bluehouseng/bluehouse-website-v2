"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to register");
      }

      router.push("/signin");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Create your account</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              className="form-input w-full py-2 px-3 border border-gray-300 rounded-md"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={loading}
              placeholder="Corey Barker"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              className="form-input w-full py-2 px-3 border border-gray-300 rounded-md"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              id="phone"
              className="form-input w-full py-2 px-3 border border-gray-300 rounded-md"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              disabled={loading}
              placeholder="(+750) 932-8907"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              className="form-input w-full py-2 px-3 border border-gray-300 rounded-md"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              placeholder="••••••••"
            />
          </div>
        </div>
        {error && <div className="mt-4 text-red-600 text-sm">{error}</div>}
        <div className="mt-6 space-y-3">
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 bg-gradient-to-t from-blue-600 to-blue-500 text-white rounded-md shadow transition-all ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
          <div className="text-center text-sm italic text-gray-400">Or</div>
          <button
            type="button"
            className="btn w-full bg-gradient-to-t from-gray-900 to-gray-700 text-white rounded-md py-2 px-4 shadow"
            disabled={loading}
          >
            Continue with GitHub
          </button>
        </div>
      </form>
      <div className="mt-6 text-center text-sm text-gray-500">
        By signing up, you agree to the{" "}
        <a href="#0" className="underline font-medium hover:no-underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#0" className="underline font-medium hover:no-underline">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
}
