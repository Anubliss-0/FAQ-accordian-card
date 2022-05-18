# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Links

- Solution URL: [https://github.com/Anubliss-0/FAQ-accordian-card]
- Live Site URL: [https://anubliss-0.github.io/FAQ-accordian-card/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla Javascript
- Coffee

### What I learned

Used if and else statements for the first time for this project.

```js
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
```

### Continued development

Keep chipping away at Javascript!
