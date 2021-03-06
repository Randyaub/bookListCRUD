const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const booksRouter = require("./api/routes/books");
require("dotenv").config();

const app = express();

//middlewares
app.use(cors({ origin: "http://localhost:3000" }));
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());

//routes
app.use("/api/books", booksRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the books api" });
});

app.get("*", (req, res) => {
  res.status(404).json({ message: "Resource not found" });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
