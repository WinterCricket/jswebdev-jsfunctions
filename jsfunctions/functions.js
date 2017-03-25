
// function capitalize(str){
// 	if(typeof str === "number"){
// 		return str + " isn't a string!"
// 	}
// 	return str.charAt(0).toUpperCase() + str.slice(1);
// } 

// var city = "london";
// var capital = capitalize(city);

// console.log(capital);

// var num = 87;
// var capital = capitalize(num);

// console.log(capital);

// function isEven(num){
// 	if(num % 2 === 0){
// 		return true;
// 	}else{
// 		return false;
// 	}
// }

function isEven(num){
	return num % 2 === 0;
}

// function factorial(num) {
//   if (num < 0) 
//         return -1;
//   else if (num == 0) 
//       return 1;
//   else {
//       return (num * factorial(num - 1));
//   }
// }

function factorial(num){

	var result = 1;

	for(var i = 2; i <= num; i++){
		result *= i;
	}
	return result;
}

// function kebabToSnake(str){
// 	var next = str.split("-").join("_");
// 	return next;
// }

//or
function kebabToSnake(str){
	var next = str.replace(/-/g, "_");
	return next;
}
function blonde(words){
	var show = words.replace(/i/g, "y");
	return show;
}