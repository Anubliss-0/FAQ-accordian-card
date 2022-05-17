const questionBoxes = document.querySelectorAll(`.q`);

function closeAll() {
  questionBoxes.forEach((box) => {
    box.classList.remove(`active`);
    console.log(`closing`);
  });
}

questionBoxes.forEach((answer) => {
  answer.addEventListener(`click`, function () {
    closeAll();
    this.classList.toggle(`active`);
  });
});
