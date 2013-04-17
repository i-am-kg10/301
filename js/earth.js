var intervalID;
var rotationAngle3=0;
var rotationAngle=0;
var previousDate;

var frameRate;
var highestFps;
var lowestFps;
var averageFps;
var listOfFramerates;

function css3solarSystem(frameRate){
	previousDate=new Date();
	highestFps=frameRate;
	lowestFps=frameRate;
	listOfFramerates = new Array();
	//drawcss3();
	intervalID = setInterval(drawcss3,1000/frameRate);
}

function css3solarSystem2(frameRate){
	previousDate=new Date();
	highestFps=frameRate;
	lowestFps=frameRate;
	listOfFramerates = new Array();
	
	//drawcss3_2();
	intervalID = setInterval(drawcss3_2,1000/frameRate);
}

function css3solarSystem3(frameRate){
	previousDate=new Date();
	highestFps=frameRate;
	lowestFps=frameRate;
	listOfFramerates = new Array();
	
	//drawcss3_2();
	intervalID = setInterval(drawcss3_3,1000/frameRate);
}

function changeFrameRate(thisForm){
	frameRate=document.getElementsByName("fpsSelector").item(0).value;
	
	var myText=document.createTextNode(frameRate);
	document.getElementById("fpsChosen").replaceChild(myText, document.getElementById("fpsChosen").firstChild) ;
	
	clearInterval(intervalID);
	
	var animation = document.getElementsByName("animation").item(0).value;
	if (animation=="CSS3_3") {
		css3solarSystem3(frameRate);	
	}
	else if (animation=="CSS3_2") {
		css3solarSystem2(frameRate);	
	}
	else if (animation=="CSS3_1") {
		css3solarSystem(frameRate);	
	}
}


function drawcss3(){	
	
	if (rotationAngle==2*360){
		rotationAngle=0;
	}
	
	var myelement=document.getElementById("mars");
		myelement.setAttribute("style", "-webkit-transform: rotate(" + rotationAngle + "deg); "+
		"-moz-transform: rotate(" + rotationAngle + "deg);");
	
	var myelement=document.getElementById("marsPlanet");
		myelement.setAttribute("style", "-webkit-transform: rotate(" + rotationAngle*10 + "deg); "+
		"-moz-transform: rotate(" + rotationAngle*10 + "deg);");
	
	var myelement=document.getElementById("earth");
		myelement.setAttribute("style", "-webkit-transform: rotate(" + rotationAngle/2 + "deg); "+
		"-moz-transform: rotate(" + rotationAngle/2 + "deg);");
	
	var myelement=document.getElementById("earthPlanet");
		myelement.setAttribute("style", "-webkit-transform: rotate(" + rotationAngle*10 + "deg); "+
		"-moz-transform: rotate(" + rotationAngle*10 + "deg);");
	
	var myelement=document.getElementById("moon");
		myelement.setAttribute("style", "-webkit-transform: rotate(" + rotationAngle*6 + "deg); "+
		"-moz-transform: rotate(" + rotationAngle*5 + "deg);");
	
	var myelement=document.getElementById("moonSatellite");
		myelement.setAttribute("style", "-webkit-transform: rotate(" + rotationAngle*10 + "deg); "+
		"-moz-transform: rotate(" + rotationAngle*2 + "deg);");
	
	rotationAngle+=180*1/(25*Math.PI);
	getRealFrameRate(previousDate);	
}

function drawcss3_2(){
	
	if (rotationAngle3/12.5==2*360){
		rotationAngle3=0;
	}
	
	for (var i=1;i<21;i++){
		var myelement=document.getElementById("p"+i);
		myelement.setAttribute("style", "-webkit-transform:rotate(" + rotationAngle3/ (0.5+i/2) + "deg);" +
				"-moz-transform: rotate(" + rotationAngle3/ (0.5+i/2) + "deg);");
		
		myelement=document.getElementById("p"+i).getElementsByClassName("planet")[0];
		myelement.setAttribute("style", "-webkit-transform:rotate(" + rotationAngle3*10/ (0.5+i/2) + "deg);" +
				"-moz-transform: rotate(" + rotationAngle3*10/ (0.5+i/2) + "deg);");
		
		myelement=document.getElementById("p"+i).childNodes;
		if (myelement.length==7) {
			myelement=document.getElementById("p"+i).getElementsByClassName("sat_container")[0];
		myelement.setAttribute("style", "-webkit-transform:rotate(" + rotationAngle3*5/ (0.5+i/2) + "deg);" +
				"-moz-transform: rotate(" + rotationAngle3*5/ (0.5+i/2) + "deg);");
				
			/*myelement=document.getElementById("p"+i).getElementsByClassName("satellite")[0];
			myelement.setAttribute("style", "-webkit-transform: rotate(" + rotationAngle3 + "deg); "+
				"-moz-transform: rotate(" + rotationAngle3 + "deg);");*/
		}
	}
	
	for (var i=1;i<21;i++){
		var myelement=document.getElementById("op"+i);
		myelement.setAttribute("style", "-webkit-transform:rotate(" + rotationAngle3/ (0.5+i/2) + "deg);" +
				"-moz-transform: rotate(" + rotationAngle3/ (0.5+i/2) + "deg);");
		
		myelement=document.getElementById("op"+i).getElementsByClassName("planet")[0];
		myelement.setAttribute("style", "-webkit-transform:rotate(" + rotationAngle3*10/ (0.5+i/2) + "deg);" +
				"-moz-transform: rotate(" + rotationAngle3*10/ (0.5+i/2) + "deg);");
		
		myelement=document.getElementById("op"+i).childNodes;
		if (myelement.length==7) {
			myelement=document.getElementById("op"+i).getElementsByClassName("sat_container")[0];
		myelement.setAttribute("style", "-webkit-transform:rotate(" + rotationAngle3*5/ (0.5+i/2) + "deg);" +
				"-moz-transform: rotate(" + rotationAngle3*5/ (0.5+i/2) + "deg);");
				
		}
	}
	
	rotationAngle3+=180*1/(25*Math.PI);
	
	getRealFrameRate(previousDate);	
}

function drawcss3_3(){
	
	if (rotationAngle3/12.5==2*360){
		rotationAngle3=0;
	}
	var i, myString, myelement;
	
	for ( i=1;i<21;i++){		
		$("#p"+i).css({"-webkit-transform": "rotate(" + rotationAngle3/ (0.5+i/2) + "deg)", 
			"-moz-transform": "rotate(" + rotationAngle3/ (0.5+i/2) + "deg)"});
		
		$("#p"+i+" .planet").css({"-webkit-transform": "rotate(" + rotationAngle3*10/ (0.5+i/2) + "deg)", 
			"-moz-transform": "rotate(" + rotationAngle3*10/ (0.5+i/2) + "deg)"});
		
		
		 myString="p"+i;
		 myelement=document.getElementById(myString).childNodes;
		if (myelement.length==7) {
			
			$(".sat_container").css({"-webkit-transform": "rotate(" + rotationAngle3*5/ (0.5+i/2) + "deg)", 
			"-moz-transform": "rotate(" + rotationAngle3*5/ (0.5+i/2) + "deg)"});
			
			/*$(".satellite").css({"-webkit-transform": "rotate(" + rotationAngle3/ (0.5+i/2) + "deg)", 
			"-moz-transform": "rotate(" + rotationAngle3/ (0.5+i/2) + "deg)"});*/
			
		}
	}
	
	for ( i=1;i<21;i++){		
		$("#op"+i).css({"-webkit-transform": "rotate(" + rotationAngle3/ (0.5+i/2) + "deg)", 
			"-moz-transform": "rotate(" + rotationAngle3/ (0.5+i/2) + "deg)"});
		
		$("#op"+i+" .planet").css({"-webkit-transform": "rotate(" + rotationAngle3*10/ (0.5+i/2) + "deg)", 
			"-moz-transform": "rotate(" + rotationAngle3*10/ (0.5+i/2) + "deg)"});
		
		
		 myString="op"+i;
		 myelement=document.getElementById(myString).childNodes;
		if (myelement.length==7) {
			
			$(".sat_container").css({"-webkit-transform": "rotate(" + rotationAngle3*5/ (0.5+i/2) + "deg)", 
			"-moz-transform": "rotate(" + rotationAngle3*5/ (0.5+i/2) + "deg)"});
			
		}
	}
	
	rotationAngle3+=180*1/(25*Math.PI);
	
	getRealFrameRate(previousDate);	

}


Array.prototype.avg = function() {
	var av = 0;
	var cnt = 0;
	var len = this.length;
	for (var i = 0; i < len; i++) {
	var e = +this[i];
	if(!e && this[i] !== 0 && this[i] !== '0') e--;
	if (this[i] == e) {av += e; cnt++;}
	}
	return av/cnt;
}

function getRealFrameRate(previousDate){
	var currentDate= new Date();
	var timeSpent= currentDate-previousDate;
	var realFrameRate=Math.round(1000/timeSpent);
	
	if (listOfFramerates.length<100){
		listOfFramerates.push(realFrameRate);
		averageFps=Math.round(listOfFramerates.avg());
	}
	
	if (realFrameRate<lowestFps){
		lowestFps=realFrameRate;
	}
	else if (realFrameRate>highestFps){
		highestFps=realFrameRate;
	}
	
	var myText=document.createTextNode(realFrameRate);
	document.getElementById("fps").replaceChild(myText, document.getElementById("fps").firstChild) ;
	
	 myText=document.createTextNode(highestFps);
	document.getElementById("highestFps").replaceChild(myText, document.getElementById("highestFps").firstChild) ;
	
	var myText=document.createTextNode(lowestFps);
	document.getElementById("lowestFps").replaceChild(myText, document.getElementById("lowestFps").firstChild) ;
	
	var myText=document.createTextNode(averageFps);
	document.getElementById("averageFps").replaceChild(myText, document.getElementById("averageFps").firstChild) ;
	
	this.previousDate=currentDate;	
}