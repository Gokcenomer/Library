const btnAddBook = document.querySelector('#btnAddBook');
const cards = document.querySelector('.cards');

let form = document.querySelector('#form');

const status = document.querySelectorAll('.status');
let removeButtons = document.querySelectorAll('.remove');


const title = document.querySelector('#title');
const pages = document.querySelector('#pages');
const author = document.querySelector('#author');
let checkRead = document.querySelector('#checkRead');
const submitBook = document.querySelector('#submitBook');
let bookStatus;
let myLibrary = [];
let formVisibilty = false;
btnAddBook.addEventListener('click' , () =>{
    form.style.display = 'flex';
    btnAddBook.style.display = 'none';
})

form.addEventListener('submit' , (e) => {
e.preventDefault();
addBookToLibrary();
displayBook();
form.style.display = 'none';
btnAddBook.style.display = 'block'
});


function Book(title,pages,author,status) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.status = status;  }
  

function addBookToLibrary() {
  if (checkRead.checked) {
    bookStatus = 'READ';
    
  }
  else{
    bookStatus = 'NOT READ';
  }
  const book = new Book(title.value,pages.value,author.value,bookStatus);
  myLibrary.push(book);
}
let index = 0;
let selectedIndex ;
let parentNode ;
function displayBook(){
  const card = document.createElement('div');
  const bookTitle = document.createElement('div');
  const bookPages = document.createElement('div');
  const bookAuthor = document.createElement('div');
  const bookStatus = document.createElement('button');
  const removeButton = document.createElement('button');
 
  myLibrary.forEach(book => {
    bookTitle.textContent = book.title;
    bookPages.textContent = book.pages;
    bookAuthor.textContent = book.author;
    bookStatus.textContent = book.status;
    removeButton.textContent = 'REMOVE';
    
    card.classList.add('card');
    bookTitle.classList.add('title');
    bookPages.classList.add('pages');
    bookAuthor.classList.add('author');
    if (book.status == 'READ') {
     bookStatus.classList.add('statusRead');
    }  
    else{
      bookStatus.classList.add('status')
    }

    removeButton.classList.add('remove');
    card.setAttribute('index' , index);
    removeButton.addEventListener('click', (e) => {
      selectedIndex = (e.target.getAttribute('index'));
      parentNode = e.target.parentNode;
      try {
        cards.removeChild(parentNode);

      } catch (error) {
        
      }
      
      
    })
    bookStatus.addEventListener('click' ,(e) => {
      if (book.status) {
        bookStatus.textContent = 'NOT READ'
        book.status = !book.status;
        bookStatus.classList.remove('statusRead');
        bookStatus.classList.add('status');
      }
      else{
        bookStatus.textContent = 'READ';
        book.status = !book.status;
        bookStatus.classList.add('statusRead');
        bookStatus.classList.remove('status');
        
      }
      

    })
    card.appendChild(bookTitle);
    card.appendChild(bookPages);
    card.appendChild(bookAuthor);
    card.appendChild(bookStatus);
    card.appendChild(removeButton);

    cards.appendChild(card);
    

  });
  myLibrary.splice((selectedIndex),1);
  index++;
  
  
}


  

  