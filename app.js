// Change background color when moving the cursor (Unit 4.3.8).
/* I'm trying to build some logic to have all colors with just moving the cursor, 
I've managed to make full red (255, 0, 0) and full blue (0, 0, 255) but couldn't 
make full magenta (0, 255, 0), I guess the problem is where `help` commments
are, but honestly I'm lost */

const body = document.querySelector('body');
body.addEventListener('mousemove', function (e) {
  let width = Math.round((e.pageX * 255) / window.innerWidth);
  let height = Math.round((e.pageY * 255) / window.innerHeight);
  // getting lost here:
  let diagonal = Math.round(width + height / 255);
  let r = 255 - diagonal;
  let g = width - height;
  let b = Math.round(0 + width + (0 + height) - diagonal);

  if (g < 0) {
    g = g - g * 2;
    b = width;
  }

  let color = `rgb(${r}, ${g}, ${b})`;
  body.style.backgroundColor = color;
});

// Copy color to clipboard:
body.addEventListener('click', function (e) {
  console.log(body.style.backgroundColor);
});
