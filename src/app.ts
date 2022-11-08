import express from "express";
import bookRoutes from "./routes/bookRoutes";
import bookPages from "./routes/bookPages";
import path from "path";

const app = express();
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.set("views", path.resolve(__dirname, "../src/views"));

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.use("/", bookPages);
app.use("/b", bookRoutes);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("listening on port 8000");
});
