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
    displayBooks();
}


function displayBooks() {
    myLibrary.forEach((book) => {
        if (!book.isOnDisplay) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.classList.add(`${myLibrary.indexOf(book)}`);
            card.textContent = `${book.title} by ${book.author}, ${book.pages} pages. ${book.read ? 'Read' : 'Unread'}.`;

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('deleteBtn');
            deleteBtn.textContent = 'Remove from Library';
            deleteBtn.addEventListener('click', removeBookFromLibrary);

            card.appendChild(deleteBtn);
            libraryDisplay.appendChild(card);
            book.isOnDisplay = true;
            
            function removeBookFromLibrary() {
                for (let i = 0; i < myLibrary.length; i++) {
                    if (`${i}` in deleteBtn.parentElement.classList) {
                        myLibrary.splice(i, 1);
                        libraryDisplay.removeChild(deleteBtn.parentElement);
                    }
                }
                
            }
        }
    })
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
