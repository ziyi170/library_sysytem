import { useState } from "react";
import { Link } from "react-router";
import { mockBooks } from "../data/mockData";
import { Search } from "lucide-react";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = mockBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Wireframe Title */}
      <div className="border-2 border-gray-800 p-4 bg-white">
        <h1 className="text-2xl font-mono">HOME / SEARCH</h1>
      </div>

      {/* Wireframe Search Bar */}
      <div className="border-2 border-gray-800 p-6 bg-white">
        <label className="block font-mono mb-2">SEARCH FOR BOOKS:</label>
        <div className="flex gap-2">
          <div className="flex-1 border-2 border-gray-800 p-3 flex items-center gap-2">
            <Search className="w-5 h-5" />
            <input
              type="text"
              placeholder="Enter book title or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 outline-none font-mono bg-transparent"
            />
          </div>
          <button className="border-2 border-gray-800 px-6 py-3 font-mono hover:bg-gray-200">
            SEARCH
          </button>
        </div>
      </div>

      {/* Wireframe Book List */}
      <div className="space-y-4">
        <div className="border-2 border-gray-800 p-4 bg-white">
          <h2 className="font-mono text-lg">BOOK LIST ({filteredBooks.length} results)</h2>
        </div>

        {filteredBooks.map((book) => (
          <div key={book.id} className="border-2 border-gray-800 p-6 bg-white">
            <div className="grid grid-cols-[1fr_auto] gap-4">
              <div className="space-y-2">
                <h3 className="font-mono text-lg">[TITLE] {book.title}</h3>
                <p className="font-mono text-sm text-gray-600">[AUTHOR] {book.author}</p>
                <div className="font-mono text-sm">
                  [STATUS]{" "}
                  <span
                    className={
                      book.available
                        ? "border-2 border-green-600 px-2 py-1 bg-green-100"
                        : "border-2 border-red-600 px-2 py-1 bg-red-100"
                    }
                  >
                    {book.available ? "AVAILABLE" : "UNAVAILABLE"}
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <Link
                  to={`/book/${book.id}`}
                  className="border-2 border-gray-800 px-4 py-2 font-mono hover:bg-gray-200"
                >
                  VIEW DETAILS →
                </Link>
              </div>
            </div>
          </div>
        ))}

        {filteredBooks.length === 0 && (
          <div className="border-2 border-gray-800 p-8 bg-white text-center">
            <p className="font-mono">[NO BOOKS FOUND]</p>
          </div>
        )}
      </div>
    </div>
  );
}
