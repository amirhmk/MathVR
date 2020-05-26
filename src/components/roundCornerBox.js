const RoundedBoxGeometry = require("three-rounded-box")(THREE);

AFRAME.registerComponent("roundbox", {
  schema: {
    borderRadius: { type: "number", default: 0.15 },
    opacity: { type: "number", default: 1 },
  },
  init: function () {
    this.ascend = true;
    const opacity = this.data.opacity;
    this.borderRadius = this.data.borderRadius;
    const el = this.el;
    this.material = new THREE.MeshStandardMaterial({
      opacity: opacity,
      transparent: true,
      color: 0xf7cb0d,
      metalness: 0.1,
      roughness: 0.2,
    });
    const myBox = new THREE.Mesh(
      new RoundedBoxGeometry(1, 1, 1, this.data.borderRadius, 50),
      this.material
    );
    el.setObject3D("boxybox", myBox);
    el.setAttribute("position", {
      x: 3,
      y: 1,
      z: -3,
    });
    el.setAttribute("scale", { x: 1, y: 1, z: 1 });
  },
  tick: function () {
    if (this.borderRadius <= 0) {
      this.ascend = true;
      this.borderRadius += 0.01;
      const myBox = new THREE.Mesh(
        new RoundedBoxGeometry(1, 1, 1, this.borderRadius, 50),
        this.material
      );
      this.el.setObject3D("boxybox", myBox);
    } else if (this.borderRadius > 0 && this.borderRadius < 1 && this.ascend) {
      this.borderRadius += 0.01;
      const myBox = new THREE.Mesh(
        new RoundedBoxGeometry(1, 1, 1, this.borderRadius, 50),
        this.material
      );
      this.el.setObject3D("boxybox", myBox);
    } else if (this.borderRadius >= 1) {
      this.ascend = false;
      this.borderRadius -= 0.01;
      const myBox = new THREE.Mesh(
        new RoundedBoxGeometry(1, 1, 1, this.borderRadius, 50),
        this.material
      );
    } else if (this.borderRadius > 0 && this.borderRadius < 1 && !this.ascend) {
      this.borderRadius -= 0.01;
      const myBox = new THREE.Mesh(
        new RoundedBoxGeometry(1, 1, 1, this.borderRadius, 50),
        this.material
      );
      this.el.setObject3D("boxybox", myBox);
    }
  },
});
