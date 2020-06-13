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
    fadeOut: { type: "string", default: "" },
    fadeIn: { type: "string", default: "" },
  },
  init: function () {
    const self = this;
    const el = this.el;
    const title = document.createElement("a-entity");
    title.setAttribute("text", {
      value: this.data.title,
      color: "grey",
      align: "center",
      font: "https://cdn.aframe.io/fonts/mozillavr.fnt",
      width: 3,
    });
    title.setAttribute("rotation", {
      x: 0,
      y: 50,
      z: 0,
    });
    title.setAttribute("position", {
      x: 0,
      y: 0.45,
      z: 0,
    });
    el.appendChild(title);
    const { firstPoint, secondPoint, thirdPoint } = this.data;
    const points = [firstPoint, secondPoint, thirdPoint];
    const positions = [0.1, -0.15, -0.4];
    self.text(points, positions);
    if (this.data.next) {
      const button = document.createElement("a-entity");
      button.setAttribute("button", {
        value: "Next",
        height: 0.2,
        width: 0.5,
        textWidth: 1.5,
        colorPrimary: "#7BC1F4",
        colorSecondary: "#CDFFA2",
      });
      button.setAttribute("position", {
        y: -0.65,
      });
      button.setAttribute("rotation", {
        y: 50,
      });
      button.addEventListener("click", function () {
        button.emit("next-slide");
      });
      el.appendChild(button);
    } else {
      const button = document.createElement("a-entity");
      button.setAttribute("button", {
        value: "Animation",
        height: 0.2,
        width: 0.5,
        textWidth: 1.5,
        colorPrimary: "#7BC1F4",
        colorSecondary: "#CEFFA2 ",
      });
      button.setAttribute("position", {
        y: -0.65,
      });
      button.setAttribute("rotation", {
        y: 50,
      });
      const fadeOut = this.data.fadeOut;
      const fadeIn = this.data.fadeIn;
      button.addEventListener("click", function () {
        console.log(fadeOut);
        button.emit("transition", {
          fadeOut: fadeOut,
          fadeIn: fadeIn,
        });
      });
      el.appendChild(button);
    }
  },
  text: function (points, position) {
    const el = this.el;
    for (let index = 0; index < points.length; index++) {
      const point = document.createElement("a-entity");
      point.setAttribute("text", {
        value: points[index],
        width: 1.8,
        font: "https://cdn.aframe.io/fonts/DejaVu-sdf.fnt",
        align: "center",
      });
      point.setAttribute("rotation", {
        x: 0,
        y: 50,
        z: 0,
      });
      point.setAttribute("position", {
        x: 0,
        y: position[index],
        z: 0,
      });
      el.append(point);
    }
  },
});
