const RoundedBoxGeometry = require("three-rounded-box")(THREE);

AFRAME.registerComponent("roundbox", {
  schema: {
    borderRadius: { type: "number", default: 0.15 },
  },
  init: function () {
    const el = this.el;
    this.material = new THREE.MeshStandardMaterial({
      color: 0xf7cb0d,
      metalness: 0.1,
      roughness: 0.2,
    });
    console.log(new RoundedBoxGeometry(1, 1, 1, this.data.borderRadius, 50));
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
  },
  tick: function () {
    // let ascension = true;
    // if (this.data.borderRadius < 1 && this.data.borderRadius > 0 && ascension) {
    //   this.data.borderRadius += 0.01;
    //   const myBox = new THREE.Mesh(
    //     new RoundedBoxGeometry(1, 1, 1, this.data.borderRadius, 50),
    //     this.material
    //   );
    //   this.el.setObject3D("boxybox", myBox);
    //   this.el.setAttribute("position", {
    //     x: 3,
    //     y: 1,
    //     z: -3,
    //   });
    //   console.log(this.data.borderRadius);
    // } else if (
    //   this.data.borderRadius < 1 &&
    //   this.data.borderRadius > 0 &&
    //   !ascension
    // ) {
    //   this.data.borderRadius -= 0.01;
    //   const myBox = new THREE.Mesh(
    //     new RoundedBoxGeometry(1, 1, 1, this.data.borderRadius, 50),
    //     this.material
    //   );
    //   this.el.setObject3D("boxybox", myBox);
    //   this.el.setAttribute("position", {
    //     x: 3,
    //     y: 1,
    //     z: -3,
    //   });
    // } else if (this.data.borderRadius >= 1) {
    //   console.log("full circle");
    //   ascension = false;
    //   console.log(ascension);
    //   this.data.borderRadius = 0.99;
    //   const myBox = new THREE.Mesh(
    //     new RoundedBoxGeometry(1, 1, 1, this.data.borderRadius, 50),
    //     this.material
    //   );
    //   this.el.setObject3D("boxybox", myBox);
    //   this.el.setAttribute("position", {
    //     x: 3,
    //     y: 1,
    //     z: -3,
    //   });
    // } else if (this.data.borderRadius === 0) {
    //   console.log("hello");
    //   ascension = true;
    //   this.data.borderRadius += 0.01;
    //   const myBox = new THREE.Mesh(
    //     new RoundedBoxGeometry(1, 1, 1, this.data.borderRadius, 50),
    //     this.material
    //   );
    //   this.el.setObject3D("boxybox", myBox);
    //   this.el.setAttribute("position", {
    //     x: 3,
    //     y: 1,
    //     z: -3,
    //   });
    // },
  },
});
