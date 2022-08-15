# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard
- **Bonus**: Complete the challenge with just HTML and CSS

### Screenshot

![](images/annually.png)
![](images/mobile01.png)

### Links

- Solution URL: (https://github.com/AlgirdasU/Pricing-component-with-toggle)
- Live Site URL: (https://thriving-treacle-55cc3c.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- SCSS
- JS

### What I learned

How to make a toggle that can switch cards.

To see how you can add code snippets, see below:

```html
<div class="pricing__toggle-box">
    <input type="checkbox" id="switch" class="pricing__checkbox" />
    <label for="switch" class="pricing__switch"></label>
</div>
```
```css
.pricing__switch {
    display: block;
    width: 5.4rem;
    height: 3rem;
    background: linear-gradient(
      to right bottom,
      var(--Linear-Gradient-light),
      var(--Linear-Gradient-dark)
    );
    border-radius: 10rem;
    position: relative;
    cursor: pointer;
  }

  // knob
  .pricing__switch:after {
    content: "";
    width: 2.2rem;
    height: 2.2rem;
    top: 0.4rem;
    left: 0.4rem;
    background: #fff;
    position: absolute;
    border-radius: 10rem;
    transition: 0.2s all;
  }

// you can add any color
  .pricing__switch:hover {
    background: var(--toggle-gradient-dark);
  }

  // tacky knob
 .pricing__switch:active:after {
    width: 2.2rem;
   }

  .pricing__checkbox[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
    position: absolute;
  }

 .pricing__checkbox:checked + .pricing__switch:after {
    left: calc(100% - 0.3rem);
    transform: translateX(-100%);
  }
```

### Useful resources

- https://alvarotrigo.com/blog/toggle-switch-css/ - 20 Toggle Switches. Pure CSS examples.

## Author

- Website - [Algirdas Urbonavicius](https://github.com/AlgirdasU/Pricing-component-with-toggle)
- Frontend Mentor - [@AlgirdasU](https://www.frontendmentor.io/profile/AlgirdasU)
- Twitter - [@AlgirdasDdd](https://twitter.com/algirdasddd)


## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
