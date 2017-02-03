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
	var timerid=setInterval(changeImage(), 500);


	

}

function changeImage(){
	setTimeout(function() {
			document.getElementById('rightCrossing').src="images/right_light_right.svg";
			console.log("swapped");
		}, 0);
		setTimeout(function() {
			document.getElementById('rightCrossing').src="images/left_light_right.svg";
		}, 1000);
	
}