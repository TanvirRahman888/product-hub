export default function ContactPage() {
  return (
    <main className="bg-slate-50">
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <p className="text-blue-600 font-semibold mb-3">Contact Us</p>
          <h1 className="text-4xl md:text-5xl font-bold">
            Get in touch with ProductHub
          </h1>
          <p className="text-slate-600 mt-4">
            Have questions about products or management features? Send us a message.
          </p>
        </div>

        <form className="bg-white rounded-3xl shadow p-8 space-y-5">
          <div>
            <label className="block font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="button"
            className="w-full bg-blue-600 text-white transition hover:bg-blue-700 active:scale-95 py-3 rounded-lg font-medium"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}