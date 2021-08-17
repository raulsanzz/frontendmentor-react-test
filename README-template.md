# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)
- **Bonus**: When a number changes, make the card flip from the middle

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Done code </h1>
```
```css
I learn from this test about many things in CSS and SCSS.
```
```js
I done complete algorith of timer in Javascript / jequery and complete it.
```
function CountdownTimer(elm, tl, mes) {
    this.initialize.apply(this, arguments);
}
CountdownTimer.prototype = {
    initialize: function(elm, tl, mes) {
        this.elem = document.getElementById(elm);
        this.tl = tl;
        this.mes = mes;
    },
    countDown: function() {
        var timer = '';
        var today = new Date();
        var day = Math.floor((this.tl - today) / (24 * 60 * 60 * 1000));
        var hour = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        var min = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60;
        var sec = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60;
        var me = this;

        if ((this.tl - today) > 0) {
            timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">DAYS</div><span class="number day">' + day + '</span></span>';
            timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">HOURS</div><span class="number hour">' + hour + '</span></span>';
            timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">MINUTES</div><span class="number min">' + this.addZero(min) + '</span></span><span class="number-wrapper"><div class="line"></div><div class="caption">SECONDS</div><span class="number sec">' + this.addZero(sec) + '</span></span>';
            this.elem.innerHTML = timer;
            tid = setTimeout(function() { me.countDown(); }, 10);
        } else {
            this.elem.innerHTML = this.mes;
            return;
        }
    },
    addZero: function(num) { return ('0' + num).slice(-2); }
}

function CDT() {

    // Set countdown limit
    var tl = new Date('2021/11/01 00:00:00');

    // You can add time's up message here
    var timer = new CountdownTimer('CDT', tl, '<span class="number-wrapper"><div class="line"></div><span class="number end">Time is up!</span></span>');
    timer.countDown();
}
window.onload = function() {
    CDT();
}