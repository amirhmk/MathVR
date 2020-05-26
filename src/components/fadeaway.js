AFRAME.registerComponent("fadeaway", {
  init: function () {
    const sceneEl = this.el.sceneEl;
    const el = this.el;
    sceneEl.addEventListener("fadeaway", function (event) {
      el.setAttribute("animation", {
        property: "material.opacity",
        to: 0,
        dur: 500,
      });
      setTimeout(function () {
        el.setAttribute("visible", false);
      }, 500);

      console.log("hello");
    });
  },
});
