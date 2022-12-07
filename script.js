const library = document.querySelector('.library');
const newBookBtn = document.querySelector('.new-book-btn');
const submitFormBtn = document.querySelector('.submit-btn');
const inputForm = document.querySelector('.input-form')

let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(e) {
    e.preventDefault();
    const newBook = new Book(document.getElementById("author").value, document.getElementById("title").value, document.getElementById("pages").value, document.getElementById("read").value);
    myLibrary.push(newBook);
    closeTheForm();
    displayBooks();
}

function displayBooks() {
    myLibrary.forEach((book) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = `${book.title} by ${book.author}, ${book.pages} pages. ${book.read ? 'Read' : 'Unread'}.`;
        library.appendChild(card);
    })
}

displayBooks();

function closeTheForm() {
    document.getElementById("input-popup").style.display = "none";
}

function openTheForm() {
    document.getElementById("input-popup").style.display = "block";
}

inputForm.addEventListener("submit", addBookToLibrary);

closeTheForm();