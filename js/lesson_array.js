// const array = ["ivan", "andrey", "samson", "vorfolomeey"];

// // array.filter((item, index, array) => {
// //   item.length >= 5 ? short.push(item) : console.log(item);
// // });

// const short = array.filter((item) => {
//   return item.length >= 5;
// });
// console.log(short);

// const answers = ["Some", "daDa", "inForMation"];

// const result = answers.map((item, index, array) => {
//   return item.toLowerCase();
// });

// console.log(result);

// let reduce = ["Some", "daDa", "inForMation"];

// reduce = reduce.map((item, index, array) => {
//   return item.toUpperCase();
// });

// console.log(reduce);

// const arr = [1, 2, 3, 4, 5, 6, 7];

// const arr2 = arr.reduce(function (pV, item, index, array) {
//   return (pV[index] = array[index]);
// }, []);
// console.log(arr2);

// const str = ["hello ", "world ", "im ", "glade ", "to ", "see ", "you "];

// const str2 = str.reduce((pV, item) => {
//   return pV + item;
// });
// console.log(str2);

// const obj = {
//   ivan: "persone",
//   ivan2: "persone",
//   ivan3: "persone",
//   ivan4: "personepersone",
//   ivan5: "personepersone",
// };

// console.log(Object.keys(obj));

// const newArr = Object.entries(obj)
//   .filter((item) => item[1] === "persone")
//   .map((item, index, array) => item[0]);
// console.log(newArr);
// const films = [
//   {
//     name: "Titanic",
//     rating: 9,
//   },
//   {
//     name: "Die hard 5",
//     rating: 5,
//   },
//   {
//     name: "Matrix",
//     rating: 8,
//   },
//   {
//     name: "Some bad film",
//     rating: 4,
//   },
// ];

// function showGoodFilms(arr) {
//return arr.filter((item) => item["rating"] >= 8);
//   return arr.reduce(
//     (acc, curr) => `${typeof acc === "object" ? acc.name : acc}, ${curr.name}`
//   );
//   return arr.map((item, index, array) => {
//     item.id = index;
//     return item;
//   });
// }
// const id = showGoodFilms(films);
// function checkFilms(arr) {
//   return arr.every((item) => (item.id || item.id === 0 ? true : false));
// }
// console.log(checkFilms(id));
// function showListOfFilms(arr) {}

// function setFilmsIds(arr) {}

// const tranformedArray = setFilmsIds(films);

// function checkFilms(arr) {}

const funds = [
  { amount: -1400 },
  { amount: 2400 },
  { amount: -1000 },
  { amount: 500 },
  { amount: 10400 },
  { amount: -11400 },
];

const getPositiveIncomeAmount = (data) => {
  return data
    .filter((item) => item.amount > 0)
    .reduce((pv, item) => {
      return (pv += item.amount);
    }, 0);
};

console.log(getPositiveIncomeAmount(funds));
const getTotalIncomeAmount = (data) => {
  //   return data.some((item) => item.amount < 0)
  //     ? data.reduce((acc, curr) => acc + curr.amount, 0)
  //     : getPositiveIncomeAmount(data);

  return data.some((item) => item.amount < 0)
    ? data.reduce((pv, item) => (pv += item.amount), 0)
    : getPositiveIncomeAmount(data);
};
console.log(getTotalIncomeAmount(funds));
