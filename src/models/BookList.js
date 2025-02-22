class BookList {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  getAllBooks() {
    return this.books;
  }

  getBookById(id) {
    console.log('ID buscado:', id);
    console.log('Livros disponíveis:', this.books);

    const book = this.books.find(book => book.id == id);
    if (!book) {
      throw new Error('Book not found');
    }
    return book;
  }

  updateBook(id, updateData) {
    const book = this.getBookById(id);
    Object.assign(book, updateData);
    return book;
  }

  deleteBook(id) {
    this.books = this.books.filter(book => book.id != id);
  }
}

module.exports = BookList;