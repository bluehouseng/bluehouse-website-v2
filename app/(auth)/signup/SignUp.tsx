// app/(auth)/signup/SignUp.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [stack, setStack] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [formLoading, setFormLoading] = useState(false);
  const [githubLoading, setGithubLoading] = useState(false);
  const router = useRouter();

 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setFormLoading(true);

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setFormLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("stack", stack);
      formData.append("password", password);
   

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to register");
      }

      router.push("/signin");
    } catch (err: any) {
      console.error("Signup error:", err);
      setError(err.message || "Something went wrong");
      setFormLoading(false);
    }
  };

  const handleGitHubSignIn = async () => {
    setError(null);
    setGithubLoading(true);

    try {
      // Let NextAuth handle the entire flow
      await signIn("github", {
        callbackUrl: "/dashboard",
      });
    } catch (err) {
      console.error("GitHub SignIn Error:", err);
      setError("Failed to initiate GitHub sign-in");
      setGithubLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Create your account</h1>
      </div>
      
      {/* Email/Password Signup Form */}
      <form onSubmit={handleSubmit} className="mb-6">
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
              disabled={formLoading || githubLoading}
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
              disabled={formLoading || githubLoading}
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label htmlFor="stack" className="mb-1 block text-sm font-medium text-gray-700">
              Stack
            </label>
            <input
              id="stack"
              className="form-input w-full py-2 px-3 border border-gray-300 rounded-md"
              type="text"
              value={stack}
              onChange={(e) => setStack(e.target.value)}
              required
              disabled={formLoading || githubLoading}
              placeholder="Frontend Developer"
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
              disabled={formLoading || githubLoading}
              placeholder="••••••••"
            />
          </div>
        
        </div>
        {error && <div className="mt-4 text-red-600 text-sm">{error}</div>}
        <button
          type="submit"
          disabled={formLoading || githubLoading}
          className={`w-full mt-6 py-2 px-4 bg-gradient-to-t from-blue-600 to-blue-500 text-white rounded-md shadow transition-all ${
            formLoading || githubLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
          }`}
        >
          {formLoading ? "Registering..." : "Register"}
        </button>
      </form>

      {/* OAuth Separator */}
      <div className="flex items-center my-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-sm text-gray-500">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* GitHub OAuth Button */}
      <div className="mt-4">
        <button
          type="button"
          onClick={handleGitHubSignIn}
          disabled={formLoading || githubLoading}
          className={`w-full py-2 px-4 bg-gradient-to-t from-gray-900 to-gray-700 text-white rounded-md shadow transition-all ${
            formLoading || githubLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
          }`}
        >
          {githubLoading ? "Redirecting to GitHub..." : "Continue with GitHub"}
        </button>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        By signing up, you agree to the{" "}
        <a href="#0" className="underline font-medium hover:no-underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#0" className="underline font-medium hover:no-underline">
          Privacy Policy
        </a>.
      </div>
      <div className="mt-4 text-center">
        <span className="text-sm text-gray-500">Already have an account? </span>
        <Link href="/signin" className="text-sm text-blue-600 hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
}