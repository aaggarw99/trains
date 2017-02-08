var startTime = new Date().getTime();
var rightSources = ['images/no_lights_right.svg', 'images/right_light_right.svg', "images/left_light_right.svg"];
var leftSources = ['images/no_lights_left.svg', 'images/right_light_left.svg', "images/left_light_left.svg"];
var secIndex = 1;

function runAnimation(){
	
	/*	var lastSwitch = new Date().getTime();
		var rightCrossing = document.getElementById('rightCrossing');
		while(new Date().getTime()-lastSwitch<1000){}

			var lightTimer = new Date().getTime();
			rightCrossing.src="images/right_light_right.svg";
			while(new Date().getTime()-lightTimer < 500){}
			rightCrossing.src="images/left_light_right.svg";
			while(new Date().getTime()-lightTimer < 1000){}
		
		rightCrossing.src="images/no_lights_right.svg";*/
	var timerid=window.setInterval(changeImage, 500);
	var gateUp=window.setTimeout(gatesUp, 10000);
	var endFlashers=window.setTimeout(function(){clearInterval(timerid); secIndex=0; document.getElementById('rightCrossing').src=rightSources[secIndex]}, 10000);
	var trainPass = window.setTimeout(activateTrain, 4000);



	

}

function changeImage(){
	if(secIndex == 1){
		secIndex++;
	} else {
		secIndex=1;
	}
	document.getElementById('rightCrossing').src=rightSources[secIndex];
	
}

function gatesUp(){
	var rightGate = document.getElementById('rightGate');
	$(rightGate).css("animation", "rightGateUp 2s linear");
	$(rightGate).css("transform", "rotate(90deg)");
	$(rightGate).css("-moz-transform", "rotate(90deg)");
	$(rightGate).css("-ms-transform", "rotate(90deg)");
	$(rightGate).css("-webkit-transform", "rotate(90deg)");

	var leftGate = document.getElementById('leftGate');
	$(leftGate).css("animation", "leftGateUp 2s linear");
	$(leftGate).css("transform", "rotate(-90deg)");
	$(leftGate).css("-moz-transform", "rotate(-90deg)");
	$(leftGate).css("-ms-transform", "rotate(-90deg)");
	$(leftGate).css("-webkit-transform", "rotate(-90deg)");

}

function activateTrain(){
	var train = document.getElementById("bulletTrain");
	$(train).css("animation", "moveTrain 3s linear");
}