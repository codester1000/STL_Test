

const nfts = [
    { 
        image: "https://random.dog/510a4438-2cf4-49ea-8f0f-ef0ad11999e5.jpg", 
        title: "Dog"
    },
    { 
        image: "https://random.dog/1d5a4ce5-8854-46ce-97d5-82f7e4cc7296.png", 
        title: "Dog"
    },
    { 
        image: "https://random.dog/e5bb2521-5775-4e01-a6df-82e1291d39a4.jpg", 
        title: "Dog"
    },
    { 
        image: "https://random.dog/f3bae7a1-2cb1-46b3-8708-99cd8b044e2b.jpg", 
        title: "Dog"
    },
    { 
        image: "https://random.dog/d467a3b8-ade5-4d68-810a-95fbb32a3cfc.jpg", 
        title: "Dog"
    },
    { 
        image: "https://random.dog/510a4438-2cf4-49ea-8f0f-ef0ad11999e5.jpg", 
        title: "Dog"
    },
    { 
        image: "https://random.dog/1d5a4ce5-8854-46ce-97d5-82f7e4cc7296.png", 
        title: "Dog"
    },
    { 
        image: "https://random.dog/e5bb2521-5775-4e01-a6df-82e1291d39a4.jpg", 
        title: "Dog"
    },
    { 
        image: "https://random.dog/f3bae7a1-2cb1-46b3-8708-99cd8b044e2b.jpg", 
        title: "Dog"
    },
    { 
        image: "https://random.dog/d467a3b8-ade5-4d68-810a-95fbb32a3cfc.jpg", 
        title: "Dog"
    },
    { 
        image: "https://random.dog/510a4438-2cf4-49ea-8f0f-ef0ad11999e5.jpg", 
        title: "Dog"
    },
    { 
        image: "https://random.dog/1d5a4ce5-8854-46ce-97d5-82f7e4cc7296.png", 
        title: "Dog"
    },
    { 
        image: "https://random.dog/e5bb2521-5775-4e01-a6df-82e1291d39a4.jpg", 
        title: "Dog"
    },
    { 
        image: "https://random.dog/f3bae7a1-2cb1-46b3-8708-99cd8b044e2b.jpg", 
        title: "Dog"
    },
    { 
        image: "https://random.dog/d467a3b8-ade5-4d68-810a-95fbb32a3cfc.jpg", 
        title: "Dog"
    },
    { 
        image: "https://random.dog/510a4438-2cf4-49ea-8f0f-ef0ad11999e5.jpg", 
        title: "Dog"
    },
    { 
        image: "https://random.dog/1d5a4ce5-8854-46ce-97d5-82f7e4cc7296.png", 
        title: "Dog"
    },
    { 
        image: "https://random.dog/e5bb2521-5775-4e01-a6df-82e1291d39a4.jpg", 
        title: "Dog"
    },
    { 
        image: "https://random.dog/f3bae7a1-2cb1-46b3-8708-99cd8b044e2b.jpg", 
        title: "Dog"
    },
    { 
        image: "https://random.dog/d467a3b8-ade5-4d68-810a-95fbb32a3cfc.jpg", 
        title: "Dog"
    },
    { 
        image: "https://random.dog/510a4438-2cf4-49ea-8f0f-ef0ad11999e5.jpg", 
        title: "Dog"
    },
    { 
        image: "https://random.dog/1d5a4ce5-8854-46ce-97d5-82f7e4cc7296.png", 
        title: "Dog"
    },
    { 
        image: "https://random.dog/e5bb2521-5775-4e01-a6df-82e1291d39a4.jpg", 
        title: "Dog"
    },
    { 
        image: "https://random.dog/f3bae7a1-2cb1-46b3-8708-99cd8b044e2b.jpg", 
        title: "Dog"
    },
    { 
        image: "https://random.dog/d467a3b8-ade5-4d68-810a-95fbb32a3cfc.jpg", 
        title: "Dog"
    }
    
    
];

let camera, scene, renderer, controls, composer;
var hblur, vblur;
let targets = {simple: [], sphere: []};

init();
animate();

function init() {

    initCamera();

    initScene();

    initObjects();

    // addClickListeners();

    initRenderer();

    initTrackbarControls();

    transform(targets.sphere, 2000);

    window.addEventListener('resize', onWindowResize, false);

}

function initCamera() {

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;

}

function initScene() {

    scene = new THREE.Scene();

}

function initRenderer() {

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);
}

function initObjects() {

    simpleObjectsLayout();
    generateGeometricLayouts();

}

// function addClickListeners() {
//     addClickListener(targets.sphere, 'sphere');
// }

function simpleObjectsLayout() {

    for (let i = 0; i < nfts.length; i++) {

        let object = new THREE.CSS3DObject(htmlElement(nfts, i));
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;

        scene.add(object);
        targets.simple.push(object);

    }

}

function htmlElement(nfts, i) {
    let element = document.createElement('div');
    element.className = 'nft';
    // element.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')';

    let link = document.createElement('a');
    link.href = nfts[i].image;

    element.appendChild(link);


    let symbol = document.createElement('img');
    symbol.className = 'nft-image';
    symbol.src = nfts[i].image;
    symbol.style.width = "300px";
    link.appendChild(symbol);


    element.addEventListener('click', ()=>elementClickHandler(i), false);

    return element;
}

function elementClickHandler(i){

    transform(targets.sphere, 500);

    new TWEEN.Tween(targets.simple[i / 5].position)
        .to({
            x: 0,
            y: 0,
            z: 2500
        }, Math.random() * 2000 + 2000)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

    new TWEEN.Tween(this)
        .to({}, 2000 * 2)
        .onUpdate(render)
        .start();
}


function addClickListener(target, elementId) {

    const button = document.getElementById(elementId);

    button.addEventListener('click', function () {
        transform(target, 2000);
    }, false);

}

function initTrackbarControls() {
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 2;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener('change', render);
}

function generateGeometricLayouts() {

    let sphereVector = new THREE.Vector3();
    let helixVector = new THREE.Vector3();

    for (let i = 0, l = targets.simple.length; i < l; i++) {
        addSphereObject(sphereVector, i, l);
    }

}

function addSphereObject(sphereVector, index, length) {

    const phi = Math.acos(-1 + (2 * index) / length);
    const theta = Math.sqrt(length * Math.PI) * phi;
    let object = new THREE.Object3D();

    object.position.setFromSphericalCoords(800, phi, theta);

    sphereVector.copy(object.position).multiplyScalar(2);

    object.lookAt(sphereVector);

    targets.sphere.push(object);
}

function transform(target, duration) {

    TWEEN.removeAll();

    for (let i = 0; i < targets.simple.length; i++) {
        let object = targets.simple[i];
        let targetObject = target[i];
        transformObjectPosition(object, targetObject, duration);
        transformObjectRotation(object, targetObject, duration);
    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}

function transformObjectPosition(object, targetObject, duration) {

    new TWEEN.Tween(object.position)
        .to({
            x: targetObject.position.x,
            y: targetObject.position.y,
            z: targetObject.position.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function transformObjectRotation(object, targetObject, duration) {

    new TWEEN.Tween(object.rotation)
        .to({
            x: targetObject.rotation.x,
            y: targetObject.rotation.y,
            z: targetObject.rotation.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();

}

function render() {

    renderer.render(scene, camera);

}

function animate() {

    requestAnimationFrame(animate);
    TWEEN.update();
    controls.update();
    // composer.render();
}