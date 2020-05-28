AFRAME.registerComponent("probability", {
  schema: {
    isActive: {
      type: "number",
      default: 0,
    },
  },
  init: function () {
    const el = this.el;
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
    resultsEl.setAttribute("class", "cardProb");

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
    settingEl.setAttribute("class", "cardProb");
    settingEl.setAttribute("scale", {
      x: 0,
      y: 0,
      z: 0,
    });
    let idx = 0;
    for (let num_dices = 1; num_dices <= 32; num_dices = num_dices * 2) {
      const button = document.createElement("a-entity");
      console.log("hello there", num_dices);
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
      settingEl.appendChild(button);
    }
    this.el.appendChild(resultsEl);
    this.el.appendChild(settingEl);
  },
  update: function () {
    // Updatee gets called after init once too, hence the need for this check
    if (this.data.isActive) {
      const allElements = document.querySelectorAll(" .cardProb");
      allElements.forEach((el) =>
        el.setAttribute("animation", {
          property: "scale",
          to: "1 1 1",
          dur: 1000,
        })
      );
    }
  },
  remove: function () {
    console.log("bye prob");
  },
});
