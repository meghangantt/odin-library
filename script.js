const testBook1 = new Book('Author1', 'Book1', '41');
const testBook2 = new Book('Author2', 'Book2', '60');
const library = document.querySelector('.library');

let myLibrary = [testBook1, testBook2];

function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
}

function addBookToLibrary() {
    const newBook = new Book(author, title, pages);
    myLibrary.push(newBook);
}

function displayBooks() {
    myLibrary.forEach((book) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = `${book.title} by ${book.author}, ${book.pages} pages`;
        library.appendChild(card);
    })
}

displayBooks();