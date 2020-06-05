import { wait } from "../utils";

const FACE_ROTATION_TABLE = [
  [3, 6, 4, 5],
  [1, 6, 2, 5],
  [4, 6, 3, 5],
  [2, 6, 1, 5],
];
const PROCESS_DICE_DELAY = 4000;

function mod(n, m) {
  return (((n % m) + m) % m).toFixed(3);
}

function convert_radians_to_num_rotation(phi) {
  const half_pi = Math.PI / 2;
  phi = phi.toFixed(3);
  phi = mod(phi, 2 * Math.PI);
  const num_rotation = Math.round(phi / half_pi);
  return num_rotation;
}

AFRAME.registerComponent("dice-manager", {
  schema: {
    total_dices: {
      type: "number",
      default: 0,
    },
    dice_results: {
      type: "string",
      default: " of course",
    },
  },
  init: function () {
    const diceManager = this;
    const el = this.el;
    const sceneEl = this.el.sceneEl;
    this.el.sceneEl.addEventListener("throwDice", async function (e) {
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
      await wait(PROCESS_DICE_DELAY);
      const diceResults = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        total: 0,
      };
      const dices = sceneEl.querySelectorAll(`.dice`);
      dices.forEach((d) => {
        const { x, z } = d.object3D.rotation;
        const face = diceManager.getDiceFace(x, z) || 3;
        diceResults[face] += 1;
        diceResults["total"] += 1;
      });
      el.setAttribute("dice_results", JSON.stringify(diceResults));
      const dice_results = el.getAttribute("dice_results");
      el.emit("update-results", { dice_results });
    });
  },
  getDiceFace: function (x, z) {
    const x_num_rotation = convert_radians_to_num_rotation(x);
    const z_num_rotation = convert_radians_to_num_rotation(z);
    return FACE_ROTATION_TABLE[z_num_rotation][x_num_rotation];
  },
});
