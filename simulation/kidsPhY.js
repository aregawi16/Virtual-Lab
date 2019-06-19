var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth/2;
canvas.height=window.innerHeight*3/4+63;
var c=canvas.getContext('2d');
var i=0;
var switch1,switch2; 
var x=0;
var y=0;
var dx=0,dv=0,time=100,vel=0,dis=0;// velocity parameters

var time1=0,intervalCall,intervalCall1;
var A=0,Vf=0,Vi=0,time2=0,D=0,v1;//acceleration parameter
	v1=Vi;

var srcX;
var srcY;

var sheetWidth= 178;
var sheetHeight=167;

var cols=3;
var rows=4;

var width= sheetWidth/cols;
var height=sheetHeight/rows;
var i=0;
var currentFrame=1;
var human= new Image();
human.src= "horse5.jpg";
function init(){
	 c.beginPath();
	// c.moveTo(395,325);
	// c.lineTo(685,325);
	// c.fill();
	// c.lineTo(395,555);
	// c.stroke();
	c.moveTo(0,50);//drawing line and drawing thw intial image
	//c.lineWidth=13;
c.lineTo(canvas.width,50);
c.strokeStyle='black';
c.stroke();
	srcX= currentFrame * width;
	
	srcY= height;
c.drawImage(human, srcX , srcY , width , height, x ,y ,width , height);
 	c.font = "30px Times New Roman";
c.fillText("ስሩዕ ምንቅስቃስ ኣብ ቀዋሚ ፍጥነትን ናህርን ይገንዘቡ", 50, 100);

c.stroke();
}

window.addEventListener('mousewheel',event =>{
	console.log(event);
}, {passive:true});
// function choose(){
// 	switch1=document.getElementById("mySelect").value;
	
// }

function resetFun(){
x=0;

switch1=0;
switch2=0;
     	   	document.getElementById("mySelectV").value=0;
     	   	document.getElementById("mySelectA").value=0;

	console.log(switch1);

		clearInterval(intervalCall);
c.clearRect(0, 0, canvas.width, canvas.height);
    init();
	document.getElementById("A").value=0;
	document.getElementById("U").value=0;
	document.getElementById("V").value=0;
	document.getElementById("T").value=0;
	document.getElementById("vel").value=0;
    document.getElementById("distance").value=0;
    document.getElementById("time").value=0;
    document.getElementById("mySelect").value='choose';
	
	
}
function startFun(){
 intervalCall=setInterval(function(){
	calculateA();
	calculateV();

	drawImage();

},time);
 
	
	
}
function stopFun(){
	clearInterval(intervalCall);
	
}

function calculateA(){
	if(switch2==4)
	{	
  
 Vi=document.getElementById("U").value;
	Vf=document.getElementById("V").value;
	time2=document.getElementById("T").value;
	A=(Vf-Vi)/time2;

	}
	else if(switch2==5)
	{
    	A=document.getElementById("A").value;
   Vf=document.getElementById("V").value;
	time2=document.getElementById("T").value;
			Vi=Vf-A*time2;

	}
		else if(switch2==6)
	{
		
  A=document.getElementById("A").value;
	Vi=document.getElementById("U").value;
	time2=document.getElementById("T").value;
	Vf=Vi+A*time2;

	}
	else if(switch2==7)
	{
  A=document.getElementById("A").value;
Vi=document.getElementById("U").value;
Vf=document.getElementById("V").value;
time2=(Vf-Vi)/A;
	}
	
		
	
		   //	document.getElementById("V").value=Vf;
	D=Vi*time2+ A*Math.pow(time2,2);
	dv=v1/10;
if((x+width)>=canvas.width-dv)
   {
   	currentFrame=0;
   	 // x=0;
   	 // v1=Vi;
   	 if(Math.round(v1)<=Vf)
   	 	x=0;
   }
else
   	x+=dv;

if(!isNaN(A) && A!=Number.NEGATIVE_INFINITY&&A!=Number.POSITIVE_INFINITY)
	 {if(Math.round(v1)<=Vf)
	 	{				
		

			
			v1+=(A/10);

		}
		
	}

}
function calculateV(){

	if(switch1==1)
	{
		
    dis=document.getElementById("distance").value;
    time1=document.getElementById("time").value;
    vel=dis/time1;
	}
	else if(switch1==2){
	vel=document.getElementById("vel").value;
    time1=document.getElementById("time").value;
    dis=time1*vel;

	}	

   else if(switch1==3)
   {
        vel=document.getElementById("vel").value;
        dis=document.getElementById("distance").value;
        time1=dis/vel;

   }
if((x+width)>=canvas.width-dx)
   {
   	currentFrame=0;
   }
   else
	x+=dx;
if(!isNaN(vel) && vel!=Number.NEGATIVE_INFINITY&&vel!=Number.POSITIVE_INFINITY)
	{
		dx=vel/10;
	
	}
}

// runs the horses by updating the column number; 
function updateFrame(){
	currentFrame = ++currentFrame % cols;
	srcX= currentFrame * width;
	
	srcY= height;
c.clearRect(0, 0, canvas.width, canvas.height);
}
// drawing the horses
function drawImage(){
 updateFrame();
 c.drawImage(human, srcX , srcY , width , height, x ,y ,width , height);

  if(switch1==1||switch1==2||switch1==3)
 {
 //uniform velocity
   	c.font = "30px Algerian";
 c.fillText("Non Accelerated Motion", 20, 90);
  	c.font = "20px Times New Roman";
c.fillText("ፍጥነት=ርሕቀት/ግዜ::"+vel+"m/s", 10, 130);
c.fillText("ርሕቀት=ፍጥነት*ግዜ::"+dis+"m", 10, 170);
c.fillText("ግዜ=ርሕቀት/ፍጥነት::"+time1+"s", 10, 210);
c.beginPath();
c.moveTo(0,50);
c.lineWidth=13;
c.lineTo(canvas.width,50);
c.strokeStyle='black';
c.stroke();
}
  
//uniform acceleration
  if(switch2==4||switch2==5||switch2==6||switch2==7)
{  
	
	
	c.fillText("V="+dv*10, width+x-10, 15);
	c.font = "30px Algerian";
c.fillText("Accelerated Motion", 350, 90);
c.font = "20px Times new Roman";
c.fillText("ናህሪ=Vf-Vi/Time::"+A+"m/s2", 400, 120);
c.fillText("ፍጥነት1=Vf-A*T::"+Vi+"m/s", 400, 160);
c.fillText("ፍጥነት2=Vi+A*T::"+Vf+"m/s", 400, 200);
c.fillText("ርሕቀት=Vi*Time+ A*t^2::"+D+"m", 400, 240);
c.fillText("ግዜ=Vf-Vi/A::"+time2+"s", 400, 280);


c.lineWidth=2;
c.moveTo(400,100);
c.lineTo(400,300);
c.lineTo(600,300);
c.strokeStyle=black;
c.fillText("v",400,100);	
c.fillText(Vf,400,300-Vf);
c.fillText(Vi,400,300-Vi);
c.fillText("t",600,300);	
c.fillText(time2,560,320);	


}

}


function choose(){
switch1=document.getElementById("mySelectV").value;
switch2=document.getElementById("mySelectA").value;

if(switch2==4)
	{		
          
		document.getElementById("try4").innerHTML='	 <p id="p4" >ናህሪ = ?</p> <br>';
		document.getElementById("try5").innerHTML=' <p id="p5">ፍጥነት1</p> <input type="number" min="0" id="U"><br>';
	document.getElementById("try6").innerHTML=' <p id="p6">ፍጥነት2</p> <input type="number" min="0" id="V"><br>';
  document.getElementById("try7").innerHTML=' <p id="p7">ግዜ</p> <input type="number" min="0" id="T"><br>';
}
else if(switch2==5)
	{document.getElementById("try4").innerHTML='	 <p id="p4" >ናህሪ</p>  <input  type="number" min="0" id="A" ><br>';
		document.getElementById("try5").innerHTML=' <p id="p5">ፍጥነት1 = ?</p> <br>';
	document.getElementById("try6").innerHTML=' <p id="p6">ፍጥነት2</p> <input type="number" min="0" id="V"><br>';
  document.getElementById("try7").innerHTML=' <p id="p7">ግዜ</p> <input type="number" min="0" id="T"><br>';
  }
  else if(switch2==6)
	{
		document.getElementById("try4").innerHTML='	 <p id="p4" >ናህሪ</p>  <input  type="number" min="0" id="A" ><br>';
		document.getElementById("try5").innerHTML=' <p id="p5">ፍጥነት1</p> <input type="number" min="0" id="U"><br>';
	document.getElementById("try6").innerHTML=' <p id="p6">ፍጥነት2 = ?</p> <br>';
  document.getElementById("try7").innerHTML=' <p id="p7">ግዜ</p> <input type="number" min="0" id="T"><br>';
}
else if(switch2==7)
	{document.getElementById("try4").innerHTML='	 <p id="p4" >ናህሪ</p>  <input  type="number" min="0" id="A" ><br>';
		document.getElementById("try5").innerHTML=' <p id="p5">ፍጥነት1</p> <input type="number" min="0" id="U"><br>';
	document.getElementById("try6").innerHTML=' <p id="p6">ፍጥነት2</p> <input type="number" min="0" id="V"><br>';
  document.getElementById("try7").innerHTML=' <p id="p7">ግዜ = ?</p> <br>';
  }
  if(switch1==1)
	{
		document.getElementById("try1").innerHTML='<p id="p1" >ፍጥነት = ?</p>  <br>';
        document.getElementById("try2").innerHTML='<p id="p2">ርሕቀት</p> <input type="number" min="0" id="distance"><br>';
        document.getElementById("try3").innerHTML='<p id="p3">ግዜ</p> <input type="number" min="0" id="time"><br>';
    }
    else if(switch1==2){
		document.getElementById("try1").innerHTML='<p id="p1" >ፍጥነት</p>  <input  type="number" min="0" id="vel" ><br>';
        document.getElementById("try2").innerHTML='<p id="p2">ርሕቀት = ?</p><br>';
        document.getElementById("try3").innerHTML='<p id="p3">ግዜ</p> <input type="number" min="0" id="time"><br>';
    }
    else if(switch1==3)
   {
        document.getElementById("try1").innerHTML='<p id="p1" >ፍጥነት</p>  <input  type="number" min="0" id="vel" ><br>';
        document.getElementById("try2").innerHTML='<p id="p2">ርሕቀት</p> <input type="number" min="0" id="distance"><br>';
        document.getElementById("try3").innerHTML='<p id="p3">ግዜ = ?</p><br>';	
    }

}

