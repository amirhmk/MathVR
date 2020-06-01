AFRAME.registerComponent("slide", {
  init: function () {
    const el = this.el;
    el.setAttribute("geometry", {
      primitive: "cylinder",
      openEnded: true,
      thetaLength: 100,
      thetaStart: 180,
      radius: 3,
      height: 3,
    });
    el.setAttribute("material", {
      side: "double",
      color: "#0A91F4",
    });
    el.setAttribute("position", { x: 0, y: 2, z: -2.4 });
    el.setAttribute("rotation", {
      x: 0,
      y: 310,
      z: 0,
    });
    const text = document.createElement("a-entity");
    text.setAttribute("slide-text", { next: true });
    el.appendChild(text);
  },
});
