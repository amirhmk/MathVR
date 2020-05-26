AFRAME.registerComponent("special-fadeaway", {
  init: function () {
    const sceneEl = this.el.sceneEl;
    const el = this.el;
    sceneEl.addEventListener("fadeaway", function (event) {
      el.setAttribute("visible", false);
    });
  },
});
