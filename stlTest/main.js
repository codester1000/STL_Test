const dogs = [
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

if (!nfts[0]) {
    nfts = dogs
    // add option to put dogs instead of nfts
    // let dogElement = document.createElement('div');
    // dogElement.className = 'dog-element';

    // let writing = document.createElement('h2');
    // writing.className = 'dog-h2'
    // writing.innerHTML = "If you don't have any nfts, here are some dogs"
    // dogElement.appendChild(writing)

    // let dogButton = document.createElement('button');
    // dogButton.className = 'dog-button'
    // dogButton.innerHTML = 'Click to Dismiss'
    // dogElement.appendChild(dogButton)
}


var camera, scene, renderer;
var controls;

var objects = [];
var targets = { sphere: [] };

if (nfts) {
    initiate();
    animate();
}

function initiate() {

    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 3000;

    scene = new THREE.Scene();

    // sphere

    var vector = new THREE.Vector3();

    for ( var i = 0, l = nfts.length; i < l; i ++ ) {

        // create div for each nft object
        let element = document.createElement('div');
        element.className = 'element';
        
        let link = document.createElement('a');
        // link.href = nfts[i].image;
        element.appendChild(link);
    
        let symbol = document.createElement('img');
        symbol.className = 'nft-image';
        symbol.src = nfts[i].image;
        link.appendChild(symbol);

        let title = document.createElement('h2');
        title.className = "title";
        title.innerHTML = nfts[i].title      
        element.appendChild(title)

        var object = new THREE.CSS3DObject( element );
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;
        scene.add( object );

        objects.push( object );
        let iNum = i
        element.addEventListener('click', ()=>elementClickHandler(iNum), false);


    }

    var vector = new THREE.Vector3();

    // sphere 

    for ( var i = 0, l = objects.length; i < l; i ++ ) {

        var phi = Math.acos( -1 + ( 2 * i ) / l );
        var theta = Math.sqrt( l * Math.PI ) * phi;

        var object = new THREE.Object3D();
        let size = 800

        object.position.x = size * Math.cos( theta ) * Math.sin( phi );
        object.position.y = size * Math.sin( theta ) * Math.sin( phi );
        object.position.z = size * Math.cos( phi );

        vector.copy( object.position ).multiplyScalar( 2 );
        object.lookAt( vector );

        targets.sphere.push( object );

    }


    //

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.domElement.style.position = 'absolute';
    document.getElementById( 'container' ).appendChild( renderer.domElement );

    //

    controls = new THREE.TrackballControls( camera, renderer.domElement );
    controls.rotateSpeed = 3;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener( 'change', render );


    transform( targets.sphere, 2000 );

    //

    window.addEventListener( 'resize', onWindowResize, false );

}


function transform( targets, duration ) {
    TWEEN.removeAll();

    for ( var i = 0; i < objects.length; i ++ ) {

        var object = objects[ i ];
        var target = targets[ i ];

        new TWEEN.Tween( object.position )
            .to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
            .easing( TWEEN.Easing.Exponential.InOut )
            .start();

        new TWEEN.Tween( object.rotation )
            .to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
            .easing( TWEEN.Easing.Exponential.InOut )
            .start();

    }

    new TWEEN.Tween( this )
        .to( {}, duration * 2 )
        .onUpdate( render )
        .start();

}

function elementClickHandler(i){
    transform(targets.sphere, 1000)
    // move thing towards perspective, this too time consuming for right now, but could be cool
    // let camX, camY, camZ = 0
    // if (camera.position.x > 0) {
    //     camX = camera.position.x - 300
    // } else if (camera.position.x <= 300 || camera.position ) {
    //     camX = 0
    // } else {
    //     camX = camera.position.x + 300
    // }

    // add a click listener for when you want to access the opensea link
    new TWEEN.Tween(camera.position)
        .to({
            x: 0,
            y: 0,
            z: 3000
        }, Math.random() * 2000 + 2000)
        .easing( TWEEN.Easing.Exponential.InOut )
        .start();



    new TWEEN.Tween(objects[i].position)
        .to({
            x: 0,
            y: 0,
            z: 2200
        }, Math.random() * 2000 + 2000)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();
    
    new TWEEN.Tween(objects[i].rotation)
        .to({
            x: 0,
            y: 0,
            z: camera.rotation.x
        }, Math.random() * 2000 + 2000)
        .easing( TWEEN.Easing.Exponential.InOut )
        .start();    


        console.log(camera.rotation, 1)
        console.log(objects[i].rotation, 2)

    new TWEEN.Tween(this)
        .to({}, 2000 * 2)
        .onUpdate(render)
        .start();

    console.log(camera.rotation, 1)
    console.log(objects[i].rotation, 2)
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

    render();

}

function animate() {

    requestAnimationFrame( animate );

    TWEEN.update();

    controls.update();

}

function render() {

    renderer.render( scene, camera );

}
