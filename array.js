const lodash = require("lodash");
const fs = require("fs");
const personalDetails = [
  {
    name: "kevin",
    age: 27
  },
  {
    name: "said",
    age: 28
  },
  {
    name: "john",
    age: 22
  },
  {
    name: "tony",
    age: 30
  }
];
const people = lodash.map(personalDetails, person => {
  console.log(person);
});
const descAge = lodash.orderBy(personalDetails, ["age"], ["desc"]);
console.log(descAge);

const youngestPeople = lodash.minBy(personalDetails, person => {
  return person.age;
});
console.log(youngestPeople);

const oldestPeople = lodash.maxBy(personalDetails, people => {
  return people.age;
});
console.log(oldestPeople);
const removeOldestPeople = lodash.remove(personalDetails, oldestPeople);
console.log(personalDetails);

const newPersonalDetails = personalDetails.push(
  {
    name: "Pratik",
    age: 27
  },
  {
    name: "Sahid",
    age: 28
  },
  {
    name: "Pawan",
    age: 22
  },
  {
    name: "Rony",
    age: 30
  }
);
console.log(personalDetails);
const groupByAge = lodash.groupBy(personalDetails, "age");
console.log(groupByAge);

personalDetails.forEach(element => {
  fs.appendFile(
    "people.txt",
    element.name + " " + "is" + " " + element.age +'\n',
    function(err) {
      if (err) throw err;
    }
  );
});
