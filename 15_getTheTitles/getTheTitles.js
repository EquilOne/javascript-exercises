const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

const getTheTitles = function (obj) {
  return obj.map((obj) => obj.title);
};

console.log(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;
