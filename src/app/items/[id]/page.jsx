"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { products } from "@/data/products";
import { useState } from "react";

export default function ItemDetailsPage() {
  const params = useParams();

  const [allProducts] = useState(() => {
    if (typeof window === "undefined") return products;

    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    return [...products, ...savedProducts];
  });

  const product = allProducts.find((item) => item.id === params.id);

  if (!product) {
    return (
      <main className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <Link
          href="/items"
          className="inline-block mt-6 text-blue-600 hover:underline"
        >
          Back to Items
        </Link>
      </main>
    );
  }

  const relatedItems = allProducts.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <Link
        href="/items"
        className="inline-block mb-6 text-blue-600 hover:underline"
      >
        ← Back to Items
      </Link>

      <section className="grid md:grid-cols-2 gap-10 items-start">
        <div className="bg-white rounded-3xl shadow p-10 flex items-center justify-center">
          <span className="text-9xl">{product.image}</span>
        </div>

        <div>
          <p className="text-blue-600 font-semibold">{product.category}</p>
          <h1 className="text-4xl font-bold mt-2">{product.title}</h1>

          <p className="text-slate-600 mt-5 leading-7">
            {product.fullDescription}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-white rounded-xl shadow p-4">
              <p className="text-slate-500 text-sm">Price</p>
              <p className="text-xl font-bold">${product.price}</p>
            </div>

            <div className="bg-white rounded-xl shadow p-4">
              <p className="text-slate-500 text-sm">Rating</p>
              <p className="text-xl font-bold">{product.rating}</p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-3">Specifications</h2>
            <ul className="space-y-2">
              {product.specs.map((spec) => (
                <li key={spec} className="bg-white rounded-lg shadow px-4 py-3">
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {relatedItems.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Items</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                <div className="text-5xl mb-4">{item.image}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-slate-600 mt-2 line-clamp-2">
                  {item.shortDescription}
                </p>

                <Link
                  href={`/items/${item.id}`}
                  className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 active:scale-95 transition"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}