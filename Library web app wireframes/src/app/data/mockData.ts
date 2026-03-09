export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  available: boolean;
}

export const mockBooks: Book[] = [
  {
    id: "1",
    title: "The Great Adventure",
    author: "John Smith",
    description: "An epic tale of exploration and discovery in uncharted lands. Follow the journey of brave explorers as they navigate through mysterious territories.",
    available: true,
  },
  {
    id: "2",
    title: "Mystery of the Old House",
    author: "Jane Doe",
    description: "A suspenseful mystery that will keep you guessing until the very end. Dark secrets lurk within the walls of an abandoned mansion.",
    available: false,
  },
  {
    id: "3",
    title: "Learning JavaScript",
    author: "Tech Author",
    description: "A comprehensive guide to mastering JavaScript programming from basics to advanced concepts. Perfect for beginners and experienced developers.",
    available: true,
  },
  {
    id: "4",
    title: "The Art of Cooking",
    author: "Chef Master",
    description: "Discover the secrets of world-class cuisine with step-by-step recipes and cooking techniques from professional chefs around the globe.",
    available: true,
  },
  {
    id: "5",
    title: "Space Exploration",
    author: "Science Writer",
    description: "Journey through the cosmos and learn about the latest discoveries in astronomy, space travel, and the search for extraterrestrial life.",
    available: false,
  },
  {
    id: "6",
    title: "Ancient Civilizations",
    author: "History Prof",
    description: "Explore the rise and fall of great empires, their cultures, achievements, and lasting impact on modern society.",
    available: true,
  },
];

let borrowedBooks: Book[] = [];

export const getBorrowedBooks = () => borrowedBooks;

export const borrowBook = (book: Book) => {
  if (!borrowedBooks.find((b) => b.id === book.id)) {
    borrowedBooks.push(book);
  }
};

export const returnBook = (bookId: string) => {
  borrowedBooks = borrowedBooks.filter((b) => b.id !== bookId);
};
