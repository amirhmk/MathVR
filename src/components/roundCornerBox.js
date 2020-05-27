const RoundedBoxGeometry = require("three-rounded-box")(THREE);

AFRAME.registerComponent("roundbox", {
  schema: {
    borderRadius: { type: "number", default: 0.15 },
  },
  init: function () {
    this.ascend = true;
    this.borderRadius = this.data.borderRadius;
    const el = this.el;
    this.material = new THREE.MeshStandardMaterial({
      opacity: 1,
      transparent: true,
      color: 0xf7cb0d,
      metalness: 0.1,
      roughness: 0.2,
    });
    const myBox = new THREE.Mesh(
      new RoundedBoxGeometry(1, 1, 1, this.borderRadius, 10),
      this.material
    );
    el.setObject3D("boxybox", myBox);
    el.setAttribute("position", {
      x: 3,
      y: 1,
      z: -3,
    });
  },
});
