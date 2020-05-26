const loader = new THREE.FontLoader();
const fontJSON = require("../assets/Acme_Regular.json");
const font = loader.parse(fontJSON);
AFRAME.registerComponent("title", {
  init: function () {
    const geometry = new THREE.TextGeometry("Welcome to MathVR", {
      font: font,
      size: 1,
      height: 0.1,
      curveSegments: 12,
      bevelThickness: 10,
      bevelSize: 8,
    });
    const material = new THREE.MeshStandardMaterial({
      color: 0x2194ce,
      metalness: ".3",
      wireframe: true,
      roughness: 0.2,
    });
    const mesh = new THREE.Mesh(geometry, material);
    this.el.setObject3D("text-geometry", mesh);
    this.el.setAttribute("position", {
      x: -5,
      y: 5,
      z: -8,
    });
    const el = this.el;
    const sceneEl = el.sceneEl;
    // eslint-disable-next-line no-unused-vars
    sceneEl.addEventListener("remove", function (event) {
      sceneEl.remove(el);
    });
  },
  remove: function () {
    console.log("what the fuck");
  },
});
