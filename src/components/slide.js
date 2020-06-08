AFRAME.registerComponent("slide", {
  schema: {
    title: { type: "string", default: "What is probability?" },
    firstPoint: {
      type: "string",
      default: "math is amazing, whatever i just need a longer sentence",
    },
    secondPoint: {
      type: "string",
      default: "Math is difficult, once again I need a longer sentence",
    },
    thirdPoint: {
      type: "string",
      default: "Is math invented or has it always been there",
    },
    next: { type: "boolean", default: false },
    fadeOut: { type: "string", default: "" },
    fadeIn: { type: "string", default: "" },
  },
  init: function () {
    const el = this.el;
    el.setAttribute("geometry", {
      primitive: "cylinder",
      openEnded: true,
      thetaLength: 100,
      thetaStart: 180,
      radius: 3,
      height: 3,
    });
    el.setAttribute("material", {
      side: "double",
      color: "#0A91F4",
    });
    el.setAttribute("position", { x: 0, y: 2, z: -2.4 });
    el.setAttribute("rotation", {
      x: 0,
      y: 310,
      z: 0,
    });
    this.text = document.createElement("a-entity");
    this.text.setAttribute("slide-text", {
      next: this.data.next,
      title: this.data.title,
      firstPoint: this.data.firstPoint,
      secondPoint: this.data.secondPoint,
      thirdPoint: this.data.thirdPoint,
      fadeIn: this.data.fadeIn,
      fadeOut: this.data.fadeOut,
    });
    el.appendChild(this.text);
  },
  update: function (oldData) {
    if (oldData.firstPoint) {
      this.el.removeChild(this.text);
      this.text = document.createElement("a-entity");
      this.text.setAttribute("slide-text", {
        next: this.data.next,
        title: this.data.title,
        firstPoint: this.data.firstPoint,
        secondPoint: this.data.secondPoint,
        thirdPoint: this.data.thirdPoint,
        fadeOut: this.data.fadeOut,
        fadeIn: this.data.fadeIn,
      });
      this.el.appendChild(this.text);
    }
  },
});
