const Library = require('../src/Library');
const Book = require('../src/Book');

describe('Library', () => {
  let library;

  beforeEach(() => {
    library = new Library();
  });

  test('should add a book to the library', () => {
    const book = new Book('123', 'Rich Dad Poor Dad', 'Robert T. Kiyosaki', 1997);
    library.addBook(book);
    expect(library.viewAvailableBooks().length).toBe(1);
    expect(library.viewAvailableBooks()[0].title).toBe('Rich Dad Poor Dad');
  });

  test('should borrow a book from the library', () => {
    const book = new Book('123', 'Rich Dad Poor Dad', 'Robert T. Kiyosaki', 1997);
    library.addBook(book);
    library.borrowBook('123');
    expect(library.viewAvailableBooks().length).toBe(0);
  });

  test('should not allow borrowing a book that is not available', () => {
    const book = new Book('123', 'Rich Dad Poor Dad', 'Robert T. Kiyosaki', 1997);
    library.addBook(book);
    library.borrowBook('123');
    expect(() => library.borrowBook('123')).toThrow('Book is already borrowed');
  });

  test('should return a borrowed book to the library', () => {
    const book = new Book('123', 'Rich Dad Poor Dad', 'Robert T. Kiyosaki', 1997);
    library.addBook(book);
    library.borrowBook('123');
    library.returnBook('123');
    expect(library.viewAvailableBooks().length).toBe(1);
  });

  test('should view all available books in the library', () => {
    const book1 = new Book('123', 'Rich Dad Poor Dad', 'Robert T. Kiyosaki', 1997);
    const book2 = new Book('456', 'The Intelligent Investor', 'Benjamin Graham', 1949);
    library.addBook(book1);
    library.addBook(book2);
    library.borrowBook('123');
    const availableBooks = library.viewAvailableBooks();
    expect(availableBooks.length).toBe(1);
    expect(availableBooks[0].title).toBe('The Intelligent Investor');
  });
  
});
