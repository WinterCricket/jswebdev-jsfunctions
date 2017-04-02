var movieDB =[
	{
		title: "Contact",
		haveWatched: true,
		rating: 4.2	
	},

	{
		title: "In the Bedroom",
		haveWatched: true,
		rating: 4.7	
	},

	{
		title: "Arrival",
		haveWatched: false,
		rating: 4.1	
	}

]

// for(var i = 0; i < movieDB.length; i++){
// 	console.log(movieDB[i]);
// }

movieDB.forEach(function(movie){
	var result = "You have ";
	if(movie.haveWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\"" ;
	result += " -"+ movie.rating + " stars";
	console.log(result);
});