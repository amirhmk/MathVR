const slide1 = {
  title: "Hello",
  firstPoint: "math is amazing, whatever i just need a longer sentence",
  secondPoint: "Math is difficult, once again I need a longer sentence",
  thirdPoint: "Is math invented or has it always been there",
  next: true,
};
const slide2 = {
  title: "Hello 2",
  firstPoint: "math is amazing, whatever i just need a longer sentence",
  secondPoint: "Math is difficult, once again I need a longer sentence",
  thirdPoint: "Is math invented or has it always been there",
  next: true,
};
const slide3 = {
  title: "Hello 3",
  firstPoint: "math is amazing, whatever i just need a longer sentence",
  secondPoint: "Math is difficult, once again I need a longer sentence",
  thirdPoint: "Is math invented or has it always been there",
  next: false,
  fadeOut: "prob-slides",
  fadeIn: "probability-cards",
};

const slides = [slide1, slide2, slide3];
AFRAME.registerComponent("probability-slides", {
  init: function () {
    const self = this;
    self.currentSlide = 0;
    const el = this.el;
    const numberOfSlides = slides.length;
    el.setAttribute("slide", slide1);
    el.sceneEl.addEventListener("next-slide", function () {
      if (self.currentSlide < numberOfSlides) {
        self.currentSlide += 1;
        el.setAttribute("slide", slides[self.currentSlide]);
      }
    });
  },
});
