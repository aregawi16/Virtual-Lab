var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth/2;
canvas.height=window.innerHeight;
var c=canvas.getContext('2d');
var intervalCall=0;
var convex=0;
var flag=false;
var a=0,b=0,c=0,d=0,e=0,z=false,x11,y11,y22,y33,y44,y55,c11,c22,c33, intervalCall;
var x111,y111,y222,y333,y444,y555,vx=0,vy=0,vx1=0,vy1=0,vyy=0,vxx=0,vxx1=0,vyy1=0;
var x1=20,y1=240,y2=240,y3=280,y4=320,y5=350,x,y,xx=80,xxx,yyy,la;
function convexLense(){ 
	

	var c=canvas.getContext('2d');
		
	document.getElementById('cx').innerHTML='<select id="cxFL" onchange="chooseFL()"><option value="0">ኣካል ዝቅመጠሉ ቦታ</option> <option value="1">ካብ 2ኣ.ነ ርሒቁ እንትቕመጥ</option><option value="2">ኣብ 2ኣ.ነ እንትቕመጥ</option><option value="3">ኣብ መንጎ ኣ.ነን 2ኣ.ነን እንትቕመጥ</option><option value="4"> ኣብ ኣካቢ ነጥቢ እንትቕመጥ</option><option value="5">ኣብ መንጎ ሌንስን ኣካቢ ነጥቢን እንትቕመጥ</option></select>';
console.log('ooooo');
	document.getElementById('cv').innerHTML='';
	document.getElementById('b1').innerHTML='<button onclick="stopFun()" id="stpbtn" > ኣቋርጽ</button>';
	document.getElementById('b2').innerHTML='<button onclick="initConvex()" id="rstbtn" > Reset</button>';
		document.getElementById('b4').innerHTML='<button onclick="resetFun()" id="Home" > Home</button>';
	document.getElementById('b3').innerHTML='<button onclick="startFun()" id="strbtn" > ጀምር</button>';
	document.getElementById('conv').innerHTML='';
		document.getElementById('conc').innerHTML='';

	init();
function init(){
var c=canvas.getContext('2d');
console.log('iiiiiii');

 c.clearRect(0,0, canvas.width , canvas.height);
	c.font='50px Algerian';
c.fillStyle='black';
c.fillText("ኣካቢ ሌንስ",200,50);// convex lense
c.font='20px Times new Roman';

c.fillStyle='red';
c.beginPath();
c.fillStyle='#5cffff';
c.ellipse(325,280, 40,100,Math.PI, 0, Math.PI*2);
c.fill();
c.strokeStyle='red';
c.beginPath();
//c.setLineDash([10,10]);// drawing the red center line
c.moveTo(325,180);
c.lineTo(325,380);
c.stroke();
c.setLineDash([]);
c.beginPath();
c.fillStyle='black';
c.fillText("2ኣ.ነ",125,270);//writing focal length
c.arc(125,280,5, 0, Math.PI*2);
c.stroke();
c.fill();

c.fillText("ኣ.ነ",225,270);
c.beginPath();
c.arc(225,280,5, 0, Math.PI*2);
c.stroke();
c.fill();
c.beginPath();
c.moveTo(x1,y3);
c.lineTo(20+650,y3);

c.stroke();

c.beginPath();

c.fillText("ኣ.ነ",425,270);
c.arc(425,280,5, 0, Math.PI*2);
c.stroke();
c.fill();

c.beginPath();

c.fillText("2ኣ.ነ",525,270);
c.arc(525,280,5, 0, Math.PI*2);
c.stroke();
c.fill();

c.beginPath();

c.fillStyle='red';
c.fillText("ሕ",330,270);
c.arc(325,280,5, 0, Math.PI*2);
c.stroke();
c.fill();

}
this.stopFun=function()
{
		clearInterval(intervalCall);

}
this.initConvex=function(){
	var c=canvas.getContext('2d');
console.log(convex);
	c.clearRect(0, 0, canvas.width, canvas.height);

clearInterval(intervalCall);
c.clearRect(0, 0, canvas.width, canvas.height);
   //  document.getElementById('cxFL').value=0;
   flag=false;
   a=0;b=0;c=0;d=0;e=0;z=false; 
vx=0;vy=0;vx1=0;vy1=0;vyy=0;vxx=0;vxx1=0;vyy1=0;
 var xxx;
convexLense();

}

 this.resetFun=function(){
 	var c=canvas.getContext('2d');

	c.clearRect(0, 0, canvas.width, canvas.height);

clearInterval(intervalCall);
c.clearRect(0, 0, canvas.width, canvas.height);

     document.getElementById('cxFL').value=0;
     document.getElementById('cx').innerHTML='';
          document.getElementById('cv').innerHTML='';

                    document.getElementById('cv').innerHTML='';


		document.getElementById('conv').innerHTML='<button onclick="convexLense()" id="convex" >ኣካቢ ሌንስ</button>';
       		document.getElementById('conc').innerHTML='<button onclick="concaveLense()" id="concave" >በታኒ ሌንስ</button>';
document.getElementById('b1').innerHTML='';
document.getElementById('b2').innerHTML='';
document.getElementById('b3').innerHTML='';
document.getElementById('b4').innerHTML='';

}



function draw( i, y10,x,y){
	
	var c=canvas.getContext('2d');
//drawing arrow
c.beginPath();
c.moveTo(xx,y3);
c.lineTo(xx,y1+15);
c.moveTo(xx-5,y1+15);
c.lineTo(xx,y1);
c.lineTo(xx+5,y1+15);
c.fill();
c.stroke();
c.moveTo(xx,y1);//drawing the shifting line 
c.lineTo(xx+x,y1+y);
c.stroke();
console.log(a);
// create center or orgin 


if(i<=310&& z==false)// drawing before refraction
 	{
 		
 		x11=x1+i;
 		y11=y1+y10;
 		
 		x111=x11;
 		y111=y11;
 		
c.beginPath();
c.moveTo(x1,y1);
c.lineTo(x11,y11);

c.moveTo(x1,y3);
c.lineTo(20+650,y3);

c.stroke();
}
else if(i>310 &&i<650 &&z==true)//drawing after refraction
{
	console.log(convex);

	    x11=x1+i;
 		y11=y1+y10;
 		
 		y33=y3;


  		if(convex==5||convex==4&&(xx+vx1>100)){
  			
 		c.beginPath();
 	c.setLineDash([10, 10]);
 	c.moveTo(x111,y111);//virtual	
 	c.lineTo(x111+vx,y111+vy);
 	c.moveTo(xx,y1);
 	c.lineTo(xx+vx1,y1+vy1);
c.strokeStyle='red';
 	c.stroke();
 	
 }
 	 		c.beginPath();
 	 		c.setLineDash([]);

c.moveTo(x111,y111);
c.lineTo(x11,y11);
c.moveTo(x111,y33);
c.lineTo(x11,y3);
c.strokeStyle='black';
c.stroke();
c.closePath();
}
else
{
	c=canvas.getContext('2d');
	if(convex==1||convex==2||convex==3){
	c.moveTo(xxx ,y3);
	c.lineTo(xxx, y3+la);
	c.moveTo(xxx-5 ,y3+la);
	c.lineTo(xxx, y3+la+15);
	c.lineTo(xxx+5, y3+la);
	c.fill();
	c.strokeStyle='red';
	c.stroke();}
	if(convex==5)
	{
	c.moveTo(220 ,y3);
	c.lineTo(220, y3-la);
	c.moveTo(215 ,y3-la);
	c.lineTo(220, y3-(la+15));
	c.lineTo(225, y3-la);
	c.fill();
	c.strokeStyle='red';
	c.stroke();
	}
	
}

}
 this.chooseFL=function(){
 	//clearInterval(intervalCall);
 	convex=document.getElementById('cxFL').value;
 	  initConvex();
 	
 	var c=canvas.getContext('2d');
	
	//choose the value of focal length
	c.font='25px times new roman';
	c.fillStyle='black';
	if(convex==1)
	{
		xxx=490;
		xx=80;
		y1=220;
c11=2;
c22=4;
c33=1;
xx=80;
la=25;
var c=canvas.getContext('2d');



c.fillText("ኣካል ዝቕመጠሉ ቦታ: ካብ 2ኣ.ነ ርሒቁ እንትቕመጥ",5,420);
c.fillText("ተፈጥሮ ምስሊ: ህልዊ , ግልቡጥን ደቂቕን እዩ",5,470);
c.strokeStyle='black';
//c.fillText("Position of image: between F and 2F",5,320);

	}
	if(convex==2)
	{
		xxx=525;
		
		xx=125;
		y1=240;
c11=1.3;
c22=10;
c33=2;
xx=125;
la=25;


c.fillText("ኣካል ዝቕመጠሉ ቦታ: ኣብ 2ኣ.ነ እንትቕመጥ ",5,420);
c.fillText("ተፈጥሮ ምስሊ: ህልዊ ፣ ግልቡጥ፣ ኣብ 2ኣ.ነ ይፍጠር ፣ማዕረ መጠን ኣለዎ",5,470);
c.strokeStyle='black';
	}
	if(convex==3)
	{
		la=63;
		xxx=615;
		
		xx=175;
		y1=240;
c11=1.3;
c22=7.5;
c33=2;


c.fillText("ኣካል ዝቕመጠሉ ቦታ: ኣብ መንጎ ኣ.ነን 2ኣ.ነን እንትቕመጥ",5,420);
c.fillText("ተፈጥሮ ምስሊ: ህልዊ ፣ግልቡጥ፣  ምስሊ ኣካል ይዓብይ፣ ካብ 2ኣ.ነ ዝረሓቀ ቦታ ይፍጠር",5,470);
c.strokeStyle='black';
	}
	if(convex==4)
	{
		
		
		xx=225;
		y1=240;
		c11=1.3;
c22=5;
c33=2;


c.fillText("ኣካል ዝቕመጠሉ ቦታ: ኣብ ኣካቢ ነጥቢ እንትቕመጥ",5,400);
c.fillText("ተፈጥሮ ምስሊ: ምስሊ ኣይረአን።",5,450);
c.strokeStyle='black';
	}
	if(convex==5){

xx=275;
y1=240;
c11=1.3;
c22=5;
c33=4;
la=70;

c.fillText("ኣካል ዝቕመጠሉ ቦታ:ኣብ መንጎ ሌንስን ኣካቢ ነጥቢን እንትቕመጥ",5,400);
c.fillText("ተፈጥሮ ምስሊ: ሓሳባዊ ፣ቀጥ ዝበለን ዓብዪ እዩ።",5,450);
c.strokeStyle='black';
	}



}

function update() {
 	if(a<650)
 	{

 	a+=3.2;
 	c+=c22;
     d+=c33;
 	if(a<=310&& z==false)
 	{
 		
 	b=0;
    
 	
 	}
 	
 	if(a>310)
 	{
 		z=true;
     
 		vx-=3.2;
 		vy-=c11;
 		vx1-=c22;
 		vy1-=c33;
 	    b+=c11;
 	    
 	}
 }
 
 

  
 }
 this.startFun=function()
{ console.log(convex);
	if(convex!=0&&flag==false){
		flag=true;
	intervalCall=setInterval(function(){
		update();
	draw(a,b,c,d);
	
},10);
}}
 }
 var a=0,b=0,c=0,d=0,e=0,z=false,x11,y11,y22,y33,concave=0;
var x111,y111,y222,y333,y444,y555,xx,xxx;
var x1=20,y1=230,y2=240,y3=280;
function concaveLense()// concave lense
{
		var c=canvas.getContext('2d');

	 c.clearRect(0,0, canvas.width , canvas.height);
document.getElementById('cv').innerHTML='<select id="cvFL" onchange="chooseFL()"><option value="0">ኣካል ዝቕመጠሉ ቦታ:</option><option value="1"> ኣብ ዝኮነ ቦታ ኣብ ድሕሪ ሌንስ እንትቕመጥ</option><option value="2">ኣብ ዝኮነ ቦታ ኣብ ድሕሪ ሌንስ እንትቕመጥ</option><option value="3">ኣብ ዝኮነ ቦታ ኣብ ድሕሪ ሌንስ እንትቕመጥ</option></select>';
	document.getElementById('b1').innerHTML='<button onclick="stopFun()" id="stpbtn" > Stop</button>';
			document.getElementById('b4').innerHTML='<button onclick="resetFunv()" id="Home" > Home</button>';
	document.getElementById('b2').innerHTML='<button onclick="initConcave()" id="rstbtn" > Reset</button>';
	document.getElementById('b3').innerHTML='<button onclick="startFun()" id="strbtn" > Start</button>';
		document.getElementById('cx').innerHTML='<div id="p1">Position of image: Between F and lense<br>Nature of image</div>';

document.getElementById('conv').innerHTML='';
		document.getElementById('conc').innerHTML='';
		
var c=canvas.getContext('2d');
c.font='50px Algerian';
initcv();
function initcv(){
	var c=canvas.getContext('2d');
	c.font='50px Algerian';
	c.fillStyle='black';
	c.fillText("በታኒ ሌንስ",200,50);
c.font='20px Times new Romans';
c.beginPath();
c.fillStyle='#5cffff';
c.ellipse(255,280, 100,40,Math.PI/2,0, Math.PI,true);
c.ellipse(415,280, 100,40,Math.PI/2,Math.PI, Math.PI*2,true);
c.closePath();
c.fill();

c.fillStyle='black';
c.stroke();
c.beginPath();
c.fillText("2ኣ.ነ",125,270);//writing focal length
c.arc(125,280,5, 0, Math.PI*2);
c.stroke();
c.fill();

c.fillText("ኣ.ነ",225,270);
c.beginPath();
c.arc(225,280,5, 0, Math.PI*2);
c.stroke();
c.fill();

c.beginPath();

c.fillText("ኣ.ነ",425,270);
c.arc(425,280,5, 0, Math.PI*2);
c.stroke();
c.fill();

c.beginPath();

c.fillText("2ኣ.ነ",525,270);
c.arc(525,280,5, 0, Math.PI*2);
c.stroke();
c.fill();

c.beginPath();

c.fillStyle='red';
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
c.clearRect(0, 0, canvas.width, canvas.height);
	document.getElementById('cvFL').value=0;
    c.setLineDash([0, 0]);
    document.getElementById('cv').innerHTML='';
	document.getElementById('cx').innerHTML='';
	document.getElementById('conv').innerHTML='<button onclick="convexLense()" id="convex" >ኣካቢ ሌንስ</button>';
    document.getElementById('conc').innerHTML='<button onclick="concaveLense()" id="concave" >በታኒ ሌንስ</button>';
document.getElementById('b1').innerHTML='';
document.getElementById('b2').innerHTML='';
document.getElementById('b3').innerHTML='';
document.getElementById('b4').innerHTML='';

}
this.initConcave=function(){
	var c=canvas.getContext('2d');

	c.clearRect(0, 0, canvas.width, canvas.height);

clearInterval(intervalCall);
c.clearRect(0, 0, canvas.width, canvas.height);
flag=false;
a=0;b=0;c=0;d=0;e=0;z=false; 
vx=0;vy=0;vx1=0;vy1=0;vyy=0;vxx=0;vxx1=0;vyy1=0;

     document.getElementById('cvFL').value=0;
concaveLense();

}
function draw( i, y10,xx12,yy12){
	var c=canvas.getContext('2d');

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

c.setLineDash([0, 0]);

c.beginPath();
c.moveTo(xx,y1);//shifting line
c.lineTo(xx+400,y1+120);
c.moveTo(xxx,y3);
c.lineTo(xxx,y3-7);
c.moveTo(xxx-3,y3-7);
c.lineTo(xxx,y3-17);
c.lineTo(xxx+3,y3-7);
c.fill();
c.stroke();



}
}
 this.chooseFL=function(){
 	clearInterval(intervalCall);
 	var c=canvas.getContext('2d');


	concave=document.getElementById('cvFL').value;

	initConcave();
c.font='25px Times new roman';
	c.fillStyle='black';
if(concave==1)
{
xxx=267;
xx=160;
c.fillText("ኣካል ዝቕመጠሉ ቦታ: ኣብ ዝኮነ ቦታ ኣብ ድሕሪ ሌንስ እንትቕመጥ",5,400);
c.fillText("ተፈጥሮ ምስሊ: ሓሳባዊ ፣ ቀጥ ዝበለን ደቂቅን እዩ።",5,450);
}
if(concave==2)
{
xxx=267;
xx=160;
c.fillText("ኣካል ዝቕመጠሉ ቦታ: ኣብ ዝኮነ ቦታ ኣብ ድሕሪ ሌንስ እንትቕመጥ",5,400);
c.fillText("ተፈጥሮ ምስሊ: ሓሳባዊ ፣ ቀጥ ዝበለን ደቂቅን እዩ።",5,450);
}
if(concave==3)
{
xxx=267;
xx=160;
c.fillText("ኣካል ዝቕመጠሉ ቦታ: ኣብ ዝኮነ ቦታ ኣብ ድሕሪ ሌንስ እንትቕመጥ",5,400);
c.fillText("ተፈጥሮ ምስሊ: ሓሳባዊ ፣ ቀጥ ዝበለን ደቂቅን እዩ።",5,450);
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
  this.startFun=function(){
  	if(concave!=0&&flag==false){
  		flag=true;
	intervalCall=setInterval(function(){
		update();
	  draw(a,b,c,d);
	
},10);

}}
}