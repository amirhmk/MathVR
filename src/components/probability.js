AFRAME.registerComponent("probability", {
  init: function () {
    const el = this.el;
    // Create title
    const title = document.createElement("a-entity");
    title.setAttribute("title", { value: "Probability" });
    title.setAttribute("class", "probabilityRender");
    title.setAttribute("position", { x: -3.15, y: 6, z: -8 });
    title.setAttribute("scale", { x: 0, y: 0, z: 0 });
    el.appendChild(title);
    // Slides
    const slide1 = document.createElement("a-entity");
    slide1.setAttribute("slide", "");
    slide1.setAttribute("id", "slide-1");
    slide1.setAttribute("class", "probabilityRender");
    slide1.setAttribute("scale", "0 0 0");
    el.appendChild(slide1);
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
        el.emit("throwDice", { num_dices });
      });
      settingEl.appendChild(button);
    }
    this.el.appendChild(resultsEl);
    this.el.appendChild(settingEl);
  },
  remove: function () {
    console.log("bye prob");
  },
});
