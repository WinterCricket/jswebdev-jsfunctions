
// var answer = prompt("Are we there yet?");

// while(answer !== "yes" && answer !== "yeah"){
// 	var answer = prompt("Are we there yet?");
// }

// alert("Great! We've finally made it!");

// version using indexOf

var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1){
	var answer = prompt("Are we there yet?");
}

alert("Great! We've finally made it!");