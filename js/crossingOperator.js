var startTime = new Date().getTime();
var rightSources = ['images/no_lights_right.svg', 'images/right_light_right.svg', "images/left_light_right.svg"];
var leftSources = ['images/no_lights_left.svg', 'images/right_light_left.svg', "images/left_light_left.svg"];
var secIndex = 1;
var audio = new Audio('train_sound.mp3')
var audioTrain = new Audio('trainpassing.mp3')

function runAnimation(){
	var timerid=window.setTimeout(imageChanger, 2000);
	setTimeout(function(){
	    audio.play();

	    setTimeout(function(){
	        audio.pause();
	        audio.currentTime = 0;
	    }, 12000);
	}, 2000);
	setTimeout(function(){
			audioTrain.play();

			setTimeout(function(){
					audioTrain.pause();
					audioTrain.currentTime = 0;
			}, 6000);
	}, 6000);



	var gateUp=window.setTimeout(gatesUp, 12000);

	var trainPass = window.setTimeout(activateTrain, 6000);





}

function imageChanger() {
	var flasher = window.setInterval(changeImage, 500);
	var endFlashers=window.setTimeout(function(){clearInterval(flasher); secIndex=0; document.getElementById('rightCrossing').src=rightSources[secIndex]}, 12000);

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
