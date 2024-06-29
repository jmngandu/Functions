// console.log("hello");
let firstName = "james";
firstName += " he is a good boy";
// console.log(firstName.length);
// console.log(firstName.toLowerCase());
// console.log(firstName.toUpperCase());
// console.log(firstName.slice(0, 5));
// console.log(firstName.split(""));
// console.log(firsonsole.log(jsonString);
// console.log(parseObject);tName.split(" "));
// console.log(firstName.split("").join(" + "));

let music = `
    heal 
    me`;

// console.log(parseObject);
// console.log(music);

//type operator
let money = "50";
money = parseInt(money); //or money = +money; or money = Number(money);
money = money.toString();
// console.log(typeof money);

// control flow
let button = 0;
let text;
switch (button) {
  case 1:
    text = "ON";
    break;
  case 0:
    text = "OFF";
    break;
  default:
    text = "----";
}
// console.log(text);

//FOR LOOP

for (let i = 0; i < 3; i++) {
  // console.log(`The value is ${i}`);
  for (let j = 0; j < 2; j++) {
    // console.log(`The value is ${j}`);
  }
}

//While LOOP

let i = 0;
while (i < 10) {
  // console.log(`Thew value is ${i}`);
  i++;
}

//DO WHILE LOOP

let k = 0;
do {
  // console.log("Hello Dad and Mum");
  k++;
} while (k <= 5);

//logical operators AND(&&) OR(||) NOT(!)

const a = true;
const b = false;
const c = 2;

// console.log(a && b); //AND
// console.log(a || b); //OR
// console.log(a != b); //NOT
// console.log(!a);

//ARRAYS

let fruits = ["mango", "banana", "apple", "orange"];
let Efruits = ["strawberries", "watermelon", "pineapple"];

const allfruits = fruits.concat(Efruits); //concat method
fruits.push("avocado");
fruits.pop();
fruits.shift();
fruits.unshift("tomato");
fruits.sort();
let fruit;

// for (fruit in allfruits) {
//   console.log(allfruits[fruit]);
// }

//OBJECTS

let lessons = {
  math: 88,
  eng: 78,
  kisw: 90,
  sci: { bio: 89, chem: 72, phy: 96 },
  tech: ["agri", "comp"],
  89: "Total",
};
lessons.geo = 92;
// console.log(lessons.sci.bio); //dot notation
// console.log(lessons["89"]); //bracket notation
// console.log(lessons);

//functions

function sayHello(name) {
  console.log(`Hello ${name}`);
}
// sayHello("james");
// sayHello("mutiso");

function callMe(a, b) {
  return a + b;
}
// console.log(callMe(12, 34));

//function expression
const greetings = function (user) {
  console.log(`Hello ${user}`);
};
// greetings("James");

//Function callback = when we provide a function as an (Argument)to another function that fucntion is known as callback function

function callbackFunc(functOne) {
  const numb = 30;
  functOne(numb);
}
callbackFunc(function (numb) {
  // console.log(numb);
});

//Object methods

function greet() {
  return `Hello my name is ${person.names} and i am ${person.age} years old.`;
}

const person = {
  names: "James",
  age: 21,
  greet,
};

// console.log(person.greet());
//method inside an object in javascript
const persona = {
  namess: "John",
  ages: 22,
  greett: function () {
    return `Hello its ${this.namess} chatting, and am ${this.ages} years old`;
  },
};
// console.log(persona.greett());

//JSON
//used for transmitting data between between servers and web applications
const myInfo = {
  name: "Jm ngandu ",
  age: 20,
  email: "jm@gmail.com",
  isSubsribed: true,
  hobbies: ["Reading", "Coding", "Cooking"],
  address: {
    city: "Nairobi",
    location: "Westie",
  },
};
// const jsonString = JSON.stringify(myInfo); //convert to json file
// const parseObject = JSON.parse(jsonString); //convert to object
// // console.log(jsonString);
// // console.log(parseObject);

//DATE AND TIME

//year, month,days,hours,minutes,seconds,milliseconds
const allDate = new Date(2024, 6, 28, 16, 23, 1, 2);
// console.log(allDate);
const currentDate = new Date();

const thisYear = currentDate.getFullYear(); //year
const thisMonth = currentDate.getMonth(); //month
const thisDay = currentDate.getDay(); //day
const thisHour = currentDate.getHours(); //hours
const thisMinute = currentDate.getMinutes(); //minute
const thisMillisecond = currentDate.getMilliseconds(); //milliseconds
// console.log(`Year ${thisYear}`);
// console.log(`Month ${thisMonth}`);
// console.log(`Day ${thisDay}`);
// console.log(`Hour ${thisHour}`);
// console.log(`Minute ${thisMinute}`);
// console.log(`Millisecond ${thisMillisecond}`);
// console.log(currentDate.toDateString()); //datestring
// console.log(currentDate.toISOString()); //ISO format
// console.log(currentDate.toLocaleString());

//set interval-the code keeps on running after the set interval

// setInterval(() => {
//   // console.log("hello dad and mum");
// }, 2000);

// //settimeout-the code waits for the set time and executes
// setTimeout(function () {
//   // console.log("This function will be executed after three seconds");
// }, 3000);

// //stop interval after 10seconds

// const intervalId = setInterval(() => {
//   // console.log("This function is being executed after an interval");
// }, 1000);
// setTimeout(() => {
//   // clearInterval(intervalId);
//   // console.log("interval stopped");
// }, 10000);

//TEMPLATE STRINGS//

// console.log(`
// hello
//      i am
//           james`);
// console.log(`${3 + 9}`);

function info() {
  return `My name is james`;
}
// console.log(`${info()}`);

//ARROW FUNCTIONS

const namei = (jina, nchi) => {
  return `mama ${jina} anaishi ${nchi}`;
};
console.log(namei("africa ", "kenya"));
