import { Outlet, Link } from "react-router";

export function Root() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Wireframe Header */}
      <header className="border-b-2 border-gray-800 bg-white p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-xl font-mono border-2 border-gray-800 px-4 py-2">
            LIBRARY APP
          </Link>
          <nav className="flex gap-4">
            <Link
              to="/"
              className="font-mono border-2 border-gray-800 px-3 py-1 hover:bg-gray-200"
            >
              Search
            </Link>
            <Link
              to="/my-books"
              className="font-mono border-2 border-gray-800 px-3 py-1 hover:bg-gray-200"
            >
              My Books
            </Link>
            <Link
              to="/signup"
              className="font-mono border-2 border-gray-800 px-3 py-1 hover:bg-gray-200"
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="max-w-6xl mx-auto p-8">
        <Outlet />
      </main>
    </div>
  );
}
