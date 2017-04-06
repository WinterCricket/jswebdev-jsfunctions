var movies = [
	{
		title: "Arrival",
		rating: 3.8,
		haveWatched: false
	},
	{
		title: "Contact",
		rating: 4.4,
		haveWatched: true
	},
	{
		title: "Seven Samaurai",
		rating: 4.8,
		haveWatched: true
	}

]
for(var i = 0; i < movies.length; i++){
	var result = "You have ";
	if(movies[i].haveWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result +=  "\"" + movies[i].title + "\"";
	result += "- " + movies[i].rating + " stars";
	console.log(result);
}

