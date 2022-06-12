const checkbox = document.querySelector("#input-check"),
  form = document.querySelector(".container"),
  change = document.querySelector("#color");

if (localStorage.getItem("isCheck") == "true") {
  checkbox.checked = true;
}

checkbox.addEventListener("change", () => {
  localStorage.setItem("isCheck", true);
});

if (localStorage.getItem("bg") === "changed") {
  form.style.backgroundColor = "red";
}
change.addEventListener("click", () => {
  if (localStorage.getItem("bg") === "changed") {
    localStorage.removeItem("bg");
    form.style.backgroundColor = "#fff";
  } else {
    localStorage.setItem("bg", "changed");
    form.style.backgroundColor = "red";
  }
});
















const persone = {
  nam: "alex",
  age: 25,
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem("alex", serializedPersone);

console.log(JSON.parse(localStorage.getItem("alex")));
