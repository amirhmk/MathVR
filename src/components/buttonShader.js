AFRAME.registerShader("buttonShader", {
  schema: {
    active: { type: "number", is: "uniform", default: 0 },
    brightness: { type: "number", is: "uniform", default: 0.3 },
    borderWidth: { type: "number", is: "uniform", default: 0.004 },
    borderRadius: { type: "number", is: "uniform", default: 0.15 },
    colorPrimary: {
      type: "color",
      is: "uniform",
      default: "blue",
    },
    colorSecondary: {
      type: "color",
      is: "uniform",
      default: "green",
    },
    midSection: { type: "number", is: "uniform", default: 0 },
    opacity: { type: "number", is: "uniform", default: 1 },
    ratio: { type: "number", is: "uniform", default: 0.5 },
    transparent: { default: true },
  },

  vertexShader: require("./shaders/panel.vert.glsl"),

  fragmentShader: require("./shaders/panel.frag.glsl"),
});
