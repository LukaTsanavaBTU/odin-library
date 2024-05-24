const main = document.querySelector("main");
const dialog = document.querySelector("dialog");
const dialogClose = dialog.querySelector("#dialog-close");
const dialogSubmit = dialog.querySelector("button");
const titleInput = dialog.querySelector("#title");
const authorInput = dialog.querySelector("#author");
const dateInput = dialog.querySelector("#date");
const pagesInput = dialog.querySelector("#pages");
const genreInput = dialog.querySelector("#genre");
const myLibrary = [];


class Book {
  constructor(title, author, date, pages, genre) {
    this.title = title;
    this.author = author;
    this.date = date;
    this.pages = pages;
    this.genre = genre;
  }

  addToLibrary(library) {
    library.push(this);
  }
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
  });

  const addButtoninnerDiv = document.createElement("div");
  addButtoninnerDiv.textContent = "+";
  addButtonDiv.classList.add("non-selectable");

  addButtonDiv.appendChild(addButtoninnerDiv);
  main.appendChild(addButtonDiv);

  for ([bookIndex, book] of library.entries()) {
    const newContainer = document.createElement("div");
    const newImg = document.createElement("img");
    const newInfoDiv = document.createElement("div");
    const newTitle = document.createElement("h2")
    const newAuthorSpan = document.createElement("span");
    const newDateSpan = document.createElement("span");
    const newPagesSpan = document.createElement("span");
    const deleteBookDiv = document.createElement("div");
  
    newImg.setAttribute("src", "https://m.media-amazon.com/images/I/81C+pXJfbdL._AC_UF1000,1000_QL80_DpWeblab_.jpg");

    newContainer.classList.add("book-container");
    newAuthorSpan.classList.add("book-author");
    newDateSpan.classList.add("book-date");
    newPagesSpan.classList.add("book-pages");
    deleteBookDiv.classList.add("delete-book", "non-selectable", "disable");

    newContainer.setAttribute("data-index", bookIndex)
    newContainer.setAttribute("data-title", book.title)
  
    newTitle.textContent = book.title;
    newAuthorSpan.textContent = book.author;
    newDateSpan.textContent = book.date;
    newPagesSpan.textContent = book.pages;
    deleteBookDiv.textContent = "X";

    newContainer.addEventListener("mouseenter", (e) => {
      deleteBookDiv.classList.remove("disable");
    });

    newContainer.addEventListener("mouseleave", (e) => {
      deleteBookDiv.classList.add("disable");
    });

    deleteBookDiv.addEventListener("click", (e) => {
      if (confirm(`Do you wish to remove ${newContainer.getAttribute("data-title")} from the library?`)) {
        myLibrary.splice(newContainer.getAttribute("data-index"), 1);
        drawBooks(myLibrary);
      }
    });
  
    newInfoDiv.appendChild(newTitle);
    newInfoDiv.appendChild(newAuthorSpan);
    newInfoDiv.appendChild(newDateSpan);
    newInfoDiv.appendChild(newPagesSpan);
    newContainer.appendChild(deleteBookDiv);
    newContainer.appendChild(newImg);
    newContainer.appendChild(newInfoDiv);
    main.appendChild(newContainer);
  }
}


dialogClose.addEventListener("click", (e) => {
  dialog.close();
});


dialogSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if ([titleInput, authorInput, dateInput, pagesInput, genreInput].every((input) => input.reportValidity())) {
    newTitle = titleInput.value;
    newAuthor = authorInput.value;
    newDate = dateInput.value;
    newPages = pagesInput.value;
    newGenre = genreInput.value;
    (new Book(newTitle, newAuthor, newDate, `${newPages} pages`, newGenre)).addToLibrary(myLibrary);
    drawBooks(myLibrary);
    dialog.close();
  }
});


(new Book("Metro 2032", "Dmitry Glukhovsky", "18-03-2010", "458 Pages", "Thriller")).addToLibrary(myLibrary);
(new Book("Metro 2033", "Dmitry Glukhovsky", "18-03-2010", "458 Pages", "Thriller")).addToLibrary(myLibrary);
(new Book("Metro 2034", "Dmitry Glukhovsky", "18-03-2010", "458 Pages", "Thriller")).addToLibrary(myLibrary);
(new Book("Metro 2035", "Dmitry Glukhovsky", "18-03-2010", "458 Pages", "Thriller")).addToLibrary(myLibrary);

drawBooks(myLibrary);