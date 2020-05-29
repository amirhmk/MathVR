AFRAME.registerComponent("dice-manager", {
  init: function () {
    const el = this.el;
    this.el.sceneEl.addEventListener("throwDice", function (e) {
      const { num_dices } = e.detail;
      for (var i = 0; i < num_dices; i++) {
        const diceEl = document.createElement("a-entity");
        diceEl.setAttribute("class", "dice");
        diceEl.setAttribute("dice", {
          pos_x: Math.random() * 3 + 1,
          pos_y: Math.random() * 3 + 1,
          pos_z: Math.random() * 3 + -4,
        });
        el.appendChild(diceEl);
      }
    });
  },
});
