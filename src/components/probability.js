import { debounce } from "../utils";

function parseResults(objStr) {
  objStr = objStr.replace(/[{()}""]/g, "");
  const results = objStr.split(",");
  const parsedString = "Results\n\n".concat(results.join("\n"));
  return parsedString;
}
AFRAME.registerComponent("probability", {
  init: function () {
    const el = this.el;

    // Card for results
    const resultsEl = document.createElement("a-entity");
    resultsEl.setAttribute("card", {
      text: "Results\n\n1:0\n2:0\n3:0\n4:0\n5:0\n6:0\nTotal:0",
      pos_x: -4.5,
      pos_y: 0.3,
      rot_x: -15,
      rot_y: 20,
      pos_y_text_offset: -0.2,
      type: "results",
    });
    resultsEl.setAttribute("scale", {
      x: 0,
      y: 0,
      z: 0,
    });
    resultsEl.setAttribute("class", "probability-cards");
    this.el.sceneEl.addEventListener("update-results", function (e) {
      const { dice_results } = e.detail;
      const resultsTextEl = this.querySelector("#card_text_results");
      resultsTextEl.setAttribute("text", {
        value: parseResults(dice_results),
      });
    });
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
    settingEl.setAttribute("class", "probability-cards");
    settingEl.setAttribute("card", {
      text: "Throw Dice",
      pos_x: 4.5,
      pos_y: 0.7,
      rot_x: -15,
      rot_y: -25,
      pos_x_text_offset: -0.1,
      type: "settings",
    });
    settingEl.setAttribute("scale", {
      x: 0,
      y: 0,
      z: 0,
    });
    let idx = 0;
    for (let num_dices = 1; num_dices <= 32; num_dices = num_dices * 2) {
      const button = document.createElement("a-entity");
      button.setAttribute("button", { value: num_dices, height: 0.3 });
      button.setAttribute("position", {
        x: positions[idx][0],
        y: positions[idx][1] - 0.2,
        z: positions[idx][2],
      });
      idx += 1;
      button.setAttribute("id", "probability");
      button.addEventListener(
        "click",
        debounce(() => el.emit("throwDice", { num_dices }), 250)
      );
      settingEl.appendChild(button);
    }

    this.el.appendChild(resultsEl);
    this.el.appendChild(settingEl);
  },
  remove: function () {
    console.log("bye prob");
  },
});
