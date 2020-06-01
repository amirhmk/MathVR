AFRAME.registerComponent("dice-manager", {
  schema: {
    total_dices: {
      type: "number",
      default: 0,
    },
  },
  init: function () {
    const el = this.el;
    this.el.sceneEl.addEventListener("throwDice", function (e) {
      const { num_dices } = e.detail;
      for (var i = 0; i < num_dices; i++) {
        const diceEl = document.createElement("a-entity");
        diceEl.setAttribute("class", "dice");
        diceEl.setAttribute("dice", {
          pos_x: Math.random() * 6 - 3,
          pos_y: Math.random() * 3 + 1,
          pos_z: Math.random() * 3 + -4,
        });
        el.appendChild(diceEl);
      }
      const new_total_dices =
        Number(el.getAttribute("total_dices")) + Number(num_dices);
      el.setAttribute("total_dices", new_total_dices);
    });
  },
});
