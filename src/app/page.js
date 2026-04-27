import Link from "next/link";

const features = [
  {
    title: "Easy Product Listing",
    description: "Add and organize products with clean information blocks.",
  },
  {
    title: "Smart Filtering",
    description: "Search and filter products by category, price, and rating.",
  },
  {
    title: "Responsive Layout",
    description: "Designed for mobile, tablet, and desktop screens.",
  },
];

const categories = ["Electronics", "Fashion", "Home", "Accessories"];

const testimonials = [
  {
    name: "Ayesha Rahman",
    text: "ProductHub feels clean, simple, and very easy to use.",
  },
  {
    name: "Tanvir Ahmed",
    text: "The layout is polished and works great across devices.",
  },
];

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-blue-600 font-semibold mb-3">
            Modern Product Showcase
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Manage and explore products beautifully.
          </h1>
          <p className="mt-5 text-slate-600 text-lg">
            ProductHub helps you showcase items, view details, filter products,
            and manage your own product collection.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/items"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white transition hover:bg-blue-700 active:scale-95 font-medium"
            >
              Explore Items
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 rounded-lg border border-slate-300 font-medium hover:bg-white"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow p-8">
          <div className="h-72 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center">
            <span className="text-7xl">🛍️</span>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Why ProductHub?</h2>
          <p className="text-slate-600 mt-2">
            Everything you need for a simple product management app.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-slate-600 mt-3">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="bg-white rounded-3xl shadow p-8">
          <h2 className="text-3xl font-bold text-center">Popular Categories</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mt-8">
            {categories.map((category) => (
              <div
                key={category}
                className="border rounded-2xl p-6 text-center font-semibold hover:border-blue-600 hover:text-blue-600 transition"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="rounded-3xl bg-blue-600 text-white transition hover:bg-blue-700 active:scale-95 p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to organize your products?
          </h2>
          <p className="mt-4 text-blue-100">
            Add, manage, view, and explore products from one clean interface.
          </p>
          <Link
            href="/items"
            className="inline-block mt-7 px-6 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50"
          >
            Browse Products
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">What Users Say</h2>
          <p className="text-slate-600 mt-2">
            A simple app with a polished experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <p className="text-slate-600">“{item.text}”</p>
              <h3 className="font-semibold mt-4">{item.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}