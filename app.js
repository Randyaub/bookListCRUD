const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
require("dotenv").config();

const app = express();

//middlewares
app.use(morgan("dev"));
app.use(helmet());

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
