var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth/2;
canvas.height=window.innerHeight;
var c=canvas.getContext('2d');
var intervalCall=0,i=0,j=0,k=0,x=0;
function draw(){
c.clearRect(0,0, canvas.width, canvas.height);
k=0;
for(j=0;j<30;j++){
 c.lineWidth=5;
	c.beginPath();
c.strokeStyle='yellow';
	c.arc(100+k+i+j,100+i+k,5+j+i , 0, Math.PI/2);
	c.stroke();
	k+=7;
}
}
function start(){
setInterval(function(){
	draw();
	i++;
if(i>150)
	i=0;

 },10);
}
