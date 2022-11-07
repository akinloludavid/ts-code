import express, { Request, Response } from "express";
const router = express.Router();

router.get("/books/create", (_req: Request, res: Response) => {
  res.render("create", {
    title: "Create a new book",
  });
});

// router.get("/books/update", (_req: Request, res: Response) => {
//   res.render("create", {
//     title: "Create a new book",
//   });
// });

router.get("/", (_req, res) => {
  res.redirect("/b/books");
});

router.get("/create", (_req, res) => {
  res.render("create", {
    title: "Create a book",
  });
});

export default router;
