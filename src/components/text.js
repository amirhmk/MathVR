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
    this.el.setAttribute("geometry", {
      primitive: "plane",
    });
    this.el.setAttribute("text", {
      value: this.data.value,
      width: this.data.width,
      height: this.data.height,
      align: "center",
    });
    this.el.setAttribute("position", {
      x: this.data.pos_x,
      y: this.data.pos_y,
      c: this.data.pos_z,
    });
    this.el.setAttribute("rotation", {
      x: this.data.rot_x,
      y: this.data.rot_y,
      c: this.data.rot_z,
    });
    this.el.setAttribute("material", {
      visible: false,
    });
  },
  remove: function () {
    console.log("bye");
  },
});
