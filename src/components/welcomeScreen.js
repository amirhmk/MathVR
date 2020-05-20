AFRAME.registerComponent("welcome", {
  init: function () {
    this.el.setAttribute("geometry", {
      primitive: "cylinder",
      openEnded: true,
      thetaLength: 100,
      thetaStart: 180,
      radius: 5,
      height: 5,
    });
    this.el.setAttribute("material", {
      metalness: 0.5,
      side: "double",
      color: "green",
    });
    this.el.setAttribute("position", {
      x: 0,
      y: 2,
      z: -5,
    });
    this.el.setAttribute("rotation", {
      x: 0,
      y: 310,
      z: 0,
    });
  },
  remove: function () {
    console.log("bye");
  },
});
