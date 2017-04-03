$(document).ready(function(){


var peuple = ["Jordy", "Florian", "Mouad", "Raphael", "Marco", "Dimitri", "Emilie", "Julien", "Franck", "Maxime", "Elodie", 
					"Oceane", "Morel", "Gregory", "Romain"];

var groupe = [];
var random;

for(var n = 0; n < Groupe; n++){
}

for(var i = peuple.length; i > 0; i--){
		random = Math.floor(Math.random() * i);
		groupe.push(peuple[random]);
		peuple.splice(random, 1);
		console.log(groupe);
	
}
});

    