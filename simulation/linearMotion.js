var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth*3/4;
canvas.height=window.innerHeight/2;
//rectangle
var radius=20;
var x=100;
var y=100;
var widthr=200;
var heightr=100;
var xa1=130;
var xa2=270;
var dv=0.05;
var c=canvas.getContext('2d');
c.font = "30px Arial";
c.fillText("ስሩዕ ምንቅስቃስ", 10, 50);
c.stroke();


function circle(){
	this.drawC=function(){
		c.beginPath();
   c.moveTo(0,200+radius);
  c.lineTo(canvas.width, 200+radius);
   c.stroke();
		c.beginPath();
c.arc(xa1,widthr,radius, 0 ,Math.PI*2);
c.arc(xa2, widthr,radius, 0 ,Math.PI*2);
c.strokeStyle='black';
c.stroke();
c.fillStyle='black';
 c.fill();


	}
 this.updateC=function(){

 	xa1+=dv;
 	xa2+=dv;


 	this.drawC();
 }

}
function rect(){
	this.drawR=function(){
		c.fillStyle='blue';
c.fillRect(x,y,widthr,heightr);
	}

this.updateR=function(){
	if(x + widthr>canvas.width || x<0)
 	{
 		dv=-dv;
 	}
	x+=dv;
this.drawR();
 	
 }

}

function init(){
		c.beginPath();
   c.moveTo(0,200+radius);
  c.lineTo(canvas.width, 200+radius);
   c.stroke();

	c.beginPath();
c.arc(xa1,widthr,radius, 0 ,Math.PI*2);
c.arc(xa2, widthr,radius, 0 ,Math.PI*2);
c.strokeStyle='black';
c.stroke();s
c.fillStyle='black';
 c.fill();
 c.fillStyle='blue';
c.fillRect(x,y,widthr,heightr);
	
}
document.getElementById("myBtn").addEventListener('click', function(){
	dv=0.1;
   	animate();
  	 
    }) 
document.getElementById("stpBtn").addEventListener('click', function(){
   	dv=0;
  	 
    }) 
var incArray=[];
function animate() {
 	requestAnimationFrame(animate);
 		c.clearRect( 0, 100, innerWidth, innerHeight);
 	   for (var i = 0; i <100; i++) {
 		   updateC();
 		    updateR();
 		
 		}
  		    c.stroke();

 }
 init();
 circle();
rect();
 //animate();




