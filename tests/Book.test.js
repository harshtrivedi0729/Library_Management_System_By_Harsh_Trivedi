const Book = require('../src/Book');

describe('Book', () => {
  let book;

  beforeEach(() => {
    book = new Book('123', 'Rich Dad Poor Dad', 'Robert T. Kiyosaki', 1997);
  });

  test('should create a book with correct properties', () => {
    expect(book.isbn).toBe('123');
    expect(book.title).toBe('Rich Dad Poor Dad');
    expect(book.author).toBe('Robert T. Kiyosaki');
    expect(book.publicationYear).toBe(1997);
    expect(book.isAvailable).toBe(true);
  });

  test('should allow borrowing a book if it is available', () => {
    book.borrowBook();
    expect(book.isAvailable).toBe(false);
  });

  test('should not allow borrowing a book if it is already borrowed', () => {
    book.borrowBook();
    expect(() => book.borrowBook()).toThrow('Book is already borrowed');
  });

  test('should allow returning a borrowed book', () => {
    book.borrowBook();
    book.returnBook();
    expect(book.isAvailable).toBe(true);
  });
  
});
