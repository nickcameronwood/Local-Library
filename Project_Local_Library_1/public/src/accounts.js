function findAccountById(accounts, id) {
let accountId = accounts.find((account) => (account.id === id));
return accountId;
}

function sortAccountsByLastName(accounts) {
let results = accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1));
return results;
}


function getTotalNumberOfBorrows(account, books) {
let accountId = account.id;
let borrowsId = [];
for (let i = 0; i < books.length; i++){
const book = books[i].borrows;
for (let j = 0; j < book.length; j++){
let newId = book[j].id;borrowsId.push(newId);
}
}
let idMatch = borrowsId.filter((matches) => matches === accountId);
return idMatch.length;
}


function getBooksPossessedByAccount(account, books, authors) {
const newBooks= books.filter((book)=>{
const borrowed = book.borrows[0];
return !borrowed.returned && borrowed.id === account.id;})
const currentBorrows = newBooks.map((book)=>{
const auth = authors.find((author) => author.id === book.authorId)
console.log(auth)
return {...book, author: auth}
});
return currentBorrows;
}



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
