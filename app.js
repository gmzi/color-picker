// Change background color when moving the cursor (Unit 4.3.8).
/* I'm trying to build some logic to have all colors with just moving the cursor, 
I've managed to make full red (255, 0, 0) and full blue (0, 0, 255) but couldn't 
make full magenta *****(255, 0, 255), */

/* TODO 1: for the magenta, divide the screen in for, and the center of the screen is magenta. 
To divide by four: 
const middleWidht = width / 2;
const middleHeight = height / 2;
and go from there. The closest to the center point, the more red and blue

TODO 2: cyan and tourquoise missing. Get them.  
*/

const body = document.querySelector('body');
const h4 = document.querySelector('h4');
const second = document.querySelector('.second');

body.addEventListener('mousemove', function (e) {
  // make the color:
  h4.classList.add('hide');
  second.classList.add('hide');
  let width = Math.round((e.pageX * 255) / window.innerWidth);
  let height = Math.round((e.pageY * 255) / window.innerHeight);

  let diagonal = Math.round(width + height / 255);
  let r = 255 - diagonal;
  let g = width - height;
  let b = Math.round(0 + width + (0 + height) - diagonal);

  if (g < 0) {
    g = g - g * 2;
    b = width;
  }

  // values assignment:
  let color = `rgb(${r}, ${g}, ${b})`;
  body.style.backgroundColor = color;
});

// Copy color to clipboard:
body.addEventListener('dblclick', function (e) {
  alert(`${body.style.backgroundColor}`);
});
