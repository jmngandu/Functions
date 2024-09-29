const btn = document.querySelector(".btn");
const id = document.querySelector(".id");
const title = document.querySelector(".title");
const body = document.querySelector(".body");
btn.addEventListener("click", makeRequest);
function makeRequest() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => {
      if (!res.ok) new Error(res.statusText);
      return res.json();
    })
    .then((data) => {
      id.textContent = data.id;
      title.textContent = data.title;
      body.textContent = data.completed;
    });
}
