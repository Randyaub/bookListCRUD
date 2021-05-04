const db = require("../../db");

const getBooks = async (req, res) => {
  try {
    const { rows, rowCount } = await db.query("SELECT * FROM books");
    if (rowCount === 0) {
      return res.status(200).json({ message: "No books are in the database" });
    } else {
      res.status(200).json({ books: rows });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "There was an error", error: error.message });
    console.log(error);
  }
};

const getSpecificBook = async (req, res) => {
  const { id } = req.params;
  try {
    const {
      rows,
      rowCount,
    } = await db.query("SELECT * FROM books WHERE book_id = $1", [id]);
    if (rowCount === 0) {
      return res
        .status(200)
        .json({ message: "There does not exist a book with that ID" });
    } else {
      res.status(200).json({ book: rows });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "There was an error", error: error.message });
    console.log(error);
  }
};

const updateBook = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Updating book ${id}` });
};

const deleteBook = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Deleted book ${id}` });
};

module.exports = { getBooks, getSpecificBook, updateBook, deleteBook };
