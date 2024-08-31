const Book = require('../src/Book');

describe('Book', () => {
  let book;

  beforeEach(() => {
    book = new Book('123', 'Effective JavaScript', 'David Herman', 2012);
  });

  test('should create a book with correct properties', () => {
    expect(book.isbn).toBe('123');
    expect(book.title).toBe('Effective JavaScript');
    expect(book.author).toBe('David Herman');
    expect(book.publicationYear).toBe(2012);
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
