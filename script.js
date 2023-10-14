const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
    this.toggleReadStatus = function () {
        this.read = this.read === 'Read' ? 'Not read yet' : 'Read';
    };
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
    displayBooks();
}

function displayBooks() {
    const displayArea = document.getElementById('bookDisplay');
    displayArea.innerHTML = "";
    myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        card.classList.add('book-card');
        card.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>
            <button class="toggle-read-button ${book.read === 'Read' ? 'read' : ''}"
                    data-index="${index}">
                ${book.read}
            </button>
            </p>
            <p><button id="sters" data-index="${index}">Remove book</button></p>
        `;
        card.querySelector('#sters').addEventListener('click', () => removeBook(index));
        card.querySelector('.toggle-read-button').addEventListener('click', () => {
            book.toggleReadStatus();
            displayBooks();
        });
        displayArea.appendChild(card);
    })
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

myLibrary.push(new Book('The Hobbit', 'J.R.R Tolkien', '295', 'Not read yet'));
myLibrary.push(new Book('To Kill a Mockingbird', 'Harper Lee', '281', 'Read'));

displayBooks();
console.log(myLibrary);

const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const confirmBtn = favDialog.querySelector("#confirmBtn");
const formular = document.querySelector("form");

showButton.addEventListener("click", () => {
    favDialog.showModal();
})

confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.getElementById("titlu").value;
    const author = document.getElementById("autor").value;
    const pages = document.getElementById("pagini").value;
    const read = document.getElementById("citit").checked ? "Read" : "Not read yet";
    addBookToLibrary(title, author, pages, read);
    formular.reset();
    favDialog.close();
})
