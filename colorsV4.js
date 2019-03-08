 // Assign the id to the varibles which will enable to draw a canvas, button, input and drawing the letters //
  // Prototype one by Christina Kappalumakkel //

var canvas = document.getElementById("drawCanvas");
var draw = canvas.getContext("2d");
var userInput = document.getElementById("input");



function getShapeColor() 
{
    // gets random colours for the background shapes and generates lighter colours ) //
     
    
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