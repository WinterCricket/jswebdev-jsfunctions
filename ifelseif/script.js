
var firstName = prompt("What is your first name?");
var lastName = prompt("What's your last name?");
var userAge = prompt("How old are you?");
console.log("Your full name is " + firstName + " " + lastName + "." );
console.log("You are " + userAge + ".");
var ageDays = userAge * 365
alert("which means that you are roughly " + ageDays + " days old.")

if(userAge < 18){
	console.log("Go away, kid. You're way too young.");
}
else if(userAge < 21){
	console.log("Come on in, soldier, but stay away from the beer.");
}
else{
	console.log("Welcome. Eat, drink, spend your money!");
}

if(userAge < 0){
	console.log("Your mother is welcome, but she must abort you first.");
}

if(userAge === 21){
	console.log("Happy b day--here's your first public drink, free!");
}

if( userAge % 2 !== 0){
	console.log("Your age is odd, like you. Buy me a drink!");
}

if(userAge % Math.sqrt(userAge) === 0){
	console.log("You're a real square, like your age. We'll all pitch do get you drunk tonight.");
}