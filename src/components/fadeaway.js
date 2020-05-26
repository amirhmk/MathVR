AFRAME.registerComponent("fadeaway", {
  init: function () {
    const sceneEl = this.el.sceneEl;
    const el = this.el;
    sceneEl.addEventListener("fadeaway", function (event) {
      const elements = sceneEl.querySelectorAll(`.${event.detail.className}`);
      console.log(elements);
      for (let element of elements) {
        console.log(elements);
        element.setAttribute("animation", {
          property: "scale",
          to: "0 0 0",
          dur: 1000,
        });
        setTimeout(function () {
          el.setAttribute("visible", false);
        }, 1000);
      }
    });
  },
});
