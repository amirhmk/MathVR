AFRAME.registerComponent("button", {
  schema: {
    value: { type: "string", default: "button" },
    height: { type: "number", default: 0.5 },
    widthText: { type: "number", default: 4 },
    borderRadius: { type: "number", default: 0 },
    colorPrimary: { type: "string", default: "#8f3d3d" },
    colorSecondary: { type: "string", default: "#2cc0f2" },
  },
  init: function () {
    const el = this.el;
    const {
      height,
      value,
      widthText,
      colorPrimary,
      colorSecondary,
      borderRadius,
    } = this.data;
    el.setAttribute("geometry", {
      primitive: "plane",
      height: height,
      width: 1.5,
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
      width: widthText,
    });
    el.setAttribute("class", "clickable");
    el.addEventListener("mouseenter", function () {
      el.setAttribute("geometry", { width: 1.6, height: 0.6 });
    });
    el.addEventListener("mouseleave", function () {
      el.setAttribute("geometry", { width: 1.5, height: height });
    });
  },
});
