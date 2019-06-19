var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth*3/4;
canvas.height=window.innerHeight;
var flag=false;
var a=0,b=0,c=0,d=0,e=0,z=false,x11,y11,y22,y33,y44,y55,convex=0,concave=0,c11,c22,c33, intervalCall=0;
var x111,y111,xxx1,yyy1;
var x1=20,y1=240,y2=240,y3=280,y4=320,y5=350,x,y,xx,xxx,yyy,la,xx1,yy1;
var c=canvas.getContext('2d');
function concaveMirror(){
			document.getElementById('cx').innerHTML='<select id="cxFL" onchange="chooseFL()"><option value="0">ኣካል ዝቅመጠሉ ቦታ</option> <option value="1">ካብ ማእከላይ ነጥቢ ርሒቁ እንትቕመጥ</option><option value="2">ኣብ ማእከላይ ነጥቢ እንትቕመጥ</option><option value="3">ኣብ መንጎ ማእከላይ ነጥቢን ኣ.ነን እንትቕመጥ</option><option value="4"> ኣብ ኣካቢ ነጥቢ እንትቕመጥ</option><option value="5">ኣብ መንጎ ሌንስን ኣካቢ ነጥቢን እንትቕመጥ</option></select>';
	document.getElementById('cv').innerHTML='';
	document.getElementById('b1').innerHTML='<button onclick="stopFun()" id="stpbtn" > Stop</button>';
	document.getElementById('b2').innerHTML='<button onclick="initConcave()" id="rstbtn" > Reset</button>';
	document.getElementById('b3').innerHTML='<button onclick="startFun()" id="strbtn" > Start</button>';
	document.getElementById('b4').innerHTML='<button onclick="resetFun()" id="Home" > Home</button>';
	document.getElementById('conv').innerHTML='';
	document.getElementById('conc').innerHTML='';

	init();
function init(){
var c=canvas.getContext('2d');
	c.font='50px Algerian';
c.fillText("ዓሚቕ ምስትያት",200,50);// concave mirror
c.font='20px Times new Roman';
c.beginPath();
c.lineWidth=7;
c.strokeStyle='#5cffff';
c.ellipse(275, 280, 100, 60, Math.PI/2  , 0,  Math.PI,true);
c.stroke();
c.lineWidth=1;
c.fillStyle='black';
c.beginPath();
c.fillText("ማ",125,270);//writing focal length
c.arc(125,280,5, 0, Math.PI*2);
c.stroke();
c.fill();

c.fillText("ኣ.ነ",225,270);
c.beginPath();
c.arc(225,280,5, 0, Math.PI*2);
c.stroke();
c.fill();
c.beginPath();
c.fillText("ሕ",330,270);
c.arc(335,280,5, 0, Math.PI*2);
c.stroke();
c.fill();
}
this.stopFun=function()
{
		clearInterval(intervalCall);

}
this.initConcave=function(){
	var c=canvas.getContext('2d');

	c.clearRect(0, 0, canvas.width, canvas.height);
   flag=false;
clearInterval(intervalCall);
c.clearRect(0, 0, canvas.width, canvas.height);
     a=0;b=0;c=0;d=0;e=0;z=false;
concaveMirror();

}


 this.resetFun=function(){
	
clearInterval(intervalCall);
var c=canvas.getContext('2d');
            document.getElementById('cxFL').value=0;
c.clearRect(0, 0, canvas.width, canvas.height);
		document.getElementById('conv').innerHTML='<p id="conv"><button onclick="concaveMirror()" id="convex" >ዓሚቕ ምስትያት</button></p>';
       		document.getElementById('conc').innerHTML='<p id="conc"><button onclick="convexMirror()" id="concave" >ኮባር ምስትያት</button></p>';
document.getElementById('b1').innerHTML='';
document.getElementById('b2').innerHTML='';
document.getElementById('b3').innerHTML='';
document.getElementById('b4').innerHTML='';
		document.getElementById('cx').innerHTML='';

}



function draw( i, y10,x,y){
	var c=canvas.getContext('2d');

//drawing arrow
c.lineWidth=1;
c.beginPath();
c.moveTo(xx,y3);
c.lineTo(xx,y1+15);
c.moveTo(xx-5,y1+15);
c.lineTo(xx,y1);
c.lineTo(xx+5,y1+15);
c.fill();
c.stroke();

c.setLineDash([]);
if(i<=305&& z==false)// drawing before refraction
 	{
 		x11=x1+i;
 		y11=y1+y10;
 		
 		x111=x11;
 		y111=y11;
 		xx1=xx+x;
 		yy1=y1+y;
 		xxx1=xx1;
 		yyy1=yy1;
 	
	
c.beginPath();
c.moveTo(x1,y1);
c.lineTo(x11,y11);

c.moveTo(x1,y3);
c.lineTo(20+305,y3);
c.strokeStyle='red';

c.stroke();
if(convex==1||convex==2||convex==3){
if(convex==3)
{
	c.beginPath();
c.moveTo(xx-15,y1-12);//drawing the shifting line 
c.lineTo(xx1-15,yy1-12);
c.strokeStyle='red';
c.stroke();
}
else
{
c.beginPath();
c.moveTo(xx,y1);//drawing the shifting line 
c.lineTo(xx1,yy1);
c.strokeStyle='red';
c.stroke();
}

c.stroke();
}
}
else if(i>0 &&z==true)//drawing after refraction
{
	xx1=xx+x;
 		yy1=y1+y;
	    x11=x1+i;
 		y11=y1+y10;
 		y33=y3;
 		
c.moveTo(x111,y111);
c.lineTo(x11,y11);
c.moveTo(x111,y33);
c.lineTo(x11,y3);
c.strokeStyle='red';
c.stroke();
if(convex==1||convex==2||convex==3){
	if(convex==3){
c.moveTo(xxx1-15,yyy1-12);//drawing the shifting line 
c.lineTo(xx1-15,yy1-12);
c.stroke();
}
else{
	c.moveTo(xxx1,yyy1);//drawing the shifting line 
c.lineTo(xx1,yy1);
c.stroke();
}
}
if(convex==4){
c.moveTo(xx+85,y1-37);//drawing the shifting line 
c.lineTo(0,330);
c.stroke();

	}
	if(convex==5){
c.moveTo(xx+100,y1-25);//drawing the shifting line 
c.lineTo(0,310);
c.moveTo(x111,y111);//drawing the shifting line 
c.lineTo(xx+100,y1-25);
 	c.setLineDash([10, 10]);
 	c.stroke();
 	c.beginPath();
c.moveTo(325,280);//drawing the shifting line 
c.lineTo(425,280);
// c.beginPath();
c.moveTo(xx,y1);//drawing the shifting line 
c.lineTo(0,310);
 	c.setLineDash([]);
c.stroke();
	}
c.strokeStyle='red';
//c.stroke();
//c.closePath();
}
else
{
	c.canvas.getContext('2d');
	if(convex==5)
	{
		c.moveTo(xxx ,y3);
	c.lineTo(xxx, y3+la);
	c.moveTo(xxx-5 ,y3+la);
	c.lineTo(xxx, y3+la-15);
	c.lineTo(xxx+5, y3+la);
	}
	else if(convex==1||convex==2||convex==3){
	c.moveTo(xxx ,y3);
	c.lineTo(xxx, y3+la);
	c.moveTo(xxx-5 ,y3+la);
	c.lineTo(xxx, y3+la+15);
	c.lineTo(xxx+5, y3+la);
}
	c.fill();
	c.strokeStyle='red';
	c.stroke();
	
}

}
 this.chooseFL=function(){
 			//clearInterval(intervalCall);
 			
var c=canvas.getContext('2d');
convex=document.getElementById('cxFL').value;//choose the value of focal length
initConcave();
	
	c.font='25px Times new roman';
	c.fillStyle='black';
	if(convex==1)
	{
		xxx=160;
		xx=80;
		y1=220;
c11=1.9;
c22=4;
c33=1.6;
xx=80;
la=25;
c.fillText("ኣካል ዝቅመጠሉ ቦታ: ካብ ማእከላይ ነጥቢ ርሒቁ እንትቕመጥ",5,400);
c.fillText("ተፈጥሮ ምስሊ: ህልዊ ፣ ግልቡጥ ፣ ደቂቕ ፣ ኣብ መንጎ ኣካቢ ነጥብን ማእከላይ ነጥብን ይፍጠር",5,450);
c.strokeStyle='black';
//c.fillText("Position of image: between F and 2F",5,320);

	}
	if(convex==2)
	{
		xxx=125;
		
		xx=125;
		y1=240;
c11=1.3;
c22=8.5;
c33=3.4;
xx=125;
la=25;

c.fillText("ኣካል ዝቅመጠሉ ቦታ: ኣብ ማእከላይ ነጥቢ እንትቕመጥ",5,400);
c.fillText("ተፈጥሮ ምስሊ:ህልዊ ፣ ግልቡጥ ፣ ማዕረ  ፣ ኣብ ማእከላይ ነጥቢ ይፍጠር",5,450);
c.strokeStyle='black';
	}
	if(convex==3)
	{
		la=50;
		xxx=60;
		
		xx=175;
		y1=240;
c11=1.3;
c22=6.5;
c33=5;
c.fillText("ኣካል ዝቅመጠሉ ቦታ: ኣብ መንጎ ኣ.ነን ማእከላይ ነጥብን እንትቕመጥ",5,400);
c.fillText("ተፈጥሮ ምስሊ: ህልዊ ፣ ግልቡጥ ፣ ዝዓበየ  ፣ ኣብ ድሕሪ ማእከላይ ነጥቢ ይፍጠር",5,450);
c.strokeStyle='black';
	}
	if(convex==4)
	{
		
		
		xx=225;
		y1=240;
		c11=1.3;
c22=5;
c33=2;

c.fillText("ኣካል ዝቅመጠሉ ቦታ:  ኣብ ኣካቢ ነጥቢ እንትቕመጥ",5,400);
c.fillText("ተፈጥሮ ምስሊ: ምስሊ ኣይረአን",5,450);
c.strokeStyle='black';
	}
	if(convex==5){
		xxx=380;
		la=-48;

xx=280;
y1=240;
c11=1.3;
c22=5;
c33=4;
c.fillText("ኣካል ዝቅመጠሉ ቦታ: ኣብ መንጎ ምስትያትን ኣካቢ ነጥቢን እንትቕመጥ",5,400);
c.fillText("ተፈጥሮ ምስሊ: ሓሳባዊ ፣ ቀጥ ዝበለ ፣ ካብ ኣካል ዝዓበየ ፣ ኣብ ድሕሪ ምስትያት ይፍጠር",5,450);
c.strokeStyle='black';
	}



}

function update() {
 	if(a<650)
 	{

 	
 	
 	if(a<=305&& z==false)
 	{
 		if(Math.round(xx1)<=325)
 		{
 		 c+=c22;
         d+=c33;	
 		}
   
 		a+=3.2;
 	b=0;
    }
 	else if(a>305||z==true)
 	{
 		if(a>=0){
 			c-=c22;
     d+=0;
 		z=true;
     
 		a-=3.2;
 	    b+=c11;
 	    
 	}	}
 	}
 	
 }
 
 
 this.startFun=function()
{    if(convex!=0&&flag==false){
	flag=true;
	intervalCall=setInterval(function(){
		update();
	draw(a,b,c,d);
	
},10);
}
 }
}
 var x111,y111,xx,xxx,intervalCall=0,xx1,yy1,x=0,y=0,z=0;
	
function convexMirror()// convex Mirror
{
a=0;b=0;c=0;d=0;
var x1=20,y1=230,y2=240,y3=280,h1,h2;
			document.getElementById('cv').innerHTML='<select id="cvFL" onchange="chooseFL()"><option value="0">ኣካል ዝቅመጠሉ ቦታ ምረጽ</option><option value="1">ኣብ ዝኮነ ቦታ ኣብ ድሕሪ ምስትያት እንትቕመጥ</option><option value="2">ኣብ ዝኮነ ቦታ ኣብ ድሕሪ ምስትያት እንትቕመጥ</option><option value="3">ኣብ ዝኮነ ቦታ ኣብ ድሕሪ ምስትያት እንትቕመጥ</option></select>';

	document.getElementById('b1').innerHTML='<button onclick="stopFun()" id="stpbtn" > Stop</button>';
	document.getElementById('b2').innerHTML='<button onclick="initConvex()" id="rstbtn" > Reset</button>';
	document.getElementById('b3').innerHTML='<button onclick="startFun()" id="strbtn" > Start</button>';
			document.getElementById('b4').innerHTML='<button onclick="resetFunv()" id="Home" > Home</button>';
		document.getElementById('cx').innerHTML='';

document.getElementById('conv').innerHTML='';
		document.getElementById('conc').innerHTML='';

var c=canvas.getContext('2d');
c.font='50px Algerian';
initcv();
function initcv(){
	var c=canvas.getContext('2d');
	c.font='50px Algerian';
	c.fillText("ኮባር ምስትያት",200,50);
c.font='20px Times new Romans';

c.beginPath();
c.strokeStyle='#5cffff';
c.lineWidth=10;
c.ellipse(395, 280, 100, 60, Math.PI/2  , Math.PI,Math.PI*2  ,true);
c.stroke();
c.lineWidth=1;
c.fillStyle='black';
c.beginPath();

c.fillText("ኣ.ነ",425,270);
c.arc(425,280,5, 0, Math.PI*2);
c.stroke();
c.fill();
c.beginPath();

c.fillText("ማ",525,270);
c.arc(525,280,5, 0, Math.PI*2);
c.stroke();
c.fill();

c.beginPath();
c.fillText("ሕ",330,270);
c.arc(335,280,5, 0, Math.PI*2);
c.stroke();
c.fill();

}
this.stopFun=function()
{
		clearInterval(intervalCall);

}
this.resetFunv=function(){
	
clearInterval(intervalCall);
var c=canvas.getContext('2d');

            document.getElementById('cvFL').value='0';
c.clearRect(0, 0, canvas.width, canvas.height);
		document.getElementById('conv').innerHTML='<p id="conv"><button onclick="concaveMirror()" id="convex" >ዓሚቕ ምስትያት</button></p>';
      document.getElementById('conc').innerHTML='<p id="conc"><button onclick="convexMirror()" id="concave" >ኮባር ምስትያት</button>';
document.getElementById('b1').innerHTML='';
document.getElementById('b2').innerHTML='';
document.getElementById('b3').innerHTML='';
document.getElementById('b4').innerHTML='';
		document.getElementById('cv').innerHTML='';


}
this.initConvex=function(){
	var c=canvas.getContext('2d');

	c.clearRect(0, 0, canvas.width, canvas.height);

clearInterval(intervalCall);
   flag=false;

c.clearRect(0, 0, canvas.width, canvas.height);
     a=0;b=0;c=0;d=0;z=false;
convexMirror();

}
function draw( i, y10,xx12,yy12){
	var c=canvas.getContext('2d');

c.lineWidth=1;
c.beginPath();
c.moveTo(x1,y3);
c.lineTo(x1+650,y3);
c.stroke();
//drawing arrow
c.beginPath();
c.strokeStyle='red';
c.moveTo(xx,y3+50);
c.lineTo(xx,y1+15);
c.stroke();
c.beginPath();
c.moveTo(xx-5,y1+15);
c.lineTo(xx,y1);
c.lineTo(xx+5,y1+15);
c.fill();
c.fillStyle='red';
c.stroke();
c.closePath();
c.strokeStyle='red';
if(i<330&& z==false)
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
	 c.strokeStyle='black';

	    
 		y11=y1+y10;
 		
 		
 		y33=y3;
 		if(y11<280){
 	
 			x11=x1+i;
 			xx1=x11;
 			yy1=y11;c.beginPath();
 			c.strokeStyle='red';
 			c.moveTo(x111,y111);
 			c.lineTo(x111-70,y111-40);
 			c.stroke();
 			c.beginPath();
 			c.setLineDash([5,5]);
c.moveTo(x111,y111);
c.lineTo(x11,y11);
c.stroke();
}
else if(y11>280&&x11>350)
{

x11=xx1+xx12;
console.log(x11);
console.log(y11);
c.beginPath();
c.setLineDash([5,5]);
c.moveTo(xx1,yy1);
c.lineTo(x11,y11);
c.stroke();
}
else if(y11>280||x11<350)
{
x11=xx1+xx12;
console.log(xx12);
c.moveTo(x11,y3+50);
c.lineTo(x11-70,y3+50+40);

c.moveTo(x11,y3+50);
c.lineTo(x1,y3+50);
c.stroke();
}
c.strokeStyle='red';


c.beginPath();
 			c.setLineDash([5,5]);
//shifting line
c.moveTo(xx,y1);
c.lineTo(525,280);

c.moveTo(xx,y3+50);
c.lineTo(525,y3);
c.stroke();

c.beginPath();
c.setLineDash([3,2]);
c.moveTo(xxx,y3+y);//drawing arrow
c.lineTo(xxx,y3-(y-5));
c.stroke();
c.beginPath();
c.moveTo(xxx-3,y3-(y-15));
c.lineTo(xxx,y3-(y-5));
c.lineTo(xxx+3,y3-(y-15));
c.fill();
 	c.setLineDash([]);

c.stroke();



}
}
 this.chooseFL=function(){
 	 			//clearInterval(intervalCall);
 	 			console.log(a);
 	 			console.log(b);
 			console.log(c);
 			console.log(d);
 	 			var c=canvas.getContext('2d');
concave=document.getElementById('cvFL').value;
                initConvex();
	
c.fillStyle='black';
c.font='25px times new roman';
if(concave==1)
{
xxx=400;
y=20;
		xx=160;
		c.fillText("ኣካል ዝቅመጠሉ ቦታ: ኣብ ዝኮነ ቦታ ኣብ ድሕሪ ምስትያት እንትቕመጥ",5,400);
c.fillText("ተፈጥሮ ምስሊ: ሓሳባዊ ፣ ቀጥ ዝበለን ዝዓበየን ምስሊ ይፍጠር ",5,450);

}

if(concave==2){
	y=23;
	xxx=395;
		xx=200;
		c.fillText("ኣካል ዝቅመጠሉ ቦታ: ኣብ ዝኮነ ቦታ ኣብ ድሕሪ ምስትያት እንትቕመጥ",5,400);
c.fillText("ተፈጥሮ ምስሊ: ሓሳባዊ ፣ ቀጥ ዝበለን ዝዓበየን ምስሊ ይፍጠር ",5,450);

}
if(concave==3){
	y=30;
	xxx=385;
		xx=270;
		c.fillText("ኣካል ዝቅመጠሉ ቦታ: ኣብ ዝኮነ ቦታ ኣብ ድሕሪ ምስትያት እንትቕመጥ",5,400);
c.fillText("ተፈጥሮ ምስሊ: ሓሳባዊ ፣ ቀጥ ዝበለን ዝዓበየን ምስሊ ይፍጠር ",5,450);


}

}

function update(){
 	if(a<700)
 	{
 	a+=2;
 	d=0;
 	if(a<=330&& z==false)
 	{
 		c=0;
 	b=0;
 	}
 	
 	if(a>330)
 	{
 z=true;
 b+=1.3;
 if(y11>280&&x11>350)
 c-=2;
if(y11>280&&x11<350)
	 {
	 	c-=2;
 b-=1.3;}
 d+=1;

 	}


 }
}
  this.startFun=function(){
  	if(concave!=0&&flag==false){
	intervalCall=setInterval(function(){
		update();
	  draw(a,b,c,d);
	
},10);
   flag=true;}


}
}