import { useState } from "react";
import { Link } from "react-router";
import { getBorrowedBooks, returnBook } from "../data/mockData";
import { BookOpen } from "lucide-react";

export function MyBooks() {
  const [borrowedBooks, setBorrowedBooks] = useState(getBorrowedBooks());

  const handleReturn = (bookId: string) => {
    returnBook(bookId);
    setBorrowedBooks(getBorrowedBooks());
  };

  return (
    <div className="space-y-8">
      {/* Wireframe Title */}
      <div className="border-2 border-gray-800 p-4 bg-white">
        <h1 className="text-2xl font-mono">MY BORROWED BOOKS</h1>
      </div>

      {/* Books List */}
      {borrowedBooks.length === 0 ? (
        <div className="border-2 border-gray-800 p-12 bg-white text-center space-y-6">
          <div className="flex justify-center">
            <div className="border-2 border-gray-400 p-6 bg-gray-100">
              <BookOpen className="w-16 h-16 text-gray-400" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="font-mono text-lg">[NO BORROWED BOOKS]</p>
            <p className="font-mono text-sm text-gray-600">
              You haven't borrowed any books yet.
            </p>
          </div>
          <Link
            to="/"
            className="border-2 border-gray-800 px-6 py-3 font-mono hover:bg-gray-200 inline-block"
          >
            BROWSE BOOKS →
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="border-2 border-gray-800 p-4 bg-white">
            <p className="font-mono">
              [TOTAL BORROWED] {borrowedBooks.length}{" "}
              {borrowedBooks.length === 1 ? "book" : "books"}
            </p>
          </div>

          {borrowedBooks.map((book) => (
            <div key={book.id} className="border-2 border-gray-800 p-6 bg-white">
              <div className="grid grid-cols-[1fr_auto] gap-6">
                <div className="space-y-3">
                  <h3 className="font-mono text-lg">[TITLE] {book.title}</h3>
                  <p className="font-mono text-sm text-gray-600">[AUTHOR] {book.author}</p>
                  <div className="border-2 border-blue-600 p-2 bg-blue-50 inline-block">
                    <p className="font-mono text-xs">[DUE DATE] March 23, 2026</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleReturn(book.id)}
                    className="border-2 border-gray-800 px-6 py-3 font-mono hover:bg-gray-200"
                  >
                    [RETURN BOOK]
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Info Box */}
      {borrowedBooks.length > 0 && (
        <div className="border-2 border-gray-400 p-4 bg-gray-100">
          <p className="font-mono text-sm text-gray-600">
            [INFO] Click "RETURN BOOK" when you've finished reading.
          </p>
        </div>
      )}
    </div>
  );
}
