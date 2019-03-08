// creates the varibles to draw a canvas, button, input and drawing the letters //
  // Prototype one by Christina Kappalumakkel //

var canvas = document.getElementById("drawCanvas");
var draw = canvas.getContext("2d");
var button =  document.getElementById("button");
var userInput = document.getElementById("input");

// get a random colour 

function getColor()
{
    // gets random colours for the background shapes and generates lighter colours (128 colours) //
     
    
    var r = Math.floor((Math.random()*128)+128);
    var g = Math.floor((Math.random()*128)+128);
    var b = Math.floor((Math.random()*128)+128);
     return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function getFontColor()
{
      // gets colours for the fonts and generates darker colours //
    
  var r = Math.floor((Math.random()*128)+1);
    var g = Math.floor((Math.random()*128)+1);
    var b = Math.floor((Math.random()*128)+1);
     return 'rgb(' + r + ',' + g + ',' + b + ')';

}
//Getting a random number between two values (max and not equal))
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getSize(min, max)
{
	return Math.floor(Math.random()*(max - min) + min);
}
//get a random font (silvia)
function getFont()
{
	var r = Math.floor(Math.random()*13);
	switch(r)
	{
		case 0:
			return 'Amatic SC';
        case 1:
			return 'Overlock';
        case 2:
			return 'Reenie Beanie';
        case 3:
			return 'Fredericka the Great';
        case 4:
			return 'Major Mono Display';
        case 5:
			return 'Charm';
        case 6:
			return 'Indie Flower';
        case 7:
			return 'Cinzel';
        case 8:
			return 'Arial';
        case 9:
			return 'Times';
        case 10:
			return 'Trebuchet MS';
        case 11:
			return 'Impact';
        case 12:
			return 'Comic Sans MS';
            
            
		
	}
}