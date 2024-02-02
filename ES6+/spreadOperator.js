let contacts = ["Mary", "Joel", "Danny"];

let personalFriends = [... contacts];

contacts.push("John");


let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
}

let employee = {
    ... person,
    salary: 50000,
    position: "Software Developer"
}

console.log(employee);
