AFRAME.registerComponent("custom-text", {
  schema: {
    value: {
      type: "string",
      default: "fart alert",
    },
    width: {
      type: "number",
      default: 5,
    },
    height: {
      type: "number",
      default: 5,
    },
    pos_x: {
      type: "number",
      default: 0,
    },
    pos_y: {
      type: "number",
      default: 0,
    },
    pos_z: {
      type: "number",
      default: 0,
    },
    rot_x: {
      type: "number",
      default: 0,
    },
    rot_y: {
      type: "number",
      default: 0,
    },
    rot_z: {
      type: "number",
      default: 0,
    },
  },
  init: function () {
    const el = this.el;
    el.setAttribute("geometry", {
      primitive: "plane",
    });
    el.setAttribute("text", {
      value: this.data.value,
      width: this.data.width,
      height: this.data.height,
      align: "center",
    });
    el.setAttribute("position", {
      x: this.data.pos_x,
      y: this.data.pos_y,
      c: this.data.pos_z,
    });
    el.setAttribute("rotation", {
      x: this.data.rot_x,
      y: this.data.rot_y,
      c: this.data.rot_z,
    });
    el.setAttribute("material", {
      visible: false,
    });
    el.setAttribute("class", "clickable");
    // Event listener for click
    el.addEventListener("click", function (event) {
      el.emit("remove", { text: "hellowordl" });
    });
    // event listener for mouse-over
    el.addEventListener("mouseenter", function (event) {
      el.setAttribute("text", { color: "blue" });
    });
    el.addEventListener("mouseleave", function (e) {
      el.setAttribute("text", { color: "white" });
    });
  },
  remove: function () {
    console.log("bye");
  },
});
