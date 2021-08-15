//new helper function 
function topFive(array) {
  return array.sort((a, b) => a.count < b.count ? 1 : -1).slice(0, 5);
}


function getTotalBooksCount(books) {
  let total = books.length;
    return total;
}

function getTotalAccountsCount(accounts) {
  let total = accounts.length;
    return total;
}

function getBooksBorrowedCount(books) {
  let array = [];
  for (let i = 0; i < books.length; i++){
    if (books[i].borrows[0].returned === false){
      array.push(books[i]);
}
}

let total = array.length;
return total;
}


function getMostCommonGenres(books) {
  let newGenre = books.reduce((count, subject) => {
  const key = subject['genre'];
  if(!count[key]) {
  count[key] = 0
}
count[key] ++;
return count;
},[])

let list = [];
for (let genre in newGenre) {
const count = newGenre[genre];
list.push({name: `${genre}`, count: count});
}  
return topFive(list)
}




function getMostPopularBooks(books) {
let array = [];
books.forEach((book) => array.push({name: book.title, count: book.borrows.length}))
return topFive(array)
}


function getMostPopularAuthors(books, authors) {
array = [];
  for (let author of authors) {
    const fullName = `${author.name.first} ${author.name.last}`;
let count = 0;
  for (let book of books) {
    if (author.id === book.authorId) {
count += book.borrows.length;
}
}
  const result = { name: fullName, count: count};
  array.push(result);
}

return topFive(array)
}




module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
