"use strict";

//new RegExp('pattern', 'flags');
// /pattern/f

//const ans = prompt("введите ваше имя");

let reg = /n/gi;

//console.log(ans.search(reg));
//console.log(ans.match(reg));

//замена символов
//const pass = prompt("password");

//console.log(pass.replace(/./g, "*"));

// console.log("12-12-12".replace(/-/g, ":::::"));

//поиск совпадений
// const ans = prompt("your name");

// console.log(reg.test(ans));
// reg = /\d/gi;
// const ans = prompt("your number");

// console.log(ans.match(reg));

// const str = "my name is r2d2";

// console.log(str.match(/\w\d\w\d/i));

let str = "500px";

str = str.replace(/\D/g, "");

console.log(str);
