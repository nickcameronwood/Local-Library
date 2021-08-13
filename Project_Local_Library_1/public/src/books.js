function findAuthorById(authors, id) {
  let findAuthor = authors.find((author) => (author.id === id));
  return findAuthor;
}

function findBookById(books, id) {
  let findBook = books.find((book) => (book.id === id));
  return findBook;
}

function partitionBooksByBorrowedStatus(books) {
  let not = [];
  let borrowed = [];
  books.forEach((book) => book.borrows[0].returned ? not.push(book) : borrowed.push(book));
  return [borrowed, not]
  }

function getBorrowersForBook(book, accounts) {
  let array = [];
  accounts.map((account)=>{
   book.borrows.find((borrow)=>{
if(borrow.id === account.id){
  account["returned"] = borrow.returned;
  array.push(account)
}
 
})
})
  return array.splice(0, 10);
}



  
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
