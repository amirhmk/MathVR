const CENTER_X_POS = 1.7;

AFRAME.registerComponent("card", {
  schema: {
    text: {
      type: "string",
      default: "",
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
      default: -4,
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
    pos_x_text_offset: {
      type: "number",
      default: 0,
    },
    pos_y_text_offset: {
      type: "number",
      default: 0,
    },
  },
  init: function () {
    const el = this.el;
    el.setAttribute("geometry", {
      primitive: "plane",
      width: 3,
      height: 2,
    });
    el.setAttribute("material", {
      color: "blue",
    });
    this.el.setAttribute("position", {
      x: this.data.pos_x,
      y: 2,
      z: -5,
    });
    el.setAttribute("rotation", {
      x: this.data.rot_x,
      y: this.data.rot_y,
      c: this.data.rot_z,
    });
    const titleEl = document.createElement("a-entity");
    titleEl.setAttribute("custom-text", {
      value: this.data.text,
      pos_x: CENTER_X_POS + this.data.pos_x_text_offset,
      pos_y: this.data.pos_y + this.data.pos_y_text_offset,
    });
    this.el.appendChild(titleEl);
  },
});
