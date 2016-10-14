window.onload = mouseover;
var result = true; 

function mouseover(){
	var win =document.getElementById('end');
	var border = document.querySelectorAll('div.boundary');
	for (var i =0; i <5; i++) {
		border[i].setAttribute('onmouseover','outOfBounds()');
	}
	win.setAttribute('onmouseover','end()');
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
    	alert("You win! :)");
    } else {
        alert("Sorry, you lost. :(");
    }
}