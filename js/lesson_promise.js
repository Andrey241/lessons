"use strict";

console.log("запрос данных ...");

const req = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("подготовка данных ...");

    const product = {
      name: "TV",
      price: 2000,
    };
    resolve(product);
  }, 2000);
});

req.then((product) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      product.status = "order";
      resolve(product);
    }, 2000);
  })
    .then((data) => {
      data.modify = true;
      return data;
    })
    .then((data) => {
      console.log(data);
    })
    .catch(() => {
      console.error("ошибка");
    })
    .finally(() => {
      console.log("финальное");
    });
});

const test = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

Promise.all([test(1000), test(2000)])
  .then(() => console.log("успешно"))
  .catch(() => {
    console.log("ошибка");
  });

Promise.race([test(1000), test(2000)])
  .then(() => console.log("успешно"))
  .catch(() => {
    console.log("ошибка");
  });
