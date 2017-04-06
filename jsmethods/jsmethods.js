
var personSpace = {}

var alienSpace = {}

personSpace.name = "Liam";
alienSpace.name = "Roger";

personSpace.age = 55;
alienSpace.age = 443;

personSpace.friends = ["Roger", "Sarah", "Catman"];
alienSpace.friends = ["Mothman", "Triangle Craft"];

personSpace.method = function(){
	return "My name is widower high shoe...";
}

alienSpace.method = function(){
	return "I'm a hairy and crazy non-guy!";
}

alienSpace.name += " Rabbit";

//comments and keyword this

var comments = {};

comments.data = ["Right on!", "Sometimes, maybe.", "What bull!"];

comments.print = function(){
	this.data.forEach(function(el){
	console.log(el);
});
}
