const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const booksRouter = require("./api/routes/books");
require("dotenv").config();

const app = express();

//middlewares
app.use(morgan("dev"));
app.use(helmet());

//routes
app.use("/books", booksRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome" });
});

app.get("*", (req, res) => {
  res.status(404).json({ message: "Resource not found" });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
