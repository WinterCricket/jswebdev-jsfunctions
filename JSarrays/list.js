var actions = ["buy new eyeglasses", "get new passport", "learn to drive", "Get paid for coding"];
var input = prompt("Now what?");

while (input !== "quit"){
	if(input === "list"){
		listActions();
	} else if (input === "new"){
		newAction();
	} else if (input === "delete"){
		deleteAction();
	}
	var input = prompt("Now what?");
}
console.log("You've quit the app");

function listActions(){
	console.log("***********");
	actions.forEach(function(action, i){
		console.log(i + ": " + action);
	});
	console.log("***********");
}

function newAction(){
	var newAction = prompt("Enter new action");
	actions.push(newAction);
	console.log("Action Added");
}

function deleteAction() {
	var index = prompt("Enter index of action to be nixed.")
	actions.splice(index, 1);
	console.log("Action Deleted!");
}