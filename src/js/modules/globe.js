import ThreeGlobe from "three-globe";
import { WebGLRenderer, Scene } from "three";
import {PerspectiveCamera, AmbientLight, DirectionalLight, Color, Fog, PointLight} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import countries from "./../globeData/globe-data-min.json";
import travelHistory from "./../globeData/my-flights.json";

function globe() {
    var renderer, camera, scene, controls;
    const globeContainer = document.querySelector(".globe__circle");
    const globeContainerWidth = globeContainer.clientWidth;
    const globeContainerHeight = globeContainer.clientWidth;
    var Globe;
    
    init();
    initGlobe();
    animate();
    
    function init() {
      renderer = new WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(globeContainerWidth, globeContainerHeight);
      renderer.setClearColor(0xffffff, 0);
      document.querySelector(".globe__circle").appendChild(renderer.domElement);
    
      scene = new Scene();
      scene.add(new AmbientLight(0xbbbbbb, 0.3));
    
      camera = new PerspectiveCamera();
      camera.aspect = globeContainerWidth / globeContainerHeight;
      camera.updateProjectionMatrix();
    
      var dLight = new DirectionalLight(0xffffff, 0.8);
      dLight.position.set(-800, 2000, 400);
      camera.add(dLight);
    
      var dLight1 = new DirectionalLight(0x7982f6, 1);
      dLight1.position.set(-200, 500, 200);
      camera.add(dLight1);
    
      var dLight2 = new PointLight(0x8566cc, 0.5);
      dLight2.position.set(-200, 500, 200);
      camera.add(dLight2);
    
      camera.position.z = 1;
      camera.position.x = 0;
      camera.position.y = 0;
    
      scene.add(camera);
      scene.fog = new Fog(0x535ef3, 400, 2000);
    
      controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.minDistance = 230;
      controls.maxDistance = 230;
      controls.minPolarAngle = Math.PI / 3.5;
      controls.maxPolarAngle = Math.PI - Math.PI / 3;
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enableZoom = false;
      controls.target.set(0, 0, 0);
    }
    
    function initGlobe() {
      Globe = new ThreeGlobe({
        waitForGlobeReady: true,
        animateIn: true,
      })
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.6)
        .showAtmosphere(true)
        .atmosphereColor("#141414")
        .atmosphereAltitude(0.25)
        .hexPolygonColor((e) => {
          if (
            ["KGZ", "KOR", "THA", "RUS", "UZB", "IDN", "KAZ", "MYS"].includes(
              e.properties.ISO_A3
            )
          ) {
            return "#ffffff";
          } else return "#ffffff";
        });
    
      setTimeout(() => {
        Globe.arcsData(travelHistory.flights)
          .arcColor((e) => {
            return e.status ? "white" : "white";
          })
          .arcAltitude((e) => {
            return e.arcAlt;
          })
          .arcStroke((e) => {
            return e.status ? 0.5 : 0.3;
          })
          .arcDashLength(0.9)
          .arcDashGap(4)
          .arcDashAnimateTime(1000)
          .arcsTransitionDuration(1000)
          .arcDashInitialGap((e) => e.order * 1)
          // .labelsData(airportHistory.airports)
          // .labelColor(() => "#ffcb21")
          // .labelDotOrientation((e) => {
          //   return e.text === "ALA" ? "top" : "right";
          // })
          // .labelDotRadius(0.3)
          // .labelSize((e) => e.size)
          // .labelText("city")
          // .labelResolution(6)
          // .labelAltitude(0.01)
          // .pointsData(airportHistory.airports)
          // .pointColor(() => "#ffffff")
          // .pointsMerge(true)
          // .pointAltitude(0.07)
          // .pointRadius(0.05);
      }, 1000);
    
      Globe.rotateY(-Math.PI * (5 / 9));
      Globe.rotateZ(-Math.PI / 6);
      const globeMaterial = Globe.globeMaterial();
      globeMaterial.color = new Color("black");
      globeMaterial.emissive = new Color("black");
      globeMaterial.emissiveIntensity = 1;
      globeMaterial.shininess = 0;

      scene.add(Globe);
    }
    
    function animate() {
      camera.lookAt(scene.position);
      controls.update();
    
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
}

export default globe;