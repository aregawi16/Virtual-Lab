var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth/2;
canvas.height=window.innerHeight;
var c=canvas.getContext('2d');
var x=0,y=0,z=false,xr=150,yr=200,xi,yi,xii,yii,medium,xx1,xx,yy,n1,n2,ia,r,p1,p2,ia1,ra1;;
c.font="30px Algerian";
c.fillStyle='black';
	c.fillText("Law of refraction",200,50);
	c.font="30px Times new Roman";

		c.fillText("Incident Ray",200,100);
	c.fillStyle='black';
		c.fillText("Refracted Ray",500,500);
c.fillStyle='#00ffff';
c.fillRect(0,400,canvas.width,300);
c.fill();
c.closePath();
c.beginPath();
c.moveTo(300,200);// drawing normal line
c.lineTo(300,800);
c.strokeStyle='red';
c.stroke();
c.lineWidth=1;
this.selectMedium=function()
{
	
	n1=1;
	ia1=Math.PI/4;
	ia=(ia1*180)/Math.PI;
	medium=document.getElementById('medium').value;
	if(medium==1)

	{

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
    n2=1.0003;
    ra1=Math.PI/4.2;
    r=(ra1*180)/Math.PI;
    yy=5.27;
    xx1=3.95;
    xx=2;
    p1=n1*Math.sin(ia1);
		p2=n2*Math.sin(ra1);
	}
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
						c.fillText("Incident Ray",100,350);
						c.fillText("Refracted Ray",350,480);



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
	intervalCall=setInterval(function(){
		update();
	refract(x,y);
	
},10);
}