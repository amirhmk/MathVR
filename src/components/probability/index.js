AFRAME.registerComponent("probability", {
  schema: {
    num_dices: {
      type: "number",
      default: 5,
    },
  },
  init: function () {
    for (var i = 0; i < this.data.num_dices; i++) {
      const diceEl = document.createElement("a-entity");
      diceEl.setAttribute("dice", {
        pos_x: Math.random() * 3 + 1,
        pos_y: Math.random() * 3 + 1,
        pos_z: Math.random() * 3 + -4,
      });
      this.el.appendChild(diceEl);
    }
  },
  remove: function () {
    console.log("bye prob");
  },
});
