console.log(document.title);
console.log(document.head);
console.log(document.body);
console.log(document.URL);
//textContent, innerText, innerHTML
//class list
const h1 = document.querySelector("h1");
h1.classList.add("styles");
h1.classList.remove("styles");

//toggle - if you dont have class it adds and if you have class it removes
h1.classList.toggle("hello");
//attributes
const a = document.querySelector("a");
console.log(a.href);
h1.style.color = "teal";
h1.style.backgroundColor = "#fff";

let telMe = document.querySelector(".telMe");
let telI = document.createElement("h1");
telI.innerText = "hello";
telMe.appendChild(telI);
