var random1=Math.floor(Math.random()*6)+1;
var random2=Math.floor(Math.random()*6)+1;

var imgsrc1="images/dice"+random1+".png";
var imgsrc2="images/dice"+random2+".png";

var img1=document.getElementsByClassName("img")[0];
var img2=document.querySelectorAll("img")[1];




img1.setAttribute("src",imgsrc1);
img2.setAttribute("src",imgsrc2);


var win=document.getElementById("top");
if(random1>random2){
	win.innerHTML="<span>🚩</span> Player 1 Wins";
}
else if(random1<random2){
	win.innerHTML="Player 2 Wins <span>🚩</span>";
}
else{
	win.innerHTML="<span>🚩</span>DRAW<span>🚩</span>";
}


