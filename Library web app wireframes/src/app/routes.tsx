import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { BookDetail } from "./pages/BookDetail";
import { BorrowConfirmation } from "./pages/BorrowConfirmation";
import { MyBooks } from "./pages/MyBooks";
import { SignUp } from "./pages/SignUp";
import { Root } from "./pages/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "book/:id", Component: BookDetail },
      { path: "borrow-confirmation/:id", Component: BorrowConfirmation },
      { path: "my-books", Component: MyBooks },
      { path: "signup", Component: SignUp },
    ],
  },
]);
