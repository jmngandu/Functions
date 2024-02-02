let largeCountries = ['Tuvalu', 'India', 'USA', 'Indonesia', 'Monaco'];
//shift---pop
//unshift---push
largeCountries.pop();
largeCountries.push('China');
largeCountries.shift(); //shift removes the first item
largeCountries.unshift('Pakistan'); //unshift adds the first item
for (i = 0; i < largeCountries.length; i++) {
	console.log(largeCountries[i]);
}
