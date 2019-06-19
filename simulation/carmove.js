var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c=canvas.getContext('2d');
//the position the frame will be drawn
var x=0;
var y=0;

var trackLeft=1;
var trackRight=0;
var left=false;

var srcX;
var srcY;

var sheetWidth= 740;
var sheetHeight=2020;

var cols=1;
var rows=8;

var width= sheetWidth/cols;
var height=sheetHeight/rows;

var currentFrame=0;
var human= new Image();
human.src= "car.png";
function moveRight(){
left=false;
}
function moveLeft(){
left=true;
}
function updateFrame(){
  currentFrame = ++ currentFrame % cols;
  srcX= currentFrame * width;
  if(left)
  srcY=trackLeft * height;
else 
  srcY=trackRight*height;
  c.clearRect(0,0, canvas.width,canvas.height);
}
function drawImage(){
 updateFrame();
 c.drawImage(human, srcX , srcY , width , height, x ,y ,width , height);
x+=1;

}
setInterval(function(){
  drawImage();
},1);