var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth/2;
canvas.height=window.innerHeight/2;
//rectangle
var c=canvas.getContext('2d');
// c.fillStyle='rgba(255,0,0,0.7)';
// c.fillRect(100,100,100,100);
// c.fillStyle='rgba(0,255,0.4,0.5)';

// c.fillRect(400,100,100,100);
// c.fillStyle='rgba(0,0,255,0.2)';

// c.fillRect(300,300,100,100);
// console.log(canvas);

//line
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);

// c.lineTo(400,300);
// c.strokeStyle="#214567";
// c.stroke();

//arc
//c.beginPath();
//c.arc(300,300,50,0,Math.PI*2,false);
//c.strokeStyle='blue';
//c.stroke();

// for (var i = 0; i <100; i++) {
// 	var x=Math.random() * window.innerWidth;
// 	var y=Math.random() * window.innerHeight;
// 	c.beginPath();
// c.arc(x,y,30,0,Math.PI*2,false);
// c.strokeStyle='blue';
// c.stroke();
// }
    var mouse={
     	x: undefined,
     	y: undefined
      }
var colorArray=[
  '#ffaa33',
  '#99ffaa',
  '#00ff00',
  '#4411aa',
  '#ff1100'
];
 window.addEventListener('mouseover', function(event){
   	mouse.x= event.x;
  	 mouse.y= event.y;
     console.log(event);
  	 
    }) 
 // window.addEventListner('resize', function(){
 //  	canvas.width=window.innerWidth;
 //    canvas.height=window.innerHeight;
   	 
 // }) 
function circle(x, y, dx, dy, radius)
{
	this.x=x;
	this.y=y;
	this.dx=dx;
	this.dy=dy;
	this.radius=radius;
	this.color= colorArray[Math.floor(Math.random() * colorArray.length)];
this.draw=function(){
 c.beginPath();
 c.arc( this.x, this.y,this.radius,0,Math.PI*2,false);
 c.strokeStyle='blue';
 c.fillStyle= this.color;
 c.fill();
	}

 this.update=function() {
 	if (this.x+this.radius>innerWidth||this.x-this.radius<0) {
 	this.dx=-this.dx; 
 }
 if (this.y+this.radius>innerHeight||this.y-this.radius<0) {
 	this.dy=-this.dy;
 }
 
 this.x+=this.dx;
 this.y+=this.dy;
 // interactivity
      if(mouse.x - this.x < 50 && mouse.x -this.x > -50)
     {
     	this.radius+=1; 
    }
 this.draw();
 	
 }

}
var circleArray=[];
function init(){
for (var i = 0; i <800; i++) {
var x=Math.random() * (innerWidth-radius*2) + radius;
var y=Math.random() * (innerHeight-radius*2) + radius;
var dx=(Math.random()-0.5)*3;
var dy=(Math.random()-0.5)*3;
var radius=Math.random()*3 + 1;
circleArray.push(new circle(x, y, dx, dy, radius));
}
}

 function animate() {
 	requestAnimationFrame(animate);
 	c.clearRect(0,0,innerWidth,innerHeight);
 	for (var i = 0; i <circleArray.length; i++) {
 		circleArray[i].update();
 			
 }
 }

 init();
 animate();