import { wait } from "../utils";

const FACE_ROTATION_TABLE = [
  [3, 6, 4, 5],
  [1, 6, 2, 5],
  [4, 6, 3, 5],
  [2, 6, 1, 5],
];
const PROCESS_DICE_DELAY = 3500;

function mod(n, m) {
  return (((n % m) + m) % m).toFixed(2);
}

function convertRadiansToNumRotation(phi) {
  const half_pi = Math.PI / 2;
  phi = phi.toFixed(2);
  phi = mod(phi, 2 * Math.PI);
  const num_rotation = Math.round(phi / half_pi);
  return num_rotation % 4;
}

AFRAME.registerComponent("dice-manager", {
  schema: {
    dice_results: {
      type: "string",
      default: "",
    },
  },
  init: function () {
    const diceResults = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      total: 0,
    };
    const diceManager = this;
    const el = this.el;
    this.el.sceneEl.addEventListener("throwDice", async function (e) {
      const createdDices = [];
      const { num_dices } = e.detail;
      for (var i = 0; i < num_dices; i++) {
        const diceEl = document.createElement("a-entity");
        diceEl.setAttribute("class", "dice");
        diceEl.setAttribute("dice", {
          pos_x: Math.random() * 6 - 3,
          pos_y: Math.random() * 3 + 2,
          pos_z: Math.random() * 3 + -7.5,
        });
        el.appendChild(diceEl);
        createdDices.push(diceEl);
      }
      diceResults["total"] += Number(num_dices);
      await wait(PROCESS_DICE_DELAY);
      createdDices.forEach((d) => {
        const { x, z } = d.object3D.rotation;
        const face = diceManager.getDiceFace(x, z);
        diceResults[face] += 1;
        d.removeAttribute("dynamic-body");
        d.setAttribute("static-body", "static-body: true");
      });
      el.setAttribute("dice_results", JSON.stringify(diceResults));
      const dice_results = el.getAttribute("dice_results");
      el.emit("update-results", { dice_results });
    });
  },
  getDiceFace: function (x, z) {
    const xNumRotation = convertRadiansToNumRotation(x);
    const zNumRotation = convertRadiansToNumRotation(z);
    return FACE_ROTATION_TABLE[zNumRotation][xNumRotation];
  },
});
