import { useParams, useNavigate } from "react-router";
import { mockBooks, borrowBook } from "../data/mockData";
import { ArrowLeft } from "lucide-react";

export function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = mockBooks.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="border-2 border-gray-800 p-8 bg-white">
        <p className="font-mono">[BOOK NOT FOUND]</p>
      </div>
    );
  }

  const handleBorrow = () => {
    borrowBook(book);
    navigate(`/borrow-confirmation/${book.id}`);
  };

  return (
    <div className="space-y-8">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="border-2 border-gray-800 px-4 py-2 font-mono hover:bg-gray-200 flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        BACK TO SEARCH
      </button>

      {/* Wireframe Title */}
      <div className="border-2 border-gray-800 p-4 bg-white">
        <h1 className="text-2xl font-mono">BOOK DETAILS</h1>
      </div>

      {/* Book Details Wireframe */}
      <div className="border-2 border-gray-800 p-8 bg-white space-y-6">
        {/* Book Cover Placeholder */}
        <div className="border-2 border-gray-400 bg-gray-100 h-64 flex items-center justify-center">
          <p className="font-mono text-gray-500">[BOOK COVER IMAGE]</p>
        </div>

        {/* Book Info */}
        <div className="space-y-4">
          <div>
            <label className="font-mono text-sm text-gray-600">[TITLE]</label>
            <h2 className="font-mono text-2xl mt-1">{book.title}</h2>
          </div>

          <div>
            <label className="font-mono text-sm text-gray-600">[AUTHOR]</label>
            <p className="font-mono text-lg mt-1">{book.author}</p>
          </div>

          <div>
            <label className="font-mono text-sm text-gray-600">[DESCRIPTION]</label>
            <p className="font-mono mt-1">{book.description}</p>
          </div>

          <div>
            <label className="font-mono text-sm text-gray-600">[AVAILABILITY STATUS]</label>
            <div className="mt-2">
              <span
                className={
                  book.available
                    ? "border-2 border-green-600 px-3 py-2 bg-green-100 font-mono inline-block"
                    : "border-2 border-red-600 px-3 py-2 bg-red-100 font-mono inline-block"
                }
              >
                {book.available ? "✓ AVAILABLE" : "✗ CURRENTLY UNAVAILABLE"}
              </span>
            </div>
          </div>
        </div>

        {/* Borrow Button */}
        <div className="pt-4">
          <button
            onClick={handleBorrow}
            disabled={!book.available}
            className={`border-2 border-gray-800 px-8 py-4 font-mono text-lg ${
              book.available
                ? "hover:bg-gray-200"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {book.available ? "[BORROW THIS BOOK]" : "[UNAVAILABLE]"}
          </button>
        </div>
      </div>
    </div>
  );
}
