window.onload=function () {

canvas= document.getElementById('canvas');
width=canvas.width=window.innerWidth/2;
height=canvas.height= window.innerHeight/2;
c= canvas.getContext('2d');
handle={
	x:width/2,
	y:height/2,
	radius:20

};
draw();
function draw(){

c.clearRect(0,0, width , height);
c.fillStyle='red';
c.beginPath();
c.arc(handle.x , handle.y ,handle.radius, 0, Math.PI*2);
c.fill();
}
document.body.addEventListener("mousedown", function(event){
if(utils.circlePointCollision( event.clientX, event.clientY, handle))

{
document.body.addEventListener("mousemove", onMouseMove);
	document.body.addEventListener("mouseup", onMouseUp);
}
});
function onMouseMove(event){
	handle.x=event.clientX;
	handle.y= event.clientY;
	draw();
}
function onMouseUp(event){
	document.body.removeEventListener("mousemove", onMouseMove);
	document.body.removeEventListener("mouseup", onMouseUp);
}

}