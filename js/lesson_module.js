// let number = 1;

// (function () {
//   let number = 2;
//   console.log(number);
// })();

// console.log(number);

// const user = (function () {
//   const privat = function () {
//     console.log("i am privat");
//   };

//   return {
//     sayhello: privat,
//   };
// })();

// user.sayhello();

function myModule() {
  this.hello = function () {
    console.log("hello");
  };

  this.goodbye = function () {
    console.log("bye");
  };
}

module.exports = myModule;
