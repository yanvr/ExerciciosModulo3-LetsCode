class BookLists {
  constructor() {
    this.allBooks = [];
    this.numberOfReadBooks;
    this.numberOfUnreadBooks;
    this.nextBookToRead;
    this.currentBookToRead;
    this.lastBookToRead;
  }

  listBooks() {
    return this.allBooks;
  }

  get numberOfReadBooks() {
    return this.allBooks.filter((book) => book.hasRead).length;
  }

  get numberOfUnreadBooks() {
    return this.allBooks.filter((book) => !book.hasRead).length;
  }

  readBooks() {
    const readBooks = this.allBooks.filter((book) => book.hasRead);
    return readBooks;
  }

  unreadBooks() {
    const unreadBooks = this.allBooks.filter((book) => !book.hasRead);
    return unreadBooks;
  }

  setCurrentBookToRead(title) {
    if (this.currentBookToRead != undefined) {
      return "You already reading a book, try to finish to start other";
    }
    for (const book of this.allBooks) {
      if (book.title === title) {
        this.currentBookToRead = book;
        return;
      }
    }
    return "The Book was not found";
  }

  finishCurrentBook() {
    if (this.currentBookToRead === undefined) {
      return "You don't have a current book";
    }
    for (const book of this.allBooks) {
      if (book === this.currentBookToRead) {
        book.hasRead = true;
        this.lastBookToRead = book;
        this.currentBookToRead = undefined;
        this.nextBookToRead = this.allBooks.find((book) => !book.hasRead);
      }
    }
  }

  addBook(title, genre, author, hasRead) {
    const newBook = new Book(title, genre, author, hasRead);
    if (this.allBooks.includes(newBook)) {
      return "The Book already added, try add other book";
    }
    this.allBooks = [...this.allBooks, newBook];
  }

  getBookBy(bookAtribute, userEntries) {
    const entriesToUpper = userEntries.toUpperCase();
    const filterBooks = this.allBooks.filter(
      (book) => book[bookAtribute].toUpperCase() === entriesToUpper
    );
    return filterBooks.length > 0
      ? filterBooks
      : `No book by this ${bookAtribute} was found`;
  }

  getReadingSuggestions() {
    if (this.nextBookToRead === undefined) {
      return "We don't have none suggestions for you, try again later";
    }
    return `We find a new book for you read, 
            how about reading ${this.nextBookToRead}`;
  }
}

class Book {
  constructor(title, genre, author, hasRead) {
    this.title = title || "Unknown title";
    this.genre = genre || "Unknown genre";
    this.author = author || "Unknown author";
    this.hasRead = hasRead || false;
    this.readDate = this.hasRead ? new Date(Date.now()) : "No read date";
  }
}
