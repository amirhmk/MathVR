const loader = new THREE.FontLoader();
const fontJSON = require("../assets/Acme_Regular.json");
const font = loader.parse(fontJSON);
AFRAME.registerComponent("title", {
  schema: {
    value: { type: "string", default: "Hello World!" },
    color: { type: "number", default: 0xf7cb0d },
    metalness: { type: "number", default: 0.1 },
    roughness: { type: "number", default: 0.2 },
  },
  init: function () {
    const geometry = new THREE.TextGeometry(this.data.value, {
      font: font,
      size: 1,
      height: 0.1,
      curveSegments: 12,
      bevelThickness: 10,
      bevelSize: 8,
    });
    const material = new THREE.MeshStandardMaterial({
      color: this.data.color,
      metalness: this.data.metalness,
      roughness: this.data.roughness,
    });
    const mesh = new THREE.Mesh(geometry, material);
    this.el.setObject3D("text-geometry", mesh);
  },
  remove: function () {
    console.log("what the fuck");
  },
});
