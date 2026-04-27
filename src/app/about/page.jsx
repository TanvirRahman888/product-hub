export default function AboutPage() {
  return (
    <main className="bg-slate-50">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-blue-600 font-semibold mb-3">About ProductHub</p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              A simple and modern product management app.
            </h1>

            <p className="text-slate-600 mt-5 leading-7">
              ProductHub is designed to help users explore products, view
              detailed information, and manage product listings through a clean,
              responsive interface.
            </p>

            <p className="text-slate-600 mt-4 leading-7">
              This project focuses on polished frontend design, consistent
              layout, reusable sections, responsive cards, and protected product
              management features.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow p-10">
            <div className="h-80 rounded-2xl bg-blue-100 flex items-center justify-center">
              <span className="text-8xl">📦</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-bold">Clean UI</h2>
            <p className="text-slate-600 mt-3">
              Built with modern spacing, cards, and responsive layouts.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-bold">Product Focused</h2>
            <p className="text-slate-600 mt-3">
              Includes product listing, details, filtering, and management.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-bold">Auth Ready</h2>
            <p className="text-slate-600 mt-3">
              Prepared for Firebase login, register, and protected pages.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}