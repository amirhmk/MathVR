AFRAME.registerComponent("button", {
  schema: {
    value: { type: "string", default: "button" },
    height: { type: "number", default: 0.5 },
    width: { type: "number", default: 1.5 },
    textWidth: { type: "number", default: 4 },
    borderRadius: { type: "number", default: 0 },
    colorPrimary: { type: "string", default: "#8f3d3d" },
    colorSecondary: { type: "string", default: "#2cc0f2" },
    class: { type: "string", default: "" },
  },
  init: function () {
    const el = this.el;
    const {
      width,
      height,
      value,
      textWidth,
      colorPrimary,
      colorSecondary,
      borderRadius,
    } = this.data;
    el.setAttribute("geometry", {
      primitive: "plane",
      height: height,
      width: width,
    });

    el.setAttribute("material", {
      shader: "buttonShader",
      colorPrimary: colorPrimary,
      colorSecondary: colorSecondary,
      borderRadius: borderRadius,
      opacity: 1,
      borderWidth: 0.02,
    });

    el.setAttribute("text", {
      value: value,
      align: "center",
      width: textWidth,
    });
    el.setAttribute("class", `${this.data.class} clickable`);
    el.addEventListener("mouseenter", function () {
      el.setAttribute("geometry", {
        width: width * 1.075,
        height: height * 1.001,
      });
    });
    el.addEventListener("mouseleave", function () {
      el.setAttribute("geometry", { width: width, height: height });
    });
  },
});
