"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Items", path: "/items" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLogout = async () => {
    await logout();
    setDropdown(false);
    setOpen(false);
    router.push("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          ProductHub
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => {
            const active =
              link.path === "/" ? pathname === "/" : pathname.startsWith(link.path);

            return (
              <Link
                key={link.path}
                href={link.path}
                className={
                  active
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-600"
                }
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex gap-3 items-center">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdown(!dropdown)}
                className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition"
              >
                {user.displayName || user.email}
              </button>

              {dropdown && (
                <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-lg border p-3 space-y-2">
                  <p className="text-sm text-slate-500 px-2">
                    {user.email}
                  </p>

                  <Link
                    href="/items/add"
                    onClick={() => setDropdown(false)}
                    className="block px-3 py-2 rounded hover:bg-slate-100"
                  >
                    Add Product
                  </Link>

                  <Link
                    href="/items/manage"
                    onClick={() => setDropdown(false)}
                    className="block px-3 py-2 rounded hover:bg-slate-100"
                  >
                    Manage Products
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 rounded text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-1 border rounded hover:bg-gray-100"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Register
              </Link>
            </>
          )}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">
          {navLinks.map((link) => {
            const active =
              link.path === "/" ? pathname === "/" : pathname.startsWith(link.path);

            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setOpen(false)}
                className={
                  active
                    ? "block text-blue-600 font-semibold"
                    : "block hover:text-blue-600"
                }
              >
                {link.name}
              </Link>
            );
          })}

          {user ? (
            <div className="border-t pt-3 space-y-2">
              <p className="text-sm text-slate-500">
                {user.displayName || user.email}
              </p>

              <Link
                href="/items/add"
                onClick={() => setOpen(false)}
                className="block hover:text-blue-600"
              >
                Add Product
              </Link>

              <Link
                href="/items/manage"
                onClick={() => setOpen(false)}
                className="block hover:text-blue-600"
              >
                Manage Products
              </Link>

              <button
                onClick={handleLogout}
                className="text-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-3 pt-3">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}