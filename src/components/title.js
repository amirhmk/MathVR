const loader = new THREE.FontLoader();
const fontJSON = require("../assets/Acme_Regular.json");
const font = loader.parse(fontJSON);
AFRAME.registerComponent("title", {
  schema: {
    value: { type: "string", default: "Hello World!" },
    height: { type: "number", default: 0.1 },
    size: { type: "number", default: 1 },
    curveSegments: { type: "number", default: 12 },
    bevelSize: { type: "number", default: 8 },
    bevelThickness: { type: "number", default: 10 },
    color: { type: "string", default: "#FFC025" },
    metalness: { type: "number", default: 0.1 },
    roughness: { type: "number", default: 0.2 },
  },
  init: function () {
    const geometry = new THREE.TextGeometry(this.data.value, {
      font: font,
      size: this.data.size,
      height: this.data.height,
      curveSegments: this.data.curveSegments,
      bevelThickness: this.data.curveSegments,
      bevelSize: this.data.bevelSize,
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
