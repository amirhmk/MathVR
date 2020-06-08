const slide1 = {
  title: "What is Randomness?",
  firstPoint:
    "Randomness describes an apparent lack of pattern in a chain of events.",
  secondPoint:
    "For example, when throwing a dice, it is nearly impossible to predict the outcome of the throw.",
  thirdPoint: "Another example, is the trajectory of flying insects.",
  next: true,
};
const slide2 = {
  title: "What is Probability?",
  firstPoint:
    "Probability is a field of Mathematics that helps us make sense of randomness",
  secondPoint: "It studies how likely an event is to occur or not.",
  thirdPoint: "Probability is a number between 0 and 1.",
  next: true,
};
const slide3 = {
  title: "Dice Throwing Experiment",
  firstPoint:
    "To illustrate our previous points, we will run a random experiment.",
  secondPoint:
    "We will throw dice and observe how the outcomes converge to a uniform distibution.",
  thirdPoint: 'Press "Animation" to get started',
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
