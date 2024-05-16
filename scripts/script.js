const main = document.querySelector("main");
const myLibrary = [];

function Book(title, author, date, pages, format) {
  this.title = title;
  this.author = author;
  this.date = date;
  this.pages = pages;
  this.format = format;
}

function addBookToLibrary(title, author, date, pages, format) {
  let newBook = new Book(title, author, date, pages, format);
  myLibrary.push(newBook);

  const newContainer = document.createElement("div");
  const newImg = document.createElement("img");
  const newInfoDiv = document.createElement("div");
  const newTitle = document.createElement("h2")
  const newAuthorSpan = document.createElement("span");
  const newDateSpan = document.createElement("span");
  const newPagesSpan = document.createElement("span");

  newImg.setAttribute("src", "https://m.media-amazon.com/images/I/81C+pXJfbdL._AC_UF1000,1000_QL80_DpWeblab_.jpg");

  newContainer.classList.add("book-container");
  newAuthorSpan.classList.add("book-author");
  newDateSpan.classList.add("book-date");
  newPagesSpan.classList.add("book-pages");

  newTitle.textContent = newBook.title;
  newAuthorSpan.textContent = newBook.author;
  newDateSpan.textContent = newBook.date;
  newPagesSpan.textContent = newBook.pages;

  newInfoDiv.appendChild(newTitle);
  newInfoDiv.appendChild(newAuthorSpan);
  newInfoDiv.appendChild(newDateSpan);
  newInfoDiv.appendChild(newPagesSpan);
  newContainer.appendChild(newImg);
  newContainer.appendChild(newInfoDiv);
  main.appendChild(newContainer);
}