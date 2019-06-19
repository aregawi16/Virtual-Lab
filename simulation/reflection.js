var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth/2;
canvas.height=window.innerHeight;
var c=canvas.getContext('2d');
var intervalCall=0,angle=0;
var x=0,y=0,z=false,xr,yr=150,xi,yi,xii,yii,a,b;
var flag=false;
function reflection(){
  document.getElementById('select1').innerHTML ='<select id="angle" onchange="selectAngle()"><option value="0">ኩርናዕ ምረጽ</option><option value="10">10</option><option value="20">20</option><option value="30">30</option><option value="40">40</option><option value="50">50</option><option value="60">60</option></select>';
		document.getElementById('refl').innerHTML='';
	document.getElementById('refr').innerHTML='';
      document.getElementById('select2').innerHTML='';
   document.getElementById("str").innerHTML='<button onclick="startFun()" id="strbtn" > Start</button>';
      document.getElementById("rst").innerHTML='<button onclick="initReflection()" id="rstbtn" > Reset</button>';
   document.getElementById("stp").innerHTML='<button onclick="stopFun()" id="stpbtn" > Stop</button>';
         document.getElementById("home").innerHTML='<button onclick="resetFun()" id="Home" > Home</button>';

yr=150;
//drawing an image
var eye= new Image();
eye.src= "eye.png";

var switchA;
c.setLineDash([]);
c.font="30px Algerian";
		c.fillText("ሕጊ ጽብራቀ ",300,50);
c.font="30px Times new Roman";
c.beginPath();
c.lineWidth=2;//drawing red line
c.moveTo(350, 150);
c.lineTo(350,  400);

c.strokeStyle='red';
c.stroke();
c.beginPath();

c.fillStyle='black';
c.fillText("ምስትያት",130,500);
c.fillStyle='#76D7C4';//drawing mirror
c.fillRect(0,400,canvas.width,30);
c.fill();
c.closePath();
c.beginPath();
c.lineWidth=2;//
c.strokeStyle='black';
c.moveTo(0, 430);
c.lineTo(canvas.width,  430);
c.stroke();
c.fillStyle='black';
c.fillText("ትኹል መስመር",350,150);
c.lineWidth=5;
c.beginPath();
c.arc(350, 400, 100, 0, Math.PI,true);//drawing half circle
c.strokeStyle='white';
c.stroke();
c.closePath();
	
		 this.selectAngle=function(){
            clearInterval(intervalCall);
                        angle=document.getElementById("angle").value;

            initReflection();

		 	c.fillText("መጻኢ ጨረር",100,300);

		 c.fillText("ጽብራቀ ጨረር",500,300);
          if(angle==10)
          {
      xr=250;
     a=2;
     b=5;

          }
          if(angle==20)

          {
          	xr=200;
          	a=3;
          	b=5;
          }
          if(angle==30)
          {
          xr=150;
          	a=4;
          	b=5;
          }
          if(angle==40)
          {
          xr=100;
          	a=5;
          	b=5;
          }
          if(angle==50)
          {
          xr=50;
          	a=6;
          	b=5;
          }
          if(angle==60)
          {
          xr=0;
          	a=7;
          	b=5;
          }

		}
    this.stopFun=function(){
      clearInterval(intervalCall);

    }
    this.initReflection=function(){
  var c=canvas.getContext('2d');

  c.clearRect(0, 0, canvas.width, canvas.height);

clearInterval(intervalCall);
c.clearRect(0, 0, canvas.width, canvas.height);
c.setLineDash([]);
flag=false;
x=0;
y=0;
z=false;
reflection();

}
		this.resetFun=function(){
			clearInterval(intervalCall);

			c.clearRect(0, 0, canvas.width, canvas.height);
            document.getElementById('angle').value='0';
                  document.getElementById('select1').innerHTML='';

			document.getElementById('refl').innerHTML='<button id="reflection" onclick="reflection()">ጽብራቀ</button>';
       		document.getElementById('refr').innerHTML='<button id="refraction" onclick="refraction()">ለውጢ ኣንፈት</button>';
document.getElementById('str').innerHTML='';
document.getElementById('stp').innerHTML='';
document.getElementById('rst').innerHTML='';    
document.getElementById('home').innerHTML='';    


		}
function reflect(i,j) {
	
	c.drawImage(eye ,700,50,187,98);


c.setLineDash([]);
c.beginPath();
c.lineWidth=3;// drawing the incident ray
xi=xr+i;
if(j<=250&&z==false)
{
c.moveTo(xr, yr);
yi=yr+j;
c.lineTo(xi, yi);	
c.stroke();
xii=xi;
yii=yi;
}
if(j<=250&&z==true)// drawing the reflectrd rays
{
	
		c.fillStyle='black';
		 
			c.font="25px Times new roman";

	c.fillText("i="+angle,290,300);
		c.fillText("r="+angle,380,300);
	yi=yr+j;
  c.beginPath();
	c.moveTo(xii, yii);
	c.lineTo(xi,yi);
		c.stroke();	

  if(yi<=yr){
  c.beginPath();
  c.setLineDash([10,10]);
c.moveTo(xii, yii);
  c.lineTo(xr,650);
  c.stroke();
}
}
c.strokeStyle='#ff9900';
c.stroke();
}
 	function update(){
 	
 	if(y<250&& z==false)
 	{
 		
 		x+=a;
 		y+=b;
 	}


 else
 {
 	z=true;
 	
 if(y>0)
 {
 	x+=a;
 	 	y-=b;
 }

 	}
 	 
 }
 this.startFun=function()
{
  if(angle!=0&&flag==false){
    flag=true;
	intervalCall=setInterval(function(){
		update();
	reflect(x,y);
	
},100);
}}

}
  var x=0,y=0,z=false,xi,yi,xii,yii,medium=0,xx1,xx,yy,n1,n2,ia,r,p1,p2,ia1,ra1;;

function refraction(){
  xr=150,yr=200;
  document.getElementById('select2').innerHTML='<select id="medium" onchange="selectMedium()"><option value="0">ኣካላት ምረጽ</option><option value="1">vacuum to glass</option><option value="2">vaccum to liquid</option> <option value="3">vacuum to air</option></select>';
document.getElementById('refl').innerHTML='';
  document.getElementById('refr').innerHTML='';
    document.getElementById('select1').innerHTML='';
 document.getElementById("str").innerHTML='<button onclick="startFun()" id="strbtnr" > Strat</button>';
      document.getElementById("rst").innerHTML='<button onclick="initRefraction()" id="rstbtnr" > Reset</button>';
   document.getElementById("stp").innerHTML='<button onclick="stopFun()" id="stpbtnr" > Stop</button>';
         document.getElementById("home").innerHTML='<button onclick="resetFunr()" id="Home1" > Home</button>';

c.font="30px Algerian";
c.fillStyle='black';
  c.fillText("ሕጊ ለወጢ ኣንፈት ብርሃን ",200,50);
  c.font="30px Times new Roman";
c.fillStyle='#00ffff';
c.fillRect(0,400,canvas.width,300);
//c.fill();
c.closePath();
c.beginPath();
c.moveTo(300,200);// drawing normal line
c.lineTo(300,800);
c.strokeStyle='red';
c.stroke();
c.lineWidth=3;
this.selectMedium=function()
{
        clearInterval(intervalCall);
          medium=document.getElementById('medium').value;

        initRefraction(); 
  n1=1;
  ia1=Math.PI/4;
  ia=(ia1*180)/Math.PI;
  if(medium==1)

  {

c.fillStyle='#00FFFF';
c.fillRect(0,400,canvas.width,300);
    n2=1.52;
    ra1=Math.PI/6.2;
    r=(ra1*180)/Math.PI;
    xx=1;
    yy=5.27;
    xx1=3.95;
    p1=n1*Math.sin(ia1);
    p2=n2*Math.sin(ra1);

  }
  if(medium==2)

  {
    c.fillStyle='#00ffbf';
c.fillRect(0,400,canvas.width,300);
    n2=1.33;
    ra1=Math.PI/5.5;
    r=(ra1*180)/Math.PI;
    yy=5.27;
    xx1=3.95;
    xx=1.5;
    p1=n1*Math.sin(ia1);
    p2=n2*Math.sin(ra1);
  }
  if(medium==3)

  {
    c.fillStyle='#D8D8D8';
c.fillRect(0,400,canvas.width,300);

    n2=1.0003;
    ra1=Math.PI/4.2;
    r=(ra1*180)/Math.PI;
    yy=5.27;
    xx1=3.95;
    xx=2;
    p1=n1*Math.sin(ia1);
    p2=n2*Math.sin(ra1);
  }
  c.beginPath();
c.moveTo(300,200);// drawing normal line
c.lineTo(300,800);
c.strokeStyle='red';
c.stroke();
c.lineWidth=3;
}
this.stopFun=function(){
      clearInterval(intervalCall);

    }
    this.initRefraction=function(){
  var c=canvas.getContext('2d');

  c.clearRect(0, 0, canvas.width, canvas.height);

clearInterval(intervalCall);
c.clearRect(0, 0, canvas.width, canvas.height);
x=0;
y=0;
z=false;
i=0;
j=0;
flag=false;
refraction();

}
this.resetFunr=function(){
      clearInterval(intervalCall);

      c.clearRect(0, 0, canvas.width, canvas.height);
            document.getElementById('select2').innerHTML='';
            document.getElementById('refl').innerHTML='<button id="reflection" onclick="reflection()">ጽብራቀ</button>';
          document.getElementById('refr').innerHTML='<button id="refraction" onclick="refraction()">ለውጢ ኣንፈት</button>';
document.getElementById('str').innerHTML='';
document.getElementById('stp').innerHTML='';
document.getElementById('rst').innerHTML='';
document.getElementById('home').innerHTML='';   

            document.getElementById('medium').value=0;
       
}
function refract(i,j) {
  
  

c.beginPath();


yi=yr+j;
if(j<=201&&z==false)
{
c.moveTo(xr, yr);
xi=xr+i;
c.lineTo(xi, yi); 
xii=xi;
yii=yi;
}
if(j>201&&z==true)
{
  c.fillStyle='black';
  c.font='25px Times new roman';
  c.fillText("law of refraction", 400, 250);
  c.fillText("n1*sin(i)=n2*sin(r)",400,280);
  c.fillText(n1+"*sin(i)="+n2+"*sin(r)",400,310);
    c.fillText(n1+"*sin("+ia+")="+n2+"*sin("+r.toFixed(2)+")",400,340);
      c.fillText(p1.toFixed(1)+"="+p2.toFixed(1),400,370);
            c.fillText(ia,270,350);
      c.fillText(r.toFixed(2),300,450);
            c.fillText("መጻኢ ጨረር",100,350);
            c.fillText("ዘላቂ ጨረር",350,480);



  c.fill();
  xi=xr+i;
  c.moveTo(xii, yii);
  c.lineTo(xi,yi);
  
  c.stroke(); 

} 
c.strokeStyle='#ff9900';
c.stroke();
}
  function update(){
    y+=yy;
 if(y<=201 &&z==false)
 {
  x+=xx1;
  z=false;
 }
 else
 {
  x+=xx;
  z=true;
 }

  }
 
  
this.startFun=function()
{
  if(medium!=0&&flag==false){
    flag=true;
  intervalCall=setInterval(function(){
    update();
  refract(x,y);
  
},100);
}
}}