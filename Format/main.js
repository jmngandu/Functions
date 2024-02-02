
countries = ["Kenya", "Uganda", "Tanzania", "Rwanda"];
names = ["James", "Yvonne", "Rose","Lucy","Allan"]
names.sort()//used to arrange names in alphabetical order
names.reverse()//To reverse sorted elements
combined = countries.concat(names)//to concatenate arrays
document.getElementById("name").innerText = combined
countries.pop();//pop is used to remove the last word
countries.shift()//shift is used remove the first word
countries.push("Burundi")//push adds a word to the array
countries.unshift("Somalia")//unshift adds a word to the beginning of an array
delete countries[1]//To delete a word you can use delete key world
countries.splice(1, 0, "Nigeria", "Niger")//Here splice adds nigeria to the first index without removing any world
document.querySelector(".clicker").innerText = countries.toString()//to print the string
document.querySelector(".clicke").innerText = countries.join(" - ")//Join is used to separate array elements 
document.querySelector(".clickerr").innerText = countries.length//to determine number of elements in an array
