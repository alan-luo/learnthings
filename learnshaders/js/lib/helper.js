var mouse = {x:0, y:0};
function onResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onResize, false);
function onMouseMove( event ) {
	mouse.x = event.clientX - window.innerWidth / 2;
	mouse.y = event.clientY - window.innerHeight / 2;
}
window.addEventListener('mousemove', onMouseMove, false);

function initStats() {
	var statcontroller = new Stats();
	statcontroller.setMode(0);

	statcontroller.domElement.style.position="absolute";
	statcontroller.domElement.style.left="0";
	statcontroller.domElement.style.top="0";

	document.getElementById("Stats-output").appendChild(statcontroller.domElement);

	return statcontroller;
}

function ColorMap(startColor, endColor) {
	this.startColor = {
		h: startColor.h, 
		s: startColor.s, 
		l: startColor.l
	};
	this.endColor = {
		h: endColor.h, 
		s: endColor.s, 
		l: endColor.l
	};
	this.delColor = {
		h: endColor.h-startColor.h, 
		s: endColor.s-startColor.s, 
		l: endColor.l-startColor.l
	};
	this.getColor = function(percent) {
		var progress = ((percent % 2)+2)%2; // get positive mod
		if(progress<=1) { 
			return {
				h: this.startColor.h + progress * this.delColor.h,
				s: this.startColor.s + progress * this.delColor.s,
				l: this.startColor.l + progress * this.delColor.l,
			};
		} else {
			progress -= 1;
			return {
				h: this.endColor.h - progress * this.delColor.h,
				s: this.endColor.s - progress * this.delColor.s,
				l: this.endColor.l - progress * this.delColor.l,
			};

		}
		
	}
}