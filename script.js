const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

const book1 = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'not read yet');
console.log(book1.info());

function addBookToLibrary() {
    let title = prompt("Enter the book title:");
    let author = prompt("Enter the book author:");
    let pages = parseInt(prompt("Enter the number of pages:"));
    let read = prompt("Did you read it?");
    myLibrary.push(new Book(title, author, pages, read));
    displayBooks();
}

function displayBooks() {
    const displayArea = document.getElementById('bookDisplay');
    displayArea.innerHTML = "";
    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('book-card');
        card.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read}</p>
        `;
        displayArea.appendChild(card);
    })
}

myLibrary.push(new Book('The Hobbit', 'J.R.R Tolkien', '295', 'not read yet'));
myLibrary.push(new Book('To Kill a Mockingbird', 'Harper Lee', '281', 'read'));

displayBooks();
addBookToLibrary();
console.log(myLibrary);