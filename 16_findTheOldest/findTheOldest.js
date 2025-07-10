const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (arr) {
  const getAge = (person) => {
    if (!person.yearOfDeath) {
      return new Date().getFullYear() - person.yearOfBirth;
    } else {
      return person.yearOfDeath - person.yearOfBirth;
    }
  };

  return arr.reduce((oldest, person) => {
    if (getAge(person) > getAge(oldest)) return person;
    else return oldest;
  });
};

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
