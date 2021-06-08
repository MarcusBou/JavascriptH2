var imgMark = new Image();
var imgMap = new Image();
var imgChest = new Image();
var chestX, chestY;
var canvas = document.getElementById("map");
var ctx = canvas.getContext("2d");



canvas.addEventListener("click", OnClickEvent , false)

function OnClickEvent(event){
    var x, y;
    x = (event.clientX - canvas.offsetLeft).toFixed(0);
    y = (event.clientY - canvas.offsetTop).toFixed(0);
    console.log(x + "," + y);
    if(x <= chestX + 25 && x >= chestX - 25 && y <= chestY + 25 && y >= chestY){
        chestFound();
        console.log("It Has Been Found!!!");
    }else{
        marker(x,y);
    }
}

//gives the picture's their property
window.onload = function(){
    imgMap.src = "treasuremap.png";
    imgMark.src = "cross.png";
    imgChest.src = "treasureChest.png";
    buryChest();
}

//Waits for the image of the map to load. so it can be drawn on the canvas
imgMap.onload = function(){
    ctx.drawImage(imgMap, 0, 0);
}

//Chooses coordinates for the chest
function buryChest(){
    chestX = RndInt(100, 1000);
    chestY = RndInt(180, 650);
    console.log(chestX + "," + chestY);
}

//places a marker on coordinates that has been clicked on
function marker(x,y){
    ctx.drawImage(imgMark, x - 25, y -25, 50, 50);
}

//Shows The chest when it is found
function chestFound(){
    ctx.drawImage(imgChest, chestX - 25, chestY - 25, 75, 75);
}

//Gives a random number between, a min and max number.
function RndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }