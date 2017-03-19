console.log("Print numbers from -10 to 20");
var count = -10;
while(count < 20){
	console.log(count);
	count++;
}

console.log("Print even numbers from 10 to 40");
var even = 10;
while(even <= 40){
	if(even % 2 === 0)
		console.log(even);
	even ++;
}


console.log("Print odd numbers from 300 to 333");
var counted = 300;
while(counted <= 333){
	if(counted % 2 !== 0)
		console.log(counted);
		counted++;
}

console.log("Print numbers divisable by 5 and 3 from 5 to 50");
var fifteen = 5;
while(fifteen < 50){
	if(fifteen % 5 === 0 && fifteen % 3 === 0)
		console.log(fifteen);
	fifteen++;

}