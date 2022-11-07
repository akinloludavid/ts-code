import { Request, Response } from "express";
import { books as data } from "../data";

export const getBooks = async (_req: Request, res: Response) => {
  try {
    const books = await data;

    res.render("index", {
      books,
      title: "All books!!",
    });
    // res.status(200).json({
    //   data: books,
    // });
  } catch (error: any) {
    return res.status(500).json({
      status: "error",
      error: error.message,
    });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const book = await data.filter((el) => el.id === Number(id))[0];
    res.render("details", {
      book,
      title: book.title,
    });
  } catch (error: any) {
    return res.status(500).json({
      status: "error",
      error: error.message,
    });
  }
};
export const createBooks = async (req: Request, res: Response) => {
  try {
    const { title, author, sales } = req.body;

    if (!title) {
      return res.status(400).json({
        error: "Title is required",
      });
    }
    if (data.includes(title)) {
      return res.status(400).json({
        error: `${title} already exists in the database`,
      });
    }
    data.push({ title, author, sales, id: data.length + 1 });

    res.redirect("/b/books");
    // res.json({
    //   newBook: title,
    //   allBooks: data,
    // });
  } catch (error: any) {
    return res.status(500).json({
      status: "error",
      error: error.message,
    });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const idx = data.findIndex((el) => el.id === Number(id));
    if (idx === -1) {
      return res.status(404).json({
        message: `Book not found`,
        status: "error",
      });
    }
    data.splice(idx, 1, { ...req.body, id });
    // const newData = data.map((el) =>
    //   el.id === Number(id) ? { ...el, title, author, sales } : el
    // );

    res.redirect("/b/books");
  } catch (error: any) {
    return res.status(500).json({
      status: "error",
      error: error.message,
    });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const idx = data.findIndex((el) => el.id === Number(id));
    if (idx === -1) {
      return res.status(404).json({
        message: `Book not found`,
        status: "error",
      });
    }

    data.splice(idx, 1);
    res.json({
      redirect: "/b/books",
    });
  } catch (error: any) {
    return res.status(500).json({
      status: "error",
      error: error.message,
    });
  }
};
