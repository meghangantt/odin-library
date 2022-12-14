const libraryDisplay = document.querySelector('.library');

const newBookBtn = document.querySelector('.new-book-btn');

const submitFormBtn = document.querySelector('.submit-btn');

const inputForm = document.querySelector('.input-form');
    inputForm.addEventListener('submit', submitForm);

const formContainer = document.getElementById('form-container');

let myLibrary = [];

function Book(author, title, pages, read, isOnDisplay = false) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.isOnDisplay = isOnDisplay;
}

function addBookToLibrary() {
    const newBook = new Book(document.getElementById("author").value, document.getElementById("title").value,
        document.getElementById("pages").value, document.getElementById("read").checked);
    myLibrary.push(newBook);
    libraryDisplay.appendChild(createCard(newBook));
}

function createCard(book) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add(`${myLibrary.indexOf(book)}`);
    card.textContent = `${book.title} by ${book.author}, ${book.pages} pages. ${book.read ? 'Read' : 'Unread'}.`;
    card.appendChild(createDltBtn(book));
    card.appendChild(createReadTgl(book, card));
    return card;
}

function createDltBtn(book) {
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.textContent = 'Remove from Library';
    deleteBtn.addEventListener('click', function() {
        myLibrary.splice(myLibrary.indexOf(book), 1);
        libraryDisplay.removeChild(deleteBtn.parentElement);
    });
    return deleteBtn;
}

function createReadTgl(book, card) {
    const readToggle = document.createElement('button');
    readToggle.classList.add('readToggle');
    readToggle.textContent = book.read ? 'Change to unread' : 'Change to read';
    readToggle.addEventListener('click', function() {
        const newBook = new Book(book.author, book.title, book.pages, book.read ? false : true);
        libraryDisplay.insertBefore(createCard(newBook), card);
        libraryDisplay.removeChild(card);
        myLibrary.splice(myLibrary.indexOf(book), 1, newBook);
    })
    return readToggle;
}

function submitForm(e) {
    e.preventDefault();
    closeTheForm();
    addBookToLibrary();
    inputForm.reset();
}

function closeTheForm() {
    formContainer.style.display = "none";
}

function openTheForm() {
    formContainer.style.display = "flex";
}
