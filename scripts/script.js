const main = document.querySelector("main");
const dialog = document.querySelector("dialog");
const dialogClose = dialog.querySelector("#dialog-close");
const myLibrary = [];


function Book(title, author, date, pages, genre) {
  this.title = title;
  this.author = author;
  this.date = date;
  this.pages = pages;
  this.genre = genre;
}


function addBookToLibrary(title, author, date, pages, genre) {
  let newBook = new Book(title, author, date, pages, genre);
  myLibrary.push(newBook);

}


function drawBooks(library) {
  main.innerHTML = "";

  const addButtonDiv = document.createElement("div");
  addButtonDiv.classList.add("book-container");
  addButtonDiv.addEventListener("click", (e) => {
    dialog.showModal();
    // addBookToLibrary("Metro 2033", "Dmitry Glukhovsky", "18 March 2010", "458 Pages", "Paperback");
    // drawBooks(myLibrary);
  });

  const addButtoninnerDiv = document.createElement("div");
  addButtoninnerDiv.textContent = "+";
  addButtonDiv.classList.add("non-selectable");

  addButtonDiv.appendChild(addButtoninnerDiv);
  main.appendChild(addButtonDiv);

  for (book of library) {
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
  
    newTitle.textContent = book.title;
    newAuthorSpan.textContent = book.author;
    newDateSpan.textContent = book.date;
    newPagesSpan.textContent = book.pages;
  
    newInfoDiv.appendChild(newTitle);
    newInfoDiv.appendChild(newAuthorSpan);
    newInfoDiv.appendChild(newDateSpan);
    newInfoDiv.appendChild(newPagesSpan);
    newContainer.appendChild(newImg);
    newContainer.appendChild(newInfoDiv);
    main.appendChild(newContainer);
  }
}


dialogClose.addEventListener("click", (e) => {
  dialog.close();
});


addBookToLibrary("Metro 2033", "Dmitry Glukhovsky", "18 March 2010", "458 Pages", "Paperback");
addBookToLibrary("Metro 2033", "Dmitry Glukhovsky", "18 March 2010", "458 Pages", "Paperback");
addBookToLibrary("Metro 2033", "Dmitry Glukhovsky", "18 March 2010", "458 Pages", "Paperback");
addBookToLibrary("Metro 2033", "Dmitry Glukhovsky", "18 March 2010", "458 Pages", "Paperback");

drawBooks(myLibrary);