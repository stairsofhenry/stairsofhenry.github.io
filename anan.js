var textOne = mouseX;
var textY = mouseY+5;
var textX = mouseX-5;
draw = function() {
    var textY = mouseY+5;
var textX = mouseX-5;
    background(255, 255, 255);
    fill(0, 0, 0);
    var textOne = mouseX;
    var textTwo = mouseY;
    var textThree = textOne +","+ textTwo;
    text(textThree, textX, textY);
    
};
