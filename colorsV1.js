 // Assign the id to the varibles which will enable to draw a canvas, button, input and drawing the letters //
  // Prototype one by Christina Kappalumakkel //

var canvas = document.getElementById("drawCanvas");
var draw = canvas.getContext("2d");
var userInput = document.getElementById("input");



function getColor()
{
    // gets random colours for the background shapes  ) //
     
    
    var r = Math.floor(Math.random()*128);
    var g = Math.floor(Math.random()*128);
    var b = Math.floor(Math.random()*128);
     return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function getFontColor()
{
      // gets colours for the fonts //
    
  var r = Math.floor(Math.random()*150);
    var g = Math.floor(Math.random()*150);
    var b = Math.floor(Math.random()*150);
     return 'rgb(' + r + ',' + g + ',' + b + ')';

}
