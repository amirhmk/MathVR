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
    type: {
      type: "string",
      default: "",
    },
  },
  init: function () {
    const el = this.el;
    const {
      pos_x,
      pos_y,
      rot_x,
      rot_y,
      rot_z,
      text,
      pos_x_text_offset,
      pos_y_text_offset,
      type,
    } = this.data;
    el.setAttribute("geometry", {
      primitive: "plane",
      width: 3,
      height: 2,
    });
    el.setAttribute("material", {
      color: "blue",
    });
    this.el.setAttribute("position", {
      x: pos_x,
      y: 2,
      z: -5,
    });
    el.setAttribute("rotation", {
      x: rot_x,
      y: rot_y,
      c: rot_z,
    });
    const titleEl = document.createElement("a-entity");
    titleEl.setAttribute("custom-text", {
      value: text,
      pos_x: CENTER_X_POS + pos_x_text_offset,
      pos_y: pos_y + pos_y_text_offset,
    });
    titleEl.setAttribute("id", `card_text_${type}`);
    this.el.appendChild(titleEl);
  },
});
