window.onload = mouseover;
var result = true; 
var inPlay = false;

function mouseover(){
	var finish = document.getElementById('end');
	finish.setAttribute('onmouseover','end()');

	var start = document.getElementById('start');
	start.setAttribute('onclick','begin()');

	start.setAttribute('onmouseover','gamePlay()');
	start.setAttribute('onmouseout','checkPlay()');
	
	var border = document.querySelectorAll('div.boundary');
	
	for (var i =0; i <5; i++) {
		border[i].setAttribute('onmouseover','outOfBounds()');
	}
}

function gamePlay() {
	inPlay = true;
}

function outOfBounds(){
	result = false;
	if (inPlay) {
		var border = document.querySelectorAll('div.boundary');
		document.getElementById('status').innerHTML ='Sorry, you lost. :( Click the S to restart.';
		for (var i =0; i <5; i++) {
			border[i].setAttribute('style','background-color:#ff8888');
		}
	}
}

function end() {
    if(result && inPlay) {
    	document.getElementById('status').innerHTML ='You win! :)';
    } else {
        document.getElementById('status').innerHTML ='Sorry, you lost. :( Click the S to restart.';
    }
}

function begin() {
	result = true;
	document.getElementById('status').innerHTML ='See if you can get to the end!';
	var border =document.querySelectorAll('div.boundary');
	
	for (var i =0; i <=4; i++) {
		border[i].setAttribute('style','background-color: #eeeeee');
	}
}

function checkPlay() {

	var outOfMaze =document.getElementById('maze').offsetLeft;
	var mouse =event.clientX;

	if(mouse < outOfMaze) {
		result = false;
		document.getElementById('status').innerHTML ='Sorry, you lost. :( Click the S to restart.';
		var border = document.querySelectorAll('div.boundary');
		for (var i =0; i <5; i++) {
			border[i].setAttribute('style','background-color:#ff8888');
		}
		return false;
	}
	else {
		return true;
	}
}