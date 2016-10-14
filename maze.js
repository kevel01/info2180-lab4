window.onload = mouseover;
var result = true; 

function mouseover(){
	var stop = document.getElementById('end');
	stop.setAttribute('onmouseover','end()');

	var go = document.getElementById('start');
	go.setAttribute('onclick','start()');

	var border = document.querySelectorAll('div.boundary');
	
	for (var i =0; i <5; i++) {
		border[i].setAttribute('onmouseover','outOfBounds()');
	}
}

function outOfBounds(){
	result = false;
	var border = document.querySelectorAll('div.boundary');
	for (var i =0; i <5; i++) {
		border[i].setAttribute('style','background-color:#ff8888');
	}
}

function end() {
    if(result) {
    	document.getElementById('status').innerHTML ='You win! :)';
    } else {
        document.getElementById('status').innerHTML ='Sorry, you lost. :( Click the S to restart.';
    }
}

function start() {
	result = true;
	document.getElementById('status').innerHTML ='See if you can get to the end!';
	var border =document.querySelectorAll('div.boundary');
	for (var i =0; i <=4; i++) {
		border[i].setAttribute('style','background-color: #eeeeee');
	}
}