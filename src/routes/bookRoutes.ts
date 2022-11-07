import express from "express";
import {
  getBooks,
  createBooks,
  updateBook,
  deleteBook,
  getBookById,
} from "../controller/books";

const router = express.Router();

router.get("/books", getBooks);
router.get("/books/:id", getBookById);
router.post("/books", createBooks);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);
export default router;
