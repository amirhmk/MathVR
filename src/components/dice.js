import logo1 from "../assets/dice/1.png";
import logo2 from "../assets/dice/2.png";
import logo3 from "../assets/dice/3.png";
import logo4 from "../assets/dice/4.png";
import logo5 from "../assets/dice/5.png";
import logo6 from "../assets/dice/6.png";

// Load the Faces, only need to do it once
const textureLoader = new THREE.TextureLoader();
const FACES = [logo1, logo2, logo3, logo4, logo5, logo6];
const materials = FACES.map(
  (f) => new THREE.MeshBasicMaterial({ map: textureLoader.load(f) })
);

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
      mass: 30,
    });
    const geometry = new THREE.BoxGeometry(
      this.data.size,
      this.data.size,
      this.data.size
    );
    const mesh = new THREE.Mesh(geometry, materials);
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
