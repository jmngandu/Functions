const btn = document.querySelector(".btn");
btn.addEventListener("click", makeRequest);
function makeRequest() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => {
      if (!res.ok) new Error(res.statusText);
      return res.json();
    })
    .then((data) => {
      console.log(data.id);
      console.log(data.title);
    });
}
