class Book {

    // Crreate Constructor for Book Class
    constructor(isbn, title, author, publicationYear) {
      this.isbn = isbn;
      this.title = title;
      this.author = author;
      this.publicationYear = publicationYear;
      this.isAvailable = true;
    }
  
    // Create Borrow Book Function
    borrowBook() {
      if (this.isAvailable) {
        this.isAvailable = false;
      } else {
        throw new Error('Book is already borrowed');
      }
    }
  
    returnBook() {
      this.isAvailable = true;
    }
  }
  
  module.exports = Book;