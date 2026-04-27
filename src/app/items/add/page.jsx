"use client";

import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AddProductPage() {
  const router = useRouter();

  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;

    const newProduct = {
      id: Date.now().toString(),
      title: form.title.value,
      shortDescription: form.shortDescription.value,
      fullDescription: form.fullDescription.value,
      price: Number(form.price.value),
      category: form.category.value,
      image: form.image.value || "📦",
      rating: 4.5,
      specs: ["New product", "User added", "Available now"],
    };

    const existingProducts =
      JSON.parse(localStorage.getItem("products")) || [];

    localStorage.setItem(
      "products",
      JSON.stringify([...existingProducts, newProduct])
    );

    toast.success("Product added successfully!");
    form.reset();
    router.push("/items/manage");
  };

  return (
    <ProtectedRoute>
      <main className="bg-slate-50">
        <section className="max-w-3xl mx-auto px-4 py-16">
          <div className="mb-8">
            <p className="text-blue-600 font-semibold">Product Management</p>
            <h1 className="text-4xl font-bold mt-2">Add New Product</h1>
            <p className="text-slate-600 mt-3">
              Fill in the product information below.
            </p>
          </div>

          <form
            onSubmit={handleAddProduct}
            className="bg-white rounded-3xl shadow p-8 space-y-5"
          >
            <div>
              <label className="block font-medium mb-2">Product Title</label>
              <input
                name="title"
                type="text"
                required
                placeholder="Enter product title"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                Short Description
              </label>
              <input
                name="shortDescription"
                type="text"
                required
                placeholder="Short product description"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                Full Description
              </label>
              <textarea
                name="fullDescription"
                rows="5"
                required
                placeholder="Full product description"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              ></textarea>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block font-medium mb-2">Price</label>
                <input
                  name="price"
                  type="number"
                  required
                  min="1"
                  placeholder="Product price"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">Category</label>
                <select
                  name="category"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                  <option>Electronics</option>
                  <option>Fashion</option>
                  <option>Home</option>
                  <option>Accessories</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-medium mb-2">Image URL / Icon</label>
              <input
                name="image"
                type="text"
                placeholder="Example: 🎧 or image URL"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition"
            >
              Submit Product
            </button>
          </form>
        </section>
      </main>
    </ProtectedRoute>
  );
}