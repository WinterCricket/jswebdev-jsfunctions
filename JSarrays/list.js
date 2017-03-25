var actions = ["buy new eyeglasses", "get new passport", "learn to drive", "Get paid for coding"];
var input = prompt("Now what?");

while (input !== "quit"){
	if(input === "list"){
		console.log(actions);
	} else if (input === "new"){
		var newAction = prompt("Enter new action");
		actions.push(newAction);
	}
	var input = prompt("Now what?");
}
console.log("You've quit the app");