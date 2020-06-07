import logo1 from "../assets/dice/1.png";
import logo2 from "../assets/dice/2.png";
import logo3 from "../assets/dice/3.png";
import logo4 from "../assets/dice/4.png";
import logo5 from "../assets/dice/5.png";
import logo6 from "../assets/dice/6.png";

AFRAME.registerComponent("dice", {
  schema: {
    size: {
      type: "number",
      default: 0.5,
    },
    pos_x: {
      type: "number",
      default: 0,
    },
    pos_y: {
      type: "number",
      default: 0,
    },
    pos_z: {
      type: "number",
      default: -3,
    },
  },
  init: function () {
    this.el.setAttribute("dynamic-body", {
      "dynamic-body": true,
      mass: 30,
    });
    const geometry = new THREE.BoxGeometry(
      this.data.size,
      this.data.size,
      this.data.size
    );
    const textureLoader = new THREE.TextureLoader();

    const materials = [
      new THREE.MeshBasicMaterial({ map: textureLoader.load(logo1) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(logo2) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(logo3) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(logo4) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(logo5) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(logo6) }),
    ];
    const faceMaterial = new THREE.MeshFaceMaterial(materials);
    const mesh = new THREE.Mesh(geometry, faceMaterial);
    this.el.setObject3D("geometry", mesh);

    this.el.setAttribute("position", {
      x: this.data.pos_x,
      y: this.data.pos_y,
      z: this.data.pos_z,
    });
    this.el.setAttribute("rotation", {
      x: Math.random() * 360 + 1,
      y: Math.random() * 360 + 1,
      z: Math.random() * 360 + 1,
    });
    const el = document.createElement("a-entity");
    this.el.appendChild(el);
  },
  remove: function () {
    console.log("bye");
  },
});
