window.onload = mouseover;
function mouseover(){
	var border =document.getElementsByClassName('boundary');
	
	for (var i =0; i <5; i++) {
		border[i].setAttribute('onmouseover','outOfBounds(this)');
	}
};

function outOfBounds(boundary){
	boundary.setAttribute('style','background-color:#ff8888');
}