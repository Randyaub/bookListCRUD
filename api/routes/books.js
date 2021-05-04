const express = require("express");
const router = express.Router();
const {
  getBooks,
  getSpecificBook,
  createBook,
  deleteBook,
  updateBook,
} = require("../controllers/books");

router.get("/", getBooks);
router.get("/:id", getSpecificBook);
router.post("/", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
