import blackBoard from "../assets/mathboard.jpg";

AFRAME.registerComponent("welcome", {
  init: function () {
    this.el.setAttribute("geometry", {
      primitive: "cylinder",
      openEnded: true,
      thetaLength: 100,
      thetaStart: 180,
      radius: 10,
      height: 10,
    });
    this.el.setAttribute("material", {
      side: "double",
      shader: "flat",
      src: blackBoard,
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
    const button = document.createElement("a-entity");
    button.setAttribute("button", { value: "Probability" });
    button.setAttribute("rotation", {
      x: 0,
      y: 45,
      z: 0,
    });
    button.setAttribute("class", "clickable");
    button.setAttribute("id", "probabilityRender");
    button.addEventListener("click", function () {
      button.emit("transition", { fadeOut: "welcome-page", fadeIn: button.id });
    });
    this.el.appendChild(button);
  },

  remove: function () {
    console.log("bye");
  },
});
