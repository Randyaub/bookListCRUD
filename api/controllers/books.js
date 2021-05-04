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
  try {
    const { id } = req.params;
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

// ADD THE ABILITY TO CHANGE PUBLISHER LATER

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, total_pages, rating, isbn_13, published_date } = req.body;

    const { rows, rowCount } = await db.query(
      `
      UPDATE books SET 
          title = $1, 
          total_pages = $2, 
          rating = $3, 
          isbn_13 = $4, 
          published_date = $5 
      WHERE book_id = $6 RETURNING *
      `,
      [title, total_pages, rating, isbn_13, published_date, id]
    );

    if (rowCount === 0) {
      return res
        .status(200)
        .json({ message: "There does not exist a book with that ID" });
    } else {
      res.status(200).json({
        message: `Book ${id} successfully updated`,
        updated_book: rows,
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "There was an error", error: error.message });
    console.log(error);
  }
};

const deleteBook = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Deleted book ${id}` });
};

module.exports = { getBooks, getSpecificBook, updateBook, deleteBook };
