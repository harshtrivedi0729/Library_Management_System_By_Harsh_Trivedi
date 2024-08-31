class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    borrowBook(isbn) {
        const book = this.findBookByIsbn(isbn);
        if (book) {
          book.borrowBook();
        } else {
          throw new Error('Book not found');
        }
      }
    
      returnBook(isbn) {
        const book = this.findBookByIsbn(isbn);
        if (book) {
          book.returnBook();
        } else {
          throw new Error('Book not found');
        }
      }
  }
  
  module.exports = Library;
  