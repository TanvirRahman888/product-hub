export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-lg font-bold">ProductHub</h2>
          <p className="text-sm mt-2 text-gray-400">
            Modern product showcase app with clean UI.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Links</h3>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li>Home</li>
            <li>Items</li>
            <li>About</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Follow</h3>
          <p className="text-gray-400 text-sm">
            Social links 
          </p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 pb-4">
        © 2026 ProductHub. All rights reserved.
      </div>
    </footer>
  );
}