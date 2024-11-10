var isBeginner = true; //boolean
var total = 10; //number
var firstName = "james"; //string
var sentence = "hello, I am ".concat(firstName); //string
var u = undefined; //undefined
var n = null; //null
var list1 = [1, 2, 3, 4]; //arrays
var list2 = [1, 2, 3, 4]; //arrays
var person1 = ["James", 21]; //tuple
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var c = Color.green;
console.log(c);
