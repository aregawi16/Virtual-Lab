var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c=canvas.getContext('2d');
c.font='30px Times new Roman';
var i=0, j=0,density=0.001,massw,masso=0,volume11,h11,hm=0,k;
var pressCall=0,f1=0,f2=0,h1=16,h2=16,r1=4,r2=9,hc1,hc2,hc,vc1,vc2,height=0;
var car,area1=(Math.PI*Math.pow(r1,2)).toFixed(2);
var area2=(Math.PI*Math.pow(r2,2)).toFixed(2);
var volume1=Math.PI*Math.pow(r1,2)*h1;
var volume2=Math.PI*Math.pow(r2,2)*h2;
vc1=Math.PI*Math.pow(r1,2)*1;
vc2=volume2+vc1;
hc2=vc2/(Math.PI*Math.pow(r2,2));
var a=true,k=0;
	document.getElementById('stop').innerHTML='<button onclick="startHydrolic()" id="start">Start</button>';
// function getMass()
// {
// 	f1=document.getElementById('enterMass').value;
for(k=0;k<2;k++)
pushingForce();
function pushingForce(){//**************************pushing force
	c.fillStyle='red';
	if(f2==300)
	{
		console.log(56789)
car=new Image();//************ drawing car
car.src='car1.png';
c.drawImage(car,430,180-j,173,49);
c.fillText("ሓ2="+f2+"ኒ",600,220-j);
f1=(area1*f2)/area2+masso*10; 

	c.beginPath();
	c.fillRect(110,165+i,80,40);
	c.fillText("ሓ1="+f1.toFixed(2)+"ኒ",200,190+i);
}
	else if(f2==400)
	{
		f1=(area1*f2)/area2+masso*10; 
	//c.fillText("ሓ1="+f1.toFixed(2)+"kg",200,190+i);

car=new Image();//************ drawing car
car.src='car.png';
c.drawImage(car,430,157-j,157,69);
c.fillText("ሓ2="+f2+"kg",600,220-j);
f1=(area1*f2)/area2+masso*10; 	c.beginPath();
	c.fillRect(100,165+i,100,40);
	c.fillText("ሓ1="+f1.toFixed(2)+"ኒ",210,190+i);
	}
	else if(f2==500)
	{
				f1=(area1*f2)/area2+masso*10; 
car=new Image();//************ drawing car
car.src='car3.png';
c.drawImage(car,400,157-j,216,90);
c.fillText("ሓ2="+f2+"ኒ",650,220-j);
	c.beginPath();
	c.fillRect(100,145+i,100,60);
	c.fillText("ሓ1="+f1.toFixed(2)+"ኒ",210,190+i);

	}
	else if(f2==600)
	{
			f1=(area1*f2)/area2+masso*10; 
car=new Image();//************ drawing car
car.src='car4.png';
c.drawImage(car,400,157-j,244,94);
c.fillText("ሓ2="+f2+"ኒ",650,220-j);
	c.beginPath();
	c.fillRect(90,145+i,120,60);
	c.fillText("ሓ1="+f1.toFixed(2)+"ኒ",210,190+i);

	}
	if(f2==700)
	{
f1=(area1*f2)/area2+masso*10; 
car=new Image();//************ drawing car
car.src='car2.png';
c.drawImage(car,380,157-j,306,90);
c.fillText("ሓ2="+f2+"ኒ",600,170-j);
	c.beginPath();
	c.fillRect(90,135+i,120,70);
	c.fillText("ሓ1="+f1.toFixed(2)+"ኒ",210,190+i);


	}
}
function pushMass(){
	if(f2!=0){
if(masso==1)
{
	if(f2==300||f2==400){
	c.fillStyle='black';
	c.fillRect(130,145+i,30,20);
}
else if(f2==500||f2==600){
	c.fillStyle='black';
	c.fillRect(130,125+i,30,20);

	}
	else
	{
		c.fillStyle='black';
	c.fillRect(130,115+i,30,20);

	}

}
else if(masso==2)
{
if(f2==300||f2==400){
	c.fillStyle='black';
	c.fillRect(130,135+i,40,30);
}
else if(f2==500||f2==600){
	c.fillStyle='black';
	c.fillRect(130,115+i,40,30);

	}
	else
	{
		c.fillStyle='black';
	c.fillRect(130,105+i,40,30);

	}
}
else if(masso==3)
{
 if(f2==300||f2==400){
	c.fillStyle='black';
	c.fillRect(120,135+i,50,30);
}
else if(f2==500||f2==600){
	c.fillStyle='black';
	c.fillRect(120,115+i,50,30);

	}
	else
	{
		c.fillStyle='black';
	c.fillRect(120,105+i,50,30);

	}
}
else if(masso==4)
{
if(f2==300||f2==400){
	c.fillStyle='black';
	c.fillRect(120,135+i,60,30);
}
else if(f2==500||f2==600){
	c.fillStyle='black';
	c.fillRect(120,115+i,60,30);

	}
	else
	{
		c.fillStyle='black';
	c.fillRect(120,105+i,60,30);

	}
}
else if(masso==5)
{
if(f2==300||f2==400){
	c.fillStyle='black';
	c.fillRect(120,125+i,60,40);
}
else if(f2==500||f2==600){
	c.fillStyle='black';
	c.fillRect(120,105+i,60,40);

	}
	else
	{
		c.fillStyle='black';
	c.fillRect(120,95+i,60,40);

	}

}
}
}
function enterMass(){
              	masso=document.getElementById('enterMass').value;
              	resetMass();
   if(f2!=0){ 
if(masso==1)
{
	if(f2==300||f2==400){
	c.fillStyle='black';
	c.fillRect(130,145+i,30,20);
}
else if(f2==500||f2==600){
	c.fillStyle='black';
	c.fillRect(130,125+i,30,20);

	}
	else
	{
		c.fillStyle='black';
	c.fillRect(130,115+i,30,20);

	}

}
else if(masso==2)
{
if(f2==300||f2==400){
	c.fillStyle='black';
	c.fillRect(130,135+i,40,30);
}
else if(f2==500||f2==600){
	c.fillStyle='black';
	c.fillRect(130,115+i,40,30);

	}
	else
	{
		c.fillStyle='black';
	c.fillRect(130,105+i,40,30);

	}
}
else if(masso==3)
{
 if(f2==300||f2==400){
	c.fillStyle='black';
	c.fillRect(120,135+i,50,30);
}
else if(f2==500||f2==600){
	c.fillStyle='black';
	c.fillRect(120,115+i,50,30);

	}
	else
	{
		c.fillStyle='black';
	c.fillRect(120,105+i,50,30);

	}
}
else if(masso==4)
{
if(f2==300||f2==400){
	c.fillStyle='black';
	c.fillRect(120,135+i,60,30);
}
else if(f2==500||f2==600){
	c.fillStyle='black';
	c.fillRect(120,115+i,60,30);

	}
	else
	{
		c.fillStyle='black';
	c.fillRect(120,105+i,60,30);

	}
}
else if(masso==5)
{
if(f2==300||f2==400){
	c.fillStyle='black';
	c.fillRect(120,125+i,60,40);
}
else if(f2==500||f2==600){
	c.fillStyle='black';
	c.fillRect(120,105+i,60,40);

	}
	else
	{
		c.fillStyle='black';
	c.fillRect(120,95+i,60,40);

	}

}
}
else
{
alert("please first select the mass of 2nd cylinder");
		document.getElementById('enterMass').value=0;

}
}

function selectMass()//****************************select mass
{
		f2=document.getElementById('selectMass').value;
		resetHydroulic();
	c.fillStyle='red';
	if(f2==0)
		f1=0;

	else if(f2==300)
	{
		console.log(56789)
car=new Image();//************ drawing car
car.src='car1.png';

car.onload=function(){
c.drawImage(car,430,180-j,173,49);}

c.fillText("ሓ2="+f2+"ኒ",600,220-j);
f1=(area1*f2)/area2; 
if(f1>50&&f1<75)
{
	c.beginPath();
	c.fillRect(110,165+i,80,40);
	c.fillText("ሓ1="+f1.toFixed(2)+"ኒ",200,190+i);

}
}
	else if(f2==400)
	{
		f1=(area1*f2)/area2; 
	//c.fillText("ሓ1="+f1.toFixed(2)+"kg",200,190+i);

car=new Image();//************ drawing car
car.src='car.png';
car.onload=function(){
c.drawImage(car,430,157-j,157,69);}
c.fillText("ሓ2="+f2+"ኒ",600,220-j);
if(f1>75&&f1<90)
{
	c.beginPath();
	c.fillRect(100,165+i,100,40);
	c.fillText("ሓ1="+f1.toFixed(2)+"ኒ",210,190+i);

}
	}
	else if(f2==500)
	{
				f1=(area1*f2)/area2; 
car=new Image();//************ drawing car
car.src='car3.png';car.onload=function(){
c.drawImage(car,400,157-j,216,90);}
c.fillText("ሓ2="+f2+"ኒ",650,220-j);
if(f1>90&&f1<100)
{
	c.beginPath();
	c.fillRect(100,145+i,100,60);
	c.fillText("ሓ1="+f1.toFixed(2)+"ኒ",210,190+i);

}

	}
	else if(f2==600)
	{
				f1=(area1*f2)/area2; 
car=new Image();//************ drawing car
car.src='car4.png';car.onload=function(){
c.drawImage(car,400,157-j,244,94);}
c.fillText("ሓ2="+f2+"ኒ",650,220-j);
if(f1>100&&f1<120)
{
	c.beginPath();
	c.fillRect(90,145+i,120,60);
	c.fillText("ሓ1="+f1.toFixed(2)+"ኒ",210,190+i);

}

	}
	if(f2==700)
	{
				f1=(area1*f2)/area2; 
car=new Image();//************ drawing car
car.src='car2.png';car.onload=function(){
c.drawImage(car,380,157-j,306,90);}
c.fillText("ሓ2="+f2+"ኒ",600,150-j);
if(f1>120&&f1<140)
{
	c.beginPath();
	c.fillRect(90,135+i,120,70);
	c.fillText("ሓ1="+f1.toFixed(2)+"ኒ",210,190+i);

}

	}
		

}
function calculateArea(){
              		if(masso<=5&&masso>=0)
                masso=masso;
                   else{
            	masso=0;
            	alert("ዝኮነ ይኩን ኩጽሪ ትሕቲ 5 የእትዉ");
            	clearInterval(pressCall);
            	document.getElementById('stop').innerHTML='<button onclick="startHydrolic()" id="start">Start</button>';
}
              	massw=density*volume1;
              	massw-=masso;
              	volume11=massw/density;
              	h11=volume11/(Math.PI*Math.pow(r1,2));
              	h11=h1-h11;
              	
              	console.log(h11);
              
                   area1=(Math.PI*Math.pow(r1,2)).toFixed(2);
                   area2=(Math.PI*Math.pow(r2,2)).toFixed(2); 
                  f1=(area1*f2)/area2;   
                  //f1=+masso;
   
}

function drawHydroulic(){
	c.fillStyle='black';
	c.font="35px times new roman";
c.fillText("ሃይድሮሊክ ፕረስ(ሕጊ ፓስካል)",200,50);
c.beginPath();//drawing the first small cylinder 
c.lineWidth=2;
c.strokeStyle='#cc0000';
c.ellipse(150, 320, 40,10,0,Math.PI, Math.PI*2);//// beginning ellipse of cylinder 1
c.stroke();

c.beginPath();
c.strokeStyle='#cc0000';
c.fillStyle='#809fff';
c.moveTo(110,320);
c.lineTo(110,520);
c.moveTo(190,320);
c.lineTo(190,520);
c.closePath();
c.fill();
c.fillStyle='red';//********* calculating the area of small cylinder
c.font='25px times new roman';
c.fillText("ስ1="+area1+" ሳ.ሜ2",200,370);
c.stroke();
c.beginPath();
c.fillStyle='#ff6666';
c.ellipse(150, 520, 10,40,Math.PI/2,0, Math.PI*2);//****** ending ellipse of cylinder 1
c.fill();
c.stroke();
//**************************************** drawing the interconnection b/n cylinder
c.beginPath();
c.lineWidth=2;
c.strokeStyle='#cc0000';
c.moveTo(190,465);
c.lineTo(410,465);
c.moveTo(190,490);
c.lineTo(410,490);
c.stroke();
c.beginPath();//**********************************drawing the second great cylinder
c.lineWidth=2;
c.strokeStyle='#cc0000';
c.ellipse(500, 320, 90,20,0,Math.PI, Math.PI*2);//*****beginning ellipse of cylinder 2
c.stroke();
c.beginPath();
c.moveTo(410,320);
c.lineTo(410,520);
c.moveTo(590,320);
c.lineTo(590,520);
c.stroke();
c.fillStyle='red';//********* calculating the area of big cylinder
c.font='25px times new roman';
c.fillText("ስ2="+area2+" ሳ.ሜ2",600,420);
c.fill();
c.stroke();
c.beginPath();
c.fillStyle='#ff6666';
c.ellipse(500, 520, 20,90,Math.PI/2,0, Math.PI*2);//ending ellipse of cylinder 2
c.fill();
c.stroke();
//*********************************drawing car
  
c.clearRect(189,466,2,23);//*********************clearing  the line
c.clearRect(409,466,2,23);
c.beginPath();
c.fillStyle='#809fff';
c.fillRect(180,465,235,25);
c.fill();
}
drawHydroulic();
   hydroulicPress();

function hydroulicPress(){
	 //****************calculating pascal law
	 c.fillStyle='black';
	 c.fillText("ሓ1/ስ1=ሓ2/ስ2",750,100);
	 	 c.fillText((f1).toFixed(2)+"/"+area1+"="+f2+"/"+area2,750,140);
	 	 c.fillText((f1/area1).toFixed(2)+"="+(f2/area2).toFixed(2),750,180);



	  
	         //*********************First Cylinder
	         c.font='25px times new roman';
	         c.fillStyle='red';
	 
c.beginPath();//*************** drawing the pusher force of first cylinder
strokeStyle='red';

// c.moveTo(150,120+i);
// c.lineTo(150, 205+i);
// c.moveTo(145,200+i);
// c.lineTo(150,205+i);
// c.lineTo(155,200+i);
// c.closePath();
c.fill();
c.stroke();
	c.beginPath();//********* drawing parallelogram1
c.fillStyle='blue';
c.moveTo(100,220+i);
c.lineTo(200,220+i);
c.lineTo(200,205+i);
c.moveTo(200,205+i);
c.lineTo(100,205+i);
c.lineTo(100,220+i);
c.fill();
//c.closePath();

c.beginPath();//***************drawing pushing force1
c.lineWidth=10;
c.strokeStyle='green';
c.moveTo(150,220+i);
c.lineTo(150,400+i);
c.stroke();
c.lineWidth=1;
c.beginPath();//*****************drawing circle 1
c.strokeStyle='#4d4d4d';
c.fillStyle='#4d4d4d';
c.ellipse(150,360+i,15,40,Math.PI/2,0,Math.PI*2);
c.fill();
c.fillText("h1="+(i/10).toFixed(2)+"ሳ.ሜ",205,420)
c.beginPath();
c.strokeStyle='red';
c.moveTo(200,360);
c.lineTo(150,360);
c.moveTo(197,360);
c.lineTo(197,360+i);
c.moveTo(200,360+i);
c.lineTo(150,360+i);
c.stroke();
c.stroke();
c.beginPath();//***********************drawing the first small cylinder 
c.lineWidth=2;
c.strokeStyle='#cc0000';
c.ellipse(150, 320, 40,10,0,0, Math.PI);// beginning ellipse of cylinder 1
c.stroke();
c.beginPath();//############## filling water to first cylinder
c.fillStyle='#809fff';
c.ellipse(150,360+i,40,15,0,0,Math.PI);
c.ellipse(150, 520, 40,10,0,Math.PI, Math.PI*2)
c.closePath();
c.fill();
//*******************************Second  Cylinder 

c.beginPath();
c.fillStyle='blue';
c.moveTo(450,227-j);
c.lineTo(550,227-j);
c.lineTo(550,225-j);
c.moveTo(550,225-j);
c.lineTo(450,225-j);
c.lineTo(450,227-j);
c.fill();
c.closePath();
c.beginPath();//drawing pushing force2
c.lineWidth=10;
c.strokeStyle='green';
c.moveTo(500,227-j);
c.lineTo(500,400-j);
c.stroke();
c.beginPath();//drawing circle2
c.lineWidth=1;
c.strokeStyle='#4d4d4d';
c.fillStyle='#4d4d4d';
c.ellipse(500,360-j,20,90,Math.PI/2,0,Math.PI*2);
c.fill();
c.fillText("h2="+(j/10).toFixed(2)+"ሳ.ሜ",600,370);
c.fillStyle='#cc0000';
c.beginPath();
c.strokeStyle='red';
c.moveTo(600,360);
c.lineTo(500,360);
c.moveTo(595,360);
c.lineTo(595,360-j);
c.moveTo(600,360-j);
c.lineTo(500,360-j);
c.stroke();
c.beginPath();//drawing the second great cylinder
c.lineWidth=2;
c.strokeStyle='#cc0000';
c.ellipse(500, 320, 90,20,0,0, Math.PI);//beginning ellipse of cylinder 2
c.stroke();
c.beginPath();//*********** fillling water to the second cylinder
c.fillStyle='#809fff';
 c.ellipse(500,360-j,90,20,0,0,Math.PI);
 c.ellipse(500, 520, 90,20,0,Math.PI, Math.PI*2);
c.closePath();
c.fill();
}
function stopHydrolic(){
	
	clearInterval(pressCall);
	document.getElementById('stop').innerHTML='<button onclick="startHydrolic()" id="start">Start</button>';
	
}
function resetHydroulic1(){
i=0;
	j=0;
	a=true;
	h1=0;h2=0;
	height=0;
	f1=0;f2=0;
	masso=0;
	document.getElementById('selectMass').value=0;
		document.getElementById('enterMass').value=0;
		document.getElementById('stop').innerHTML='<button onclick="startHydrolic()" id="start">Start</button>';
	c.clearRect(0,0,canvas.width, canvas.height);  
	clearInterval(pressCall);
	drawHydroulic();
   hydroulicPress();

}
function resetMass()
{

	i=0;
	j=0;
	a=true;
	h1=0;h2=0;
		document.getElementById('selectMass').value=f2;
		f2=document.getElementById('selectMass').value;
		document.getElementById('enterMass').value=masso;
		masso=document.getElementById('enterMass').value
		document.getElementById('stop').innerHTML='<button onclick="startHydrolic()" id="start">Start</button>';
	c.clearRect(0,0,canvas.width, canvas.height);  
	clearInterval(pressCall);
	drawHydroulic();
	 calculateArea();
   hydroulicPress();
   pushingForce();

}
function resetHydroulic(){
	i=0;
	j=0;
	a=true;
	h1=0;h2=0;
	height=0;
	document.getElementById('selectMass').value=f2;
		document.getElementById('enterMass').value=0;
		document.getElementById('stop').innerHTML='<button onclick="startHydrolic()" id="start">Start</button>';
	c.clearRect(0,0,canvas.width, canvas.height);  
	clearInterval(pressCall);
	drawHydroulic();
	 calculateArea();
   hydroulicPress();
 
  
   
}

function startHydrolic(){
	if(f2!=0){
	document.getElementById('stop').innerHTML='<button onclick="stopHydrolic()" id="start">Stop</button>';

pressCall=setInterval(function(){
c.clearRect(0,0,canvas.width, canvas.height);  
if(i<=h11&&a==true&&masso>0)
{
   i+=0.2;
   hm++;
   j+=0.04;
}
// else if(i>0){
//  a=false;
//  i--;

drawHydroulic();
   hydroulicPress();
calculateArea();
pushMass();
pushingForce();
},50);}}