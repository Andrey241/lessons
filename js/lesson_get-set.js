// const persone = {
//   name: "andrey",
//   age: 26,

//   get userAge() {
//     return this.age;
//   },

//   set userAge(num) {
//     this.age = num;
//   },
// };

//console.log((persone.userAge = 30));
//console.log((persone.userAge));

//инкапсуляция

// function User(name, age) {
//   this.name = name;
//   let userAge = age;

//   this.say = function () {
//     console.log(`имя ${this.name} возраст ${userAge}`);
//   };

//   this.getAge = function () {
//     return userAge;
//   };

//   this.setAge = function (age) {
//     if (/\d/.test(age)) {
//       userAge = age;
//     } else {
//       console.log("error age");
//     }
//   };
// }

// const ivan = new User("ivan", 27);

// console.log(ivan.name);
// console.log(ivan.getAge());

// // ivan.userAge = 100;
// // ivan.name = "valli";
// // ivan.say();

// ivan.setAge(30);
// ivan.setAge("aaa");
// console.log(ivan.getAge());
// ivan.say();

class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  surname = "Petr";

  say() {
    console.log(`имя ${this.name} surname ${this.surname}возраст ${this._age}`);
  }

  get age() {
    return this._age;
  }

  set age(age) {
    if (/\d/.test(age)) {
      this._age = age;
    } else {
      console.log("error age");
    }
  }
}

const ivan = new User("ivan", 27);
console.log(ivan.age);
ivan.age = 99;
console.log(ivan.age);
ivan.say();
