"use client";

import { useState } from "react";
import { products } from "@/data/products";
import Link from "next/link";

export default function ItemsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const [allProducts] = useState(() => {
    if (typeof window === "undefined") return products;

    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    return [...products, ...savedProducts];
  });

  const categories = ["All", ...new Set(allProducts.map((p) => p.category))];

  let filteredProducts = allProducts.filter((item) => {
    const matchSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory = category === "All" || item.category === category;

    return matchSearch && matchCategory;
  });

  if (sortOrder === "low-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  }

  if (sortOrder === "high-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Sort by Price</option>
          <option value="low-high">Low to High</option>
          <option value="high-low">High to Low</option>
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-2xl shadow p-10 text-center">
          <h2 className="text-2xl font-bold">No products found</h2>
          <p className="text-slate-600 mt-2">
            Try changing your search or filter.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <div className="text-5xl mb-4">{item.image}</div>

              <h2 className="text-xl font-semibold">{item.title}</h2>

              <p className="text-slate-600 mt-2 line-clamp-2">
                {item.shortDescription}
              </p>

              <div className="flex justify-between items-center mt-3">
                <p className="font-medium">${item.price}</p>
                <p className="text-sm text-slate-500">⭐ {item.rating}</p>
              </div>

              <Link
                href={`/items/${item.id}`}
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 active:scale-95 transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}