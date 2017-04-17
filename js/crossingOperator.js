var startTime = new Date().getTime();
var rightSources = ['images/no_lights_right.svg', 'images/right_light_right.svg', "images/left_light_right.svg"];
var leftSources = ['images/no_lights_left.svg', 'images/right_light_left.svg', "images/left_light_left.svg"];
var secIndex = 1;
var audio = new Audio('audio/train_sound.mp3')
var audioTrain = new Audio('audio/trainpassing.mp3')

function runAnimation(){
	if (navigator.appVersion.indexOf("Chrome/") != -1) {
		var gate = document.getElementById('backRail');
		$(gate).css("z-index", "-6000");
	}
	var timerid=window.setTimeout(imageChanger, 2000);
	setTimeout(function(){
		window.location="main.html";
	}, 20000);
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
			}, 4500);
	}, 3750);

	setTimeout(function(){
		blur()
		showAlert()
	}, 14000)

	setTimeout(function(){
		var button = document.getElementById('train-button');
		$(button).fadeIn()
		$(button).css("z-index", "5000000000000");
	}, 15000)


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

function blur() {
	var image = document.getElementById('background_image');
	var rightC = document.getElementById('rightCrossing');
	var rightG = document.getElementById('rightGate');
	var leftG = document.getElementById('leftGate');
	var frontR = document.getElementById('frontRail');
	var backR = document.getElementById('backRail')
	var total_images = [image, rightC, rightG, leftG, frontR, backR]

	for (var i = 0; i < total_images.length; i++) {
		total_images[i].animate([
		  // keyframes
		  { filter: 'blur(0px)' },
		  { filter: 'blur(10px)' }
			], {
		  // timing options
		  duration: 3000,
			});
	}

	setTimeout(function(){
		image.style.filter = "blur(10px)"
		rightC.style.filter = "blur(10px)"
		rightG.style.filter = "blur(10px)"
		leftG.style.filter = "blur(10px)"
		frontR.style.filter = "blur(10px)"
		backR.style.filter = "blur(10px)"
	}, 3000)
}

function showAlert() {

}
