var clock, scene, camera, renderer, controls, stats, particles;


function init() {
	stats = initStats();

	clock = new THREE.Clock();
	clock.start();

	camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 5000);

	scene = new THREE.Scene();
	scene.add(camera);

	//finish
	document.getElementById("WebGL-output").appendChild(renderer.domElement);
	onResize();
	renderScene();

	// var orbit = new THREE.OrbitControls( camera, renderer.domElement );
	// orbit.enableZoom = false;
}
function renderScene() {
	
	stats.update();
	requestAnimationFrame(renderScene);
	renderer.render(scene, camera);
}
init();