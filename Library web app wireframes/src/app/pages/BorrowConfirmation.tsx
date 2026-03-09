import { useParams, useNavigate } from "react-router";
import { mockBooks } from "../data/mockData";
import { CheckCircle2 } from "lucide-react";

export function BorrowConfirmation() {
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

  return (
    <div className="space-y-8">
      {/* Wireframe Title */}
      <div className="border-2 border-gray-800 p-4 bg-white">
        <h1 className="text-2xl font-mono">BORROW CONFIRMATION</h1>
      </div>

      {/* Confirmation Message */}
      <div className="border-2 border-gray-800 p-12 bg-white space-y-8">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="border-2 border-green-600 p-6 bg-green-100">
            <CheckCircle2 className="w-16 h-16 text-green-600" />
          </div>
        </div>

        {/* Confirmation Text */}
        <div className="text-center space-y-4">
          <h2 className="font-mono text-xl">[CONFIRMATION MESSAGE]</h2>
          <p className="font-mono text-lg">Successfully borrowed:</p>
          <div className="border-2 border-gray-800 p-4 bg-gray-50 inline-block">
            <p className="font-mono text-xl">"{book.title}"</p>
            <p className="font-mono text-sm text-gray-600 mt-2">by {book.author}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center pt-4">
          <button
            onClick={() => navigate("/")}
            className="border-2 border-gray-800 px-8 py-3 font-mono hover:bg-gray-200"
          >
            ← BACK TO SEARCH
          </button>
          <button
            onClick={() => navigate("/my-books")}
            className="border-2 border-gray-800 px-8 py-3 font-mono hover:bg-gray-200 bg-gray-800 text-white"
          >
            VIEW MY BOOKS →
          </button>
        </div>
      </div>

      {/* Additional Info Box */}
      <div className="border-2 border-gray-400 p-4 bg-gray-100">
        <p className="font-mono text-sm text-gray-600">
          [INFO] Please return the book within 14 days to avoid late fees.
        </p>
      </div>
    </div>
  );
}
