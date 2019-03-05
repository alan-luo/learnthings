
var  scene, camera, renderer, controls, stats, particles;

function init() {

	camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 5000);
	camera.position.x = 10;
	camera.position.y = 10;
	camera.position.z = 10;
	camera.lookAt(0, 0, 0);

	scene = new THREE.Scene();
	scene.add(camera);

	renderer = new THREE.WebGLRenderer();


    uniforms = {
        u_time: { type: "f", value: 1.0 },
        u_resolution: { type: "v2", value: new THREE.Vector2() },
        u_mouse: { type: "v2", value: new THREE.Vector2() }
    };

    // var material = new THREE.ShaderMaterial( {
    //     uniforms: uniforms,
    //     vertexShader: document.getElementById( 'vertexShader' ).textContent,
    //     fragmentShader: document.getElementById( 'fragmentShader' ).textContent
    // } );

	var shaderMaterial = new THREE.ShaderMaterial({
		uniforms: uniforms,
		vertexShader: document.getElementById( 'vertexShader' ).textContent,
		fragmentShader: document.getElementById( 'fragmentShader' ).textContent
	});

	// var geometry = new THREE.PlaneBufferGeometry( 2, 2 );
	var geometry = new THREE.SphereGeometry(5, 32, 32);
	var mesh = new THREE.Mesh(geometry, shaderMaterial);

	scene.add(mesh);

	//finish
	document.getElementById("WebGL-output").appendChild(renderer.domElement);
	onResize();
	renderScene();

	var orbit = new THREE.OrbitControls( camera, renderer.domElement );
	orbit.enableZoom = false;
}
function renderScene() {
	requestAnimationFrame(renderScene);
	renderer.render(scene, camera);
}
init();
