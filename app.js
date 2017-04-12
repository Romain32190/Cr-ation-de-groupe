$(document).ready(function(){

	$('#button').click(function(){
		Peuple();
		AjouterTh();
		tableaupeuple();
	});  


var groupe = [];
var random;
var peuple = 0;

var personne = ["Jordy", "Florian", "Morel", 
				"Raphael", "Marco", "Dimitri", 
				"Emilie", "Julien", "Franck", 
				"Maxime", "Elodie", "Oceane", 
				"Mouad", "Gregory", "Romain"];


var Peuple = function(){
	for(var i = personne.length; i > 0; i--){
		random = Math.floor(Math.random() * i);
		groupe.push(personne[random]);
		personne.splice(random, 1);
	}
};

var AjouterTh = function(){
	peuple = parseInt(prompt("Rentrez le nombre de groupe que vous voulez?"));
	for(var o = 0; o < parseInt(peuple); o++){
	}
}; 

	
var tableaupeuple = function(){

	$('tbody').append("<tr></tr>");
	for( var j = 1 ; j <= groupe.length; j++ ){
		$("tr").last().append("<td>" + groupe[j - 1] + "</td>");
			if(j % peuple === 0) {
				$('tbody').append("<tr></tr>");

			}	
	};
};

	
}); 
	
     
    $.ajax({
       url : 'http://192.168.1.131:3000/name',

       success: function(data){
       	console.log(data);
       	console.log('success');
       },

       error: function(err){
       	console.log('error');
       },
    });

    