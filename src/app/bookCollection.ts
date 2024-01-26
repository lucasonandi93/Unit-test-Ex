type Book = {
    title: string;
    author: string;
  }
  
  export class BookCollection {
    private books: Book[] = [];
  
    addBook(book: Book): void {
      if (this.books.some((b) => b.title === book.title)) {
        throw new Error('Book with the same title already exists.');
      }
      this.books.push(book);
    }
    removeBook(title: string): void {
      this.books = this.books.filter((book) => book.title !== title);
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
