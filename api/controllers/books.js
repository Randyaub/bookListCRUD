const getBooks = (req, res) => {
  res.status(200).json({ message: "Displaying all books" });
};

const getSpecificBook = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Returning book ${id}` });
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
