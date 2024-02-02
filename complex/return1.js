let john = 39;
let james = 20;

function agetype() {
	if (john > james) {
		return john;
	} else if (james > john) {
		return james;
	} else {
		return 0;
	}
}

let checkAge = agetype();
console.log(checkAge);
