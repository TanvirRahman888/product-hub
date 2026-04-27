"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateProfile } from "firebase/auth";
import { useAuth } from "@/context/AuthContext";

export default function RegisterPage() {
  const { register, googleLogin } = useAuth();
  const router = useRouter();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    try {
      const result = await register(email, password);

      await updateProfile(result.user, {
        displayName: name,
      });

      router.push("/");
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    setError("");
    setLoading(true);

    try {
      await googleLogin();
      router.push("/");
    } catch (err) {
      setError("Google registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-slate-50 min-h-screen">
      <section className="max-w-md mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl shadow p-8">
          <div className="text-center mb-8">
            <p className="text-blue-600 font-semibold">Create Account</p>
            <h1 className="text-3xl font-bold mt-2">Register</h1>
            <p className="text-slate-600 mt-2">
              Create an account to add and manage products.
            </p>
          </div>

          {error && (
            <p className="mb-4 bg-red-100 text-red-600 p-3 rounded-lg text-sm">
              {error}
            </p>
          )}

          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label className="block font-medium mb-2">Name</label>
              <input
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Email</label>
              <input
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Password</label>
              <input
                name="password"
                type="password"
                required
                placeholder="Create a password"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Register"}
            </button>
          </form>

          <button
            type="button"
            onClick={handleGoogleRegister}
            disabled={loading}
            className="w-full mt-4 border py-3 rounded-lg font-medium hover:bg-slate-100 active:scale-95 transition disabled:opacity-60"
          >
            Continue with Google
          </button>

          <p className="text-center text-slate-600 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 font-medium">
              Login
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}