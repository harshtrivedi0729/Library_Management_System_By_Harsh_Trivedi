class Library {

    // Create Library Class Constructor
    constructor() {
      this.books = [];
    }
  
    // Create Add Book Feature Function
    addBook(book) {
      this.books.push(book);
    }
  
    // Create Borrow Book Feature Function
    borrowBook(isbn) {
        const book = this.findBookByIsbn(isbn);
        if (book) {
          book.borrowBook();
        } else {
          throw new Error('Book not found');
        }
      }
    
      // Create Return Book Feature Function
      returnBook(isbn) {
        const book = this.findBookByIsbn(isbn);
        if (book) {
          book.returnBook();
        } else {
          throw new Error('Book not found');
        }
      }

      // Create Available Book Feature Function
      viewAvailableBooks() {
        return this.books.filter(book => book.isAvailable);
      }
    
      // Create Find Book Feature Function
      findBookByIsbn(isbn) {
        return this.books.find(book => book.isbn === isbn);
      }
  }
  
  module.exports = Library;