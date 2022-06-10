const array = ["ivan", "andrey", "samson", "vorfolomeey"];

// array.filter((item, index, array) => {
//   item.length >= 5 ? short.push(item) : console.log(item);
// });

const short = array.filter((item) => {
  return item.length >= 5;
});
console.log(short);

const answers = ["Some", "daDa", "inForMation"];

const result = answers.map((item, index, array) => {
  return item.toLowerCase();
});

console.log(result);

let reduce = ["Some", "daDa", "inForMation"];

reduce = reduce.map((item, index, array) => {
  return item.toUpperCase();
});

console.log(reduce);

const arr = [1, 2, 3, 4, 5, 6, 7];

const arr2 = arr.reduce(function (pV, item, index, array) {
  return (pV[index] = array[index]);
}, []);
console.log(arr2);

const str = ["hello ", "world ", "im ", "glade ", "to ", "see ", "you "];

const str2 = str.reduce((pV, item) => {
  return pV + item;
});
console.log(str2);

const obj = {
  ivan: "persone",
  ivan2: "persone",
  ivan3: "persone",
  ivan4: "personepersone",
  ivan5: "personepersone",
};

console.log(Object.keys(obj));

const newArr = Object.entries(obj)
  .filter((item) => item[1] === "persone")
  .map((item, index, array) => item[0]);
console.log(newArr);
