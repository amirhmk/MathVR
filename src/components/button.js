AFRAME.registerComponent("button", {
  schema: {
    value: { type: "string", default: "button" },
    height: { type: "number", default: 0.5 },
    width: { type: "number", default: 4 },
  },
  init: function () {
    const el = this.el;
    const { height, value, width } = this.data;
    el.setAttribute("geometry", {
      primitive: "plane",
      height: height,
      width: 1.5,
    });

    el.setAttribute("material", {
      shader: "buttonShader",
      borderRadius: 0.28,
      opacity: 1,
      borderWidth: 0.02,
    });

    el.setAttribute("text", {
      value: value,
      align: "center",
      width: width,
    });
  },
});
