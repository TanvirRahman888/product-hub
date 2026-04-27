"use client";

import Link from "next/link";
import { useState } from "react";
import { products } from "@/data/products";
import toast from "react-hot-toast";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

export default function ManageProductsPage() {
  const [allProducts, setAllProducts] = useState(() => {
    if (typeof window === "undefined") return products;

    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    return [...products, ...savedProducts];
  });

  const handleDelete = (id) => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const updatedSavedProducts = savedProducts.filter((item) => item.id !== id);

    localStorage.setItem("products", JSON.stringify(updatedSavedProducts));

    setAllProducts((prev) => prev.filter((item) => item.id !== id));
    toast.success("Product deleted successfully!");
  };

  return (
    <ProtectedRoute>
      <main className="bg-slate-50">
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <p className="text-blue-600 font-semibold">Product Management</p>
              <h1 className="text-4xl font-bold mt-2">Manage Products</h1>
              <p className="text-slate-600 mt-3">
                View and manage all listed products.
              </p>
            </div>

            <Link
              href="/items/add"
              className="px-5 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition text-center"
            >
              Add Product
            </Link>
          </div>

          <div className="bg-white rounded-3xl shadow overflow-hidden">
            <div className="hidden md:grid grid-cols-5 gap-4 bg-slate-100 px-6 py-4 font-semibold">
              <p>Product</p>
              <p>Category</p>
              <p>Price</p>
              <p>Rating</p>
              <p>Actions</p>
            </div>

            <div className="divide-y">
              {allProducts.map((item) => (
                <div
                  key={item.id}
                  className="grid md:grid-cols-5 gap-4 px-6 py-5 items-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{item.image}</span>
                    <div>
                      <h2 className="font-semibold">{item.title}</h2>
                      <p className="text-sm text-slate-500 md:hidden">
                        {item.category}
                      </p>
                    </div>
                  </div>

                  <p className="hidden md:block">{item.category}</p>
                  <p>${item.price}</p>
                  <p>⭐ {item.rating}</p>

                  <div className="flex gap-3">
                    <Link
                      href={`/items/${item.id}`}
                      className="px-3 py-2 text-sm rounded bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                      View
                    </Link>

                    <button
                      type="button"
                      onClick={() => handleDelete(item.id)}
                      className="px-3 py-2 text-sm rounded bg-red-600 text-white hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </ProtectedRoute>
  );
}