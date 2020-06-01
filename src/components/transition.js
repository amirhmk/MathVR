AFRAME.registerComponent("transition", {
  init: function () {
    const sceneEl = this.el.sceneEl;
    const transition = this;
    sceneEl.addEventListener("transition", function (event) {
      const { fadeIn, fadeOut } = event.detail;
      const elementsToRemove = sceneEl.querySelectorAll(`.${fadeOut}`);
      const elementsToAdd = sceneEl.querySelectorAll(`.${fadeIn}`);
      transition.fade(elementsToRemove, false);
      transition.fade(elementsToAdd, true);
    });
  },
  fade: function (elements, isVisible) {
    for (let element of elements) {
      element.setAttribute("animation", {
        property: "scale",
        to: isVisible ? "1 1 1" : "0 0 0",
        dur: 1000,
        loop: false,
        visible: isVisible,
      });
    }
  },
});
