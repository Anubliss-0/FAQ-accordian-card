const questionBoxes = document.querySelectorAll(`.q`);

function closeAll() {
  questionBoxes.forEach((box) => {
    box.classList.remove(`active`);
    console.log(`closing`);
  });
}

questionBoxes.forEach((answer) => {
  answer.addEventListener(`click`, function () {
    if (this.classList.contains(`active`)) {
      this.classList.remove(`active`);
    } else {
      closeAll();
      this.classList.toggle(`active`);
    }
  });
});
