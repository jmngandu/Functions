const nums = [1, 2, 3, 4, 5];
// -->       [1, 4, 9, 16, 25]
const squares = nums.map(function (num) {
	return num * num;
});

console.log(squares);

const modulus = nums.map((numb) => {
	return numb % 2;
});
console.log(modulus);

const cuberoot = nums.map(function (numbe) {
	return numbe * numbe * numbe;
});

console.log(cuberoot);

const numbers = [3, 4, 5, 6];

const squarest = numbers.map((numr) => {
	return numr * numr;
});

console.log(squarest);

const names = ['james', 'mukuvi', 'ngandu'];

const capitalName = names.map((nam) => {
	return nam.toUpperCase();
});
console.log(capitalName);

const callMe = ['jamse', 'ann', 'jonte', 'kamau'];
const callHim = callMe.map((him) => {
	return him[0].toLocaleUpperCase() + him.slice(1);
});
console.log(callHim);
