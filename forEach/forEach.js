// myForEach(nums, function(num){
// 	console.log(num);
// });

//

function myForEach(arr, func) {
	//loop through array
	for(var i = 0; i < arr.length; i++) {
		//call func for each item in arr
		func(arr[i]);
	}
	
}

//forEach with anonymous function

myForEach(colors, function(color){
	console.log(color);
});

//prototype and this
Array.prototype.myForEach = function(func){
	for(var i = 0; i < this.length; i++){
		func(this[i]);
	}
}

array.myForEach(alert);

//or

array.myForEach(function(element){
	console.log("We would try some "+ element);
});