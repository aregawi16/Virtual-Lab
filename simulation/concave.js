var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth/2;
canvas.height=window.innerHeight;

var a=0,b=0,c=0,d=0,e=0,z=false,x11,y11,y22,y33,concave;
var x111,y111,y222,y333,y444,y555,xx,xxx;
var x1=20,y1=230,y2=240,y3=280;
var c=canvas.getContext('2d');
c.font='50px Algerian';
c.fillText("Concave Lense",200,50);
c.font='20px Times new Romans';
c.fillStyle='red';
c.fillText("2F",125,270);//writing focal length
c.arc(125,280,5, 0, Math.PI*2);
c.fillText("F",225,270);
c.arc(225,280,5, 0, Math.PI*2);

c.fillText("F",425,270);
c.arc(425,280,5, 0, Math.PI*2);

c.fillText("2F",525,270);
c.arc(525,280,5, 0, Math.PI*2);


c.fillStyle='red';
c.fillText("O",330,270);
c.arc(325,280,5, 0, Math.PI*2);
c.fill();
function draw( i, y10,xx12,yy12){
	var c=canvas.getContext('2d');

	var convex= new Image();
convex.src='./concave.png';

c.drawImage(convex, 300 , 200 , 79, 167);
c.beginPath();
c.moveTo(x1,y3);
c.lineTo(x1+650,y3);
c.stroke();
//drawing arrow
c.beginPath();
c.strokeStyle='red';
c.moveTo(xx,y3);
c.lineTo(xx,y1+15);
c.moveTo(xx-5,y1+15);
c.lineTo(xx,y1);
c.lineTo(xx+5,y1+15);
c.fill();
c.strokeStyle='red';
c.stroke();
c.closePath();
c.strokeStyle='black';
if(i<=330&& z==false)
 	{
 		x11=x1+i;
 		y11=y1+y10;
 		y33=y3;	
 		x111=x11;
 		y111=y11;
 			
c.beginPath();
c.moveTo(x1,y1);
c.lineTo(x11,y11);
c.stroke();
}
if(i>330 &&z==true)
{
	 

	    x11=x1+i;
 		y11=y1+y10;
 		
 		y33=y3;
c.moveTo(x111,y111);
c.lineTo(x11,y11);
c.stroke();
c.beginPath();
 		c.setLineDash([10, 10]);
 c.moveTo(x111,y111);
  c.lineTo(x111-130,y111+50);
  c.strokeStyle='red';
c.stroke();



c.moveTo(xx,y1);
c.lineTo(xx+400,y1+112);
c.moveTo(xxx,y3);
c.lineTo(xxx,y3-10);
c.moveTo(xxx-3,y3-10);
c.lineTo(xxx,y3-20);
c.lineTo(xxx+3,y3-10);
c.fill();
//c.setLineDash([0, 0]);
c.stroke();



}
}
function chooseFL(){
	concave=document.getElementById('chooseFL').value;

if(concave==1)
{
xxx=270;
		xx=160;
		c.fillText("Position of image: Between F and lense",5,400);
c.fillText("Nature of image: Virtual , Erect and diminished",5,450);

}

}

function update(){
 	if(a<700)
 	{
 	a+=2;
 	c=0;
 	d=0;
 	if(a<=330&& z==false)
 	{
 		
 	b=0;
    
 	
 	}
 	
 	if(a>330)
 	{
  z=true;
  b=Math.abs(b);
 		
 	    b+=0.8;
 	b=-b;
 	c--;
 d++;

 	}


 }
}
 function startFun()
{
	intervalCall=setInterval(function(){
		update();
	  draw(a,b,c,d);
	
},10);
}

