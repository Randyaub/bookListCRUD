const express = require("express");
const router = express.Router();
const {
  getBooks,
  getSpecificBook,
  deleteBook,
  updateBook,
} = require("../controllers/books");

router.get("/", getBooks);
router.get("/:id", getSpecificBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
