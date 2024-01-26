import { BookCollection } from '../app/bookCollection';

describe('BookCollection', () => {
    let bookCollection: BookCollection;
  
    beforeEach(() => {
      bookCollection = new BookCollection();
    });
  
    test('should add a book to the collection', () => {
      const book = {title: 'Book 1', author: "Author 1", available: true };
      bookCollection.addBook(book);
      expect(bookCollection.findBookByTitle('Book 1')).toEqual(book);
    });
  
    test('should throw error when adding an identical book', () => {
      const book = {title: 'Book 1', author: "Author 1", available: true };
      bookCollection.addBook(book);
      expect(() => bookCollection.addBook(book)).toThrow('Book with the same title already exists.');
    });
  
    test('should remove a book from the collection by its title', () => {
      const book = {title: 'Book 1', author: "Author 1", available: true };
      bookCollection.addBook(book);
      bookCollection.removeBook('Book 1');
      expect(() => bookCollection.findBookByTitle('Book 1')).toThrow('Book with the specified title not found.');
    });
  
    test('should find a book by its title', () => {
      const book = {title: 'Book 1', author: "Author 1", available: true };
      bookCollection.addBook(book);
      expect(bookCollection.findBookByTitle('Book 1')).toEqual(book);
    });
  
    test('should throw error when finding a non-existent book by title', () => {
      expect(() => bookCollection.findBookByTitle('Non-existent Book')).toThrow(
        'Book with the specified title not found.'
      );
    });
  
    test('should find books by author', () => {
      const book1 = { title: 'Book 1', author: 'Author 1' , available: true};
      const book2 = { title: 'Book 2', author: 'Author 1' , available: true};
      bookCollection.addBook(book1);
      bookCollection.addBook(book2);
      const booksByAuthor = bookCollection.findBooksByAuthor('Author 1');
      expect(booksByAuthor).toEqual([book1, book2]);
    });
  
    test('should return an empty array when finding books by non-existent author', () => {
      const booksByAuthor = bookCollection.findBooksByAuthor('Non-existent Author');
      expect(booksByAuthor).toEqual([]);
    });
  });
 