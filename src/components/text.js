// TODO Remove this comment later on
/* eslint-disable no-unused-vars */
AFRAME.registerComponent("custom-text", {
  schema: {
    value: {
      type: "string",
      default: "",
    },
    width: {
      type: "number",
      default: 10,
    },
    height: {
      type: "number",
      default: 10,
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
      color: this.data.color,
      width: "auto",
      height: "auto",
    });
    el.setAttribute("text", {
      value: this.data.value,
      font: "https://cdn.aframe.io/fonts/mozillavr.fnt",
      width: 4,
    });
    el.setAttribute("position", {
      x: this.data.pos_x,
      y: this.data.pos_y,
      c: this.data.pos_z,
    });
    el.setAttribute("material", {
      opacity: 0,
      visible: true,
    });
    el.setAttribute("class", "clickable");
    // Event listener for click
    el.addEventListener("click", function () {
      el.emit("remove", { text: "hellowordl" });
    });
  },
  remove: function () {
    console.log("bye");
  },
});
