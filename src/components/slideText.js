AFRAME.registerComponent("slide-text", {
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
  },
  init: function () {
    const el = this.el;
    const title = document.createElement("a-entity");
    title.setAttribute("text", {
      value: this.data.title,
      align: "center",
      width: 3,
    });
    title.setAttribute("rotation", {
      x: 0,
      y: 45,
      z: 0,
    });
    title.setAttribute("position", {
      x: 0,
      y: 0.35,
      z: 0,
    });
    el.appendChild(title);
    const firstPoint = document.createElement("a-entity");
    firstPoint.setAttribute("text", {
      value: this.data.firstPoint,
      width: 2,
      align: "center",
    });
    firstPoint.setAttribute("rotation", {
      x: 0,
      y: 45,
      z: 0,
    });
    firstPoint.setAttribute("position", {
      x: 0,
      y: 0.1,
      z: 0,
    });
    el.append(firstPoint);
    const secondPoint = document.createElement("a-entity");
    secondPoint.setAttribute("text", {
      value: this.data.secondPoint,
      width: 2,
      align: "center",
    });
    secondPoint.setAttribute("rotation", {
      x: 0,
      y: 45,
      z: 0,
    });
    secondPoint.setAttribute("position", {
      x: 0,
      y: -0.15,
      z: 0,
    });
    el.append(secondPoint);
    const thirdPoint = document.createElement("a-entity");
    thirdPoint.setAttribute("text", {
      value: this.data.thirdPoint,
      width: 2,
      align: "center",
    });
    thirdPoint.setAttribute("rotation", {
      x: 0,
      y: 45,
      z: 0,
    });
    thirdPoint.setAttribute("position", {
      x: 0,
      y: -0.4,
      z: 0,
    });
    el.append(thirdPoint);
    if (this.data.next) {
      const button = document.createElement("a-entity");
      button.setAttribute("button", { value: "next" });
      el.appendChild(button);
    }
  },
});
