var canvas = document.getElementById("drawCanvas");
var draw = canvas.getContext("2d");
var button =  document.getElementById("button");
var userInput = document.getElementById("input");

// get a random colour (maximum number of colors that can be displayed is 256.)
//https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
function getColor()
{
	var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}
//Getting a random number between two values (max and not equal))
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getSize(min, max)
{
	return Math.floor(Math.random()*(max - min) + min);
}
//get a random font
function getFont()
{
	var r = Math.floor(Math.random()*6);
	switch(r)
	{
		case 0:
			return 'Arial';
		case 1:
			return 'Courier New';
		case 2:
			return 'Georgia';
		case 3:
			return 'Times New Roman';
		case 4:
			return 'Trebuchet MS';
		case 5:
			return 'Verdana';
	}
}

function ransomize()
{
	var inputString = userInput.value;
	var ransomX = 20;
  var ransomY = 70;
	//for each letter add the color the size and the font
	for (var i = 0; i < inputString.length; i++)
	{
    draw.fillStyle = getColor();
    var letterSize = getSize(20, 61);
    draw.font = letterSize +  "px " + getFont();
    draw.fillText(inputString[i], ransomX, ransomY);
		ransomX += letterSize + 5;
    // check if the text is out of the canvas.width and wrap text around
    if (ransomX >= canvas.width)
    {
      ransomX = 20;
      ransomY += 50;
    }
	}
}
