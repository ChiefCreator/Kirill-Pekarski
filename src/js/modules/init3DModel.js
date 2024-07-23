import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function init3DModel() {
    const canvas = document.querySelector('canvas.webgl');
    const wrapper = document.querySelector(".portrait");
    const scene = new THREE.Scene();
    const sizes = {
        width: wrapper.offsetWidth,
        height: wrapper.offsetHeight,
    }
    
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.x = 0
    camera.position.y = -0.80
    camera.position.z = 4.7
    scene.add(camera)
    
    const pointLight = new THREE.PointLight(0xffffff, 13)
    pointLight.position.x = 2
    pointLight.position.y = 3
    pointLight.position.z = 4
    scene.add(pointLight)
    
    const renderer = new THREE.WebGLRenderer({canvas: canvas})
    renderer.setSize(sizes.width, sizes.height)
    renderer.setClearColor(0xffffff, 0);
    
    const loader = new GLTFLoader();
    loader.load( './../3d/portrait2.glb', 
        (gltf) => {
            gltf.scene.scale.set(1.35, 1.35, 1.35); 
            scene.add(gltf.scene);
    
            const clock = new THREE.Clock()
            const tick = () => {
                const elapsedTime = clock.getElapsedTime()
                gltf.scene.rotation.y = elapsedTime / 2;
                renderer.render(scene, camera)
                window.requestAnimationFrame(tick)
            }
            tick()
        }, 
        undefined,
        (error) => {
            console.error( error );
        }
    );
}

export default init3DModel;