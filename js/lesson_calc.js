// const result = document.querySelector(".calculating__result span");
// let sex = "female",
//   height,
//   weight,
//   age,
//   ratio = 1.375;

// function calcTotal() {
//   if (!sex || !height || !weight || !age || !ratio) {
//     result.textContent = "____"; // Можете придумать что угодно
//     return;
//   }
//   if (sex === "female") {
//     result.textContent = Math.round(
//       (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio
//     );
//   } else {
//     result.textContent = Math.round(
//       (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio
//     );
//   }
// }

// calcTotal();

// function getStaticInformation(parentSelector, activeClass) {
//   const elements = document.querySelectorAll(`${parentSelector} div`);
//   elements.forEach((item) => console.log(item));
//   elements.forEach((elem) => {
//     elem.addEventListener("click", (e) => {
//       if (e.target.getAttribute("data-ratio")) {
//         ratio = +e.target.getAttribute("data-ratio");
//       } else {
//         sex = e.target.getAttribute("id");
//       }

//       elements.forEach((elem) => {
//         elem.classList.remove(activeClass);
//       });

//       e.target.classList.add(activeClass);

//       calcTotal();
//     });
//   });

//   //   const someList = document.querySelectorAll(".tabheader__item");
//   //   someList.forEach((elem) => {
//   //     elem.addEventListener("click", (e) => {
//   //       someList.forEach((item) => {
//   //         item.classList.remove("calculating__choose-item_active");
//   //       });
//   //       e.target.classList.add("calculating__choose-item_active");
//   //     });
//   //   });
// }

// getStaticInformation("#gender", "calculating__choose-item_active");
// getStaticInformation(
//   ".calculating__choose_big",
//   "calculating__choose-item_active"
// );

// function getDynamicInformation(selector) {
//   const input = document.querySelector(selector);

//   input.addEventListener("input", () => {
//     switch (input.getAttribute("id")) {
//       case "height":
//         height = +input.value;
//         break;
//       case "weight":
//         weight = +input.value;
//         break;
//       case "age":
//         age = +input.value;
//         break;
//     }

//     calcTotal();
//   });
// }

// getDynamicInformation("#height");
// getDynamicInformation("#weight");
// getDynamicInformation("#age");

const result = document.querySelector(".calculating__result span");

let sex = "female",
  height,
  weight,
  age,
  ratio = 1.375;

function calcTotal() {
  if (!sex || !height || !weight || !age || !ratio) {
    result.textContent = "____";
    return;
  }
  if (sex === "female") {
    result.textContent = Math.round(
      (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio
    );
  } else {
    result.textContent = Math.round(
      (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio
    );
  }
}
calcTotal();

function getStaticInformation(selector, activeClass) {
  const elements = document.querySelectorAll(`${selector} div`);

  elements.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      if (
        e.target.getAttribute("id") &&
        (e.target.getAttribute("id") === "female" ||
          e.target.getAttribute("id") === "male")
      ) {
        sex = e.target.getAttribute("id");
        console.log(sex);
        calcTotal();
      }
      if (e.target.getAttribute("data-ratio")) {
        ratio = +e.target.getAttribute("data-ratio");
        console.log(ratio);
        calcTotal();
      }
      calcTotal();
      elements.forEach((elem) => elem.classList.remove(activeClass));
      e.target.classList.add(activeClass);
    });
  });
}

getStaticInformation("#gender", "calculating__choose-item_active");
getStaticInformation(
  ".calculating__choose_big",
  "calculating__choose-item_active"
);
function getDynamicInformation(selector) {
  const input = document.querySelector(selector);
  input.addEventListener("input", () => {
    switch (input.getAttribute("id")) {
      case "height":
        height = +input.value;
        break;
      case "weight":
        weight = +input.value;
        break;
      case "age":
        age = +input.value;
        break;
    }

    calcTotal();
  });
}
getDynamicInformation("#height");
getDynamicInformation("#weight");
getDynamicInformation("#age");
