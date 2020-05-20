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
    const textEl = document.createElement("a-entity");
    textEl.setAttribute("custom-text", {
      value: "Hello world",
      pos_x: -1,
      pos_y: 0.92245,
      pos_z: -1,
      rot_x: 0,
      rot_y: 45,
      rot_z: 0,
    });
    this.el.appendChild(textEl);
  },
  remove: function () {
    console.log("bye");
  },
});
