const btn = document.querySelector(".btn");

btn.addEventListener("click", makeRequest);
function makeRequest() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => {
      if (!res.ok) new Error(res.statusText);
      return res.json();
    })
    .then((data) => {
      document.querySelector(".id").innerHTML = data.id;
      document.querySelector(".title").innerHTML = data.title;
      document.querySelector(".body").innerHTML = data.body;
    })
    .catch((error) => {
      console.log(error);
    });
}
