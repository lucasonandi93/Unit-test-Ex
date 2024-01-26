type Book = {
  title: string;
  author: string;
  available: boolean; 
};

export class BookCollection {
  private books: Book[] = [];

  addBook(book: Book): void {
    if (this.books.some((b) => b.title === book.title)) {
      throw new Error('Book with the same title already exists.');
    }
    this.books.push({ ...book, available: true }); // Set book as available by default
  }

  removeBook(title: string): void {
    this.books = this.books.filter((book) => book.title !== title);
  }

  borrowBook(title: string): void {
    const bookIndex = this.books.findIndex((b) => b.title === title);

    if (bookIndex === -1) {
      throw new Error('Book with the specified title not found.');
    }

    if (!this.books[bookIndex].available) {
      throw new Error('Book is not available for borrowing.');
    }

    this.books[bookIndex].available = false;
  }

  returnBook(title: string): void {
    const bookIndex = this.books.findIndex((b) => b.title === title);

    if (bookIndex === -1) {
      throw new Error('Book with the specified title not found.');
    }

    if (this.books[bookIndex].available) {
      throw new Error('Book is already available; cannot be returned.');
    }

    this.books[bookIndex].available = true;
  }

  findBookByTitle(title: string): Book {
    const book = this.books.find((b) => b.title === title);

    if (!book) {
      throw new Error('Book with the specified title not found.');
    }

    return book;
  }

  findBooksByAuthor(author: string): Book[] {
    const books = this.books.filter((b) => b.author === author);
    return books;
  }
}
// your software must envolve and you most add a feauture that use an API to provide average price of a book by contry in a version 3 of you software
// without affecting the version 2
// write test to mock this external API

// you can borrow some books by providing the title you want to borrow
// a book must have a property 'available' to know if we can borrow it 
// if i return a book after borrowing it, it becomes available
// you can rate the book you borrow 