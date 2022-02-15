let moneySlider = document.getElementById("money");
let timeSlider = document.getElementById("time");

function countBySlider(element, modif) {
  let parent = element.parentElement.classList[1];
  let parentBlock = document.querySelector("." + parent);
  let output = parentBlock.querySelector("span.counter__countings");
  element.oninput = function () {
    output.innerHTML = this.value + modif;
  }
}
countBySlider(moneySlider, " ₽");
countBySlider(timeSlider, " мес.");