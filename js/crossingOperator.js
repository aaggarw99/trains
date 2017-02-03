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
	var endFlashers=window.setTimeout(function(){clearInterval(timerid); secIndex=0; document.getElementById('rightCrossing').src=rightSources[secIndex]}, 10000);



	

}

function changeImage(){
	if(secIndex == 1){
		secIndex++;
	} else {
		secIndex=1;
	}
	document.getElementById('rightCrossing').src=rightSources[secIndex];
	
}

function stopFlashers(){


}