const FACE_ROTATION_TABLE = [
  [3, 6, 4, 5],
  [1, 6, 2, 5],
  [4, 6, 3, 5],
  [2, 6, 1, 5],
];

function mod(n, m) {
  return (((n % m) + m) % m).toFixed(3);
}

AFRAME.registerComponent("dice-manager", {
  schema: {
    total_dices: {
      type: "number",
      default: 0,
    },
  },
  init: function () {
    const diceManager = this;
    const el = this.el;
    const sceneEl = this.el.sceneEl;
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
      setTimeout(() => {
        const elementsToAdd = sceneEl.querySelectorAll(`.dice`);
        elementsToAdd.forEach((d) => {
          let { x, z } = d.object3D.rotation;
          const face = diceManager.getDiceFace(x, z);
          console.log("FACE", face);
        });
      }, 4000);
    });
  },
  getDiceFace: function (x, z) {
    const half_pi = Math.PI / 2;
    x = x.toFixed(3);
    z = z.toFixed(3);
    x = mod(x, 2 * Math.PI);
    z = mod(z, 2 * Math.PI);
    x = Math.round(x / half_pi);
    z = Math.round(z / half_pi);
    return FACE_ROTATION_TABLE[z][x];
  },
});
