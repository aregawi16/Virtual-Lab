var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth*3/4;
canvas.height=window.innerHeight;
var c=canvas.getContext('2d');

c.font='50px Algerian';
c.fillStyle='white';
c.fillText("Convex Lense",200,50);
c.font='20px Times new Roman';
c.fillText("2F",125,270);
c.arc(125,280,5, 0, Math.PI*2);
c.fillText("F",225,270);
c.arc(225,280,5, 0, Math.PI*2);

c.fillText("F",425,270);
c.arc(425,280,5, 0, Math.PI*2);

c.fillText("2F",525,270);
c.arc(525,280,5, 0, Math.PI*2);


c.fillStyle='red';
c.arc(325,280,5, 0, Math.PI*2);
c.fill();
var a=0,b=0,c=0,d=0,e=0,z=false,x11,y11,y22,y33,y44,y55;
var x111,y111,y222,y333,y444,y555;
var x1=20,y1=210,y2=240,y3=280,y4=320,y5=350;

function draw( i, y10,y12,y14,y15){
	var c=canvas.getContext('2d');

	var convex= new Image();
convex.src='./convex.png';

c.drawImage(convex, 300 , 200 , 53, 166);

if(i<=310&& z==false)
 	{
 		x11=x1+i;
 		y11=y1+y10;
 		y22=y2+y12;
 		y33=y3;
 		y44=y4+y14;
 		y55=y5+y15;
 		x111=x11;
 		y111=y11;
 		y222=y22;
 		y333=y33;
 		y444=y44;
 		y555=y55;
c.beginPath();
c.moveTo(x1,y1);
c.lineTo(x11,y11);
c.moveTo(x1,y2);
c.lineTo(x11,y22);
c.moveTo(x1,y3);
c.lineTo(x11,y3);
c.moveTo(x1,y4);
c.lineTo(x11,y44);
c.moveTo(x1,y5);
c.lineTo(x11,y55);
c.strokeStyle='#ff9900';
c.stroke();
}
if(i>310 &&z==true)
{

	    x11=x1+i;
 		y11=y1+y10;
 		y22=y2+y12;
 		y33=y3;
 		y44=y4+y14;
 		y55=y5+y15;
c.moveTo(x111,y111);
c.lineTo(x11,y11);
c.moveTo(x111,y222);
c.lineTo(x11,y22);
c.moveTo(x111,y33);
c.lineTo(x11,y3);
c.moveTo(x111,y444);
c.lineTo(x11,y44);
c.moveTo(x111,y555);
c.lineTo(x11,y55);
c.stroke();
}
}


function animate() {
 	requestAnimationFrame(animate);
 	if(a<530)
 	{
 	a+=1;
 	if(a<=310&& z==false)
 	{
 		
 	b=0;
    c=0;
 	d=0;
 	e=0;
 	}
 	
 	if(a>310)
 	{
  z=true;
  d=Math.abs(d);
  e=Math.abs(e);
 		
 	    b+=0.32;
 	    c+=0.18;
e+=0.32;
 	    d+=0.18;
 	d=-d;
 	e=-e;

 	}

  draw(a,b,c,d,e);}
 }
 animate();

