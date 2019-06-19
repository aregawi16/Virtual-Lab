var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth*3/4;
canvas.height=window.innerHeight*3/4;
var c=canvas.getContext('2d');
var orgin=0;
var ch=false;
var len=250;
var rad=20;
var angle=Math.PI/2;
//rad1=angle*180/Math.PI;
var teta1=angle;
var aVel=0;
var V=0,vel=0.99;
var teta,acc=0.01,velocity;
var aAcc=0;
var mx;
var my;
var flag=false;
var Mass=0.5;
var Pe=0;
var Ke;
var inc=0;
var Fk=canvas.height-30;
var Fp=canvas.height-30;
var Fk1=canvas.width*3/4+50;
var Fp1=canvas.width*3/4+100;


function init(){

	var len=250;
var rad=20;
c.font="40px Algerian";
c.fillText("Simple Pendlum",10,300);
	c.beginPath();
	c.lineWidth=1;
c.fillStyle='blue';//drawing the pendlum ball
c.arc(canvas.width/2, len, rad, 0, Math.PI*2);
c.strokeStyle='black';
c.fill();
c.stroke();	
c.beginPath();
 c.arc(canvas.width/2,8,80,0,Math.PI);
 c.moveTo(canvas.width/2-20,10);
c.lineTo(canvas.width/2+20,10);
c.lineWidth=7;
c.strokeStyle="black";
c.stroke();		
//drawing the pendlum
c.beginPath();
c.lineWidth=2;
c.strokeStyle='black';
c.moveTo(canvas.width/2,10);
c.lineTo(canvas.width/2,len);
c.stroke();


}

function stopFun(){
		flag=false;

	clearInterval(intervalCall);
	
}
function resetFun(){

	
	clearInterval(intervalCall);
	c.clearRect(0, 0, canvas.width, canvas.height);
	angle=Math.PI/2;
	teta1=angle;
	vel=0.99;
	acc=0.01;
	aAcc=0;
	aVel=0;
	flag=false;
	var ch=false;
	mx= canvas.width/2 + len *Math.sin(angle);
    my= orgin + len *Math.cos(angle);
	init();

	
}
function startFun(){
	if(flag==false){
		flag=true;
 intervalCall=setInterval(function(){
	movexy();
	
},100);}
 
	
	
}
function myChange()
{
acc=document.getElementById("myRange").value;
  vel=1-acc;

intervalCall=setInterval(function(){
	movexy();
	
},100);
}
function draw1()
{
	 this.degrees = function(degree) {
	return (degree * 180 / Math.PI);
}
this.radians = function(rad) {
	return rad * Math.PI / 180;
}
	this.draw2=function(){
		 c.clearRect(0,0,canvas.width,canvas.height);	
		
				c.beginPath();
 c.arc(canvas.width/2,8,80,0,Math.PI);
 c.moveTo(canvas.width/2-20,10);
c.lineTo(canvas.width/2+20,10);
c.lineWidth=7;
c.strokeStyle="black";
c.stroke();		
//drawing the pendlum
c.lineWidth=2;
c.strokeStyle='black';
c.moveTo(canvas.width/2,10);
c.lineTo(mx,my);
c.stroke();
c.lineWidth=1;// drawing the vertical line
c.setLineDash([10,10]);
c.moveTo(canvas.width/2,10);
c.lineTo(canvas.width/2,250);
c.stroke();
c.setLineDash([]);
c.beginPath();
c.fillStyle='blue';//drawing the pendlum ball
c.arc(mx, my, rad, 0, Math.PI*2);
c.fill();
c.stroke();	
c.fillStyle="black";
c.font="40px Algerian";
c.fillText("Simple Pendlum",10,300);
c.fillText("KE", canvas.width*3/4, canvas.height);
c.fillText("PE", canvas.width*3/4+100, canvas.height);
c.fillText("V="+velocity.toFixed(1), canvas.width/2, 300);
c.fillText("Ke="+Ke.toFixed(1), canvas.width/2, 340);
c.fillText("Pe="+Pe.toFixed(1), canvas.width/2-len, 50);
c.fillText("V="+velocity.toFixed(1), canvas.width/2-len, 100);
c.fillText("Pe="+Pe.toFixed(1), canvas.width/2+len, 50);
c.fillText("V="+velocity.toFixed(1), canvas.width/2+len, 100);

//c.fillText("V="+Math.round(V), mx, my);
//c.fillText("V="+Math.round(V), mx, my);

c.stroke();
    
    // draw graph
    c.beginPath();
c.moveTo(canvas.width*3/4 ,canvas.height*3/4-50);
c.lineTo(canvas.width*3/4, canvas.height-30);
c.moveTo(canvas.width*3/4, canvas.height-30);
c.lineTo(canvas.width, canvas.height-30);
c.stroke();
    	// drawing the ke and Pe
	if(Fp-Pe>canvas.height/3)
	{
		c.beginPath();
	 c.lineWidth=20;
 	c.strokeStyle='blue';
	 c.moveTo(Fk1,Fk);
	 c.lineTo(Fk1, Fp-Ke);
	c.stroke();
	//Potential energy
	 c.beginPath();
	  c.lineWidth=20;
	  	c.strokeStyle='green';
	 c.moveTo(Fp1,Fp);
	 c.lineTo(Fp1, Fp-Pe);
	c.stroke();	
	}
	
	   

	}

this.movexy=function() {
	mx= canvas.width/2 + len *Math.sin(teta1);
    my= orgin + len *Math.cos(teta1);
    // drawing text on window
        // acc=0.1;
        // vel=0.9;
    	aAcc=-1*acc*Math.sin(teta1);
    	teta1+=aVel;
    	aVel+=aAcc;
    	aVel*=vel;
    	//vel=this.degrees(aVel);
    	Pe=Mass*10*len/10*(1-Math.cos(teta1));
         velocity=Math.abs(aVel*180/Math.PI);
    	Ke=Mass*0.5*10*Math.pow(velocity,2);
    	//V=Math.sqrt(2*10*len*(1-Math.cos(teta1)));
    c.clearRect(0,0,canvas.width,canvas.height);	
 

this.draw2();

}

}
draw1();



