AFRAME.registerComponent("probability", {
  schema: {
    isActive: {
      type: "number",
      default: 0,
    },
  },
  init: function () {
    const probability = this;
    // Card for results
    const resultsEl = document.createElement("a-entity");
    resultsEl.setAttribute("card", {
      text: "Results\n\n1: 0\n2: 0\n3: 0\n4: 0\n5: 0\n6: 0",
      pos_x: -4.5,
      pos_y: 0.3,
      rot_x: -15,
      rot_y: 20,
      pos_y_text_offset: -0.2,
    });
    resultsEl.setAttribute("scale", {
      x: 0,
      y: 0,
      z: 0,
    });
    resultsEl.setAttribute("class", "probabilityRender");

    // Card for dice throwing options
    const settingEl = document.createElement("a-entity");
    // TODO Decide on # of options and code instead of hard-coded
    const positions = [
      [-0.7, 0.4, 0.1],
      [+0.7, 0.4, 0.1],
      [-0.7, 0, 0.1],
      [0.7, 0, 0.1],
      [-0.7, -0.4, 0.1],
      [0.7, -0.4, 0.1],
    ];
    settingEl.setAttribute("card", {
      text: "Throw Dice",
      pos_x: 4.5,
      pos_y: 0.7,
      rot_x: -15,
      rot_y: -25,
      pos_x_text_offset: -0.1,
    });
    settingEl.setAttribute("class", "probabilityRender");
    settingEl.setAttribute("scale", {
      x: 0,
      y: 0,
      z: 0,
    });
    let idx = 0;
    for (let num_dices = 1; num_dices <= 32; num_dices = num_dices * 2) {
      const button = document.createElement("a-entity");
      button.setAttribute("button", { value: num_dices });
      button.setAttribute("position", {
        x: positions[idx][0],
        y: positions[idx][1] - 0.2,
        z: positions[idx][2],
      });
      idx += 1;
      button.setAttribute("class", "clickable");
      button.setAttribute("id", "probability");
      button.addEventListener("mouseenter", function () {
        button.setAttribute("geometry", { width: 1.6, height: 0.6 });
      });
      button.addEventListener("mouseleave", function () {
        button.setAttribute("geometry", { width: 1.5, height: 0.5 });
      });
      button.addEventListener("click", function () {
        probability.throwDices(num_dices);
      });
      settingEl.appendChild(button);
    }
    this.el.appendChild(resultsEl);
    this.el.appendChild(settingEl);
  },
  throwDices: function (num_dices) {
    for (var i = 0; i < num_dices; i++) {
      const diceEl = document.createElement("a-entity");
      diceEl.setAttribute("class", "dice");
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
