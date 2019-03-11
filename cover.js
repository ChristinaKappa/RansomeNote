

function start() {
    var canvas = document.getElementById("drawCanvas");
    var draw = canvas.getContext("2d");
    
     draw.drawImage(llive, 10, 25,100, 100);
    draw.drawImage(ilive, 100, 25,100, 100);
    draw.drawImage(vlive, 190, 25,100, 100);
    draw.drawImage(elive, 280, 25,100, 100);

    
    
    draw.drawImage(love, 10, 150,100, 100);
    draw.drawImage(ove, 100, 150,100, 100);
    draw.drawImage(ve, 190, 150,100, 100);
    draw.drawImage(ee, 280, 150,100, 100);
    
    draw.drawImage(llaugh, 10, 275,100, 100);
    draw.drawImage(alaugh, 100, 275,100, 100);
    draw.drawImage(ulaugh, 190, 275,100, 100);
    draw.drawImage(glaugh, 280, 275,100, 100);
    draw.drawImage(hlaugh, 370, 275,100, 100);
}
