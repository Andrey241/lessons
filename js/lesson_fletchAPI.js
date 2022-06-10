function some() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      name: "Alex",
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((ressponse) => ressponse.json())
    .then((json) => console.log(json));
}
// some();
