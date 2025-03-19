/* "The Cookie Show"
  by Journey Ford

  Instructions on page, but users should be able 
  to press the L or l key to turn the light on and off,
  click the screen to change the color of the chips,
  and draw on thecookie by dragging the mouse over it
  and reset the cookie by pressing the e or E keys.
*/

let r = 255;
let g = 255;
let b = 255;

let spotlightOn = false;

//cookie constants and variables, p5.js

//can change
cookieX = 0;
cookieY = 0;
//doesn't change
const cookieSize = 300;
const chipSize = 30;




function setup()
{
  createCanvas(900, 900);  
  background(255,172,203);

  //cookie size and centered
  cookieX = width/2;
  cookieY = height/2;

  //text
  textAlign(CENTER);
  textSize(30);

  //chips to center in the cookie better than before, p5.js
  ellipseMode(CENTER); //centers chips from the middle, gotta find a way to work it better to spread chips

  
}

function draw() 
{
  background(255,172,203);

  fill(170, 51, 106);
  text('Welcome to The Cookie Show!', width/2, 50);
  text('Press the L key to turn the lights on and off', width/2, 80);
  text('Click the screen to change the color of the chocolate chips', width/2, 110);
  text('Drag mouse to draw on cookie, press E key to reset cookie', width/2, 140);


  stroke(139,69,19);
  fill(205,133,63);
  ellipse(cookieX, cookieY, cookieSize, cookieSize); 
  //cookie base centered of canvas


  // chips
  fill(r,g,b); //fill all chips with random colors

  //have to work on chips longer...sadly(gave up)
  drawChip(cookieX, cookieY - 50);
  drawChip(cookieX + 75, cookieY);
  drawChip(cookieX - 100, cookieY);
  drawChip(cookieX + 60, cookieY - 30);
  drawChip(cookieX - 60, cookieY - 40);
  drawChip(cookieX + 40, cookieY + 50);
  drawChip(cookieX - 40, cookieY + 50);
  drawChip(cookieX, cookieY + 60);
  drawChip(cookieX + 80, cookieY + 20);
  drawChip(cookieX + 140, cookieY - 20); 
  //old chips locations- keep for reference
  // ellipse(300,300,30,30);
  // ellipse(370,375,30,30);
  // ellipse(400,310,30,30);
  // ellipse(270,430,30,30);
  // ellipse(250,250,30,30);
  // ellipse(400,430,30,30);
  // ellipse(170,330,30,30);
  // ellipse(190,400,30,30);
  // ellipse(260,350,30,30);
  // ellipse(350,440,30,30);
  // ellipse(340,260,30,30);

//start spotlight off, !spotlight, but show up when keyPressed()
if (spotlightOn)
{
  fill(255, 255, 153, 150); //spotlight
  noStroke();
  triangle(width/2, 0, width/2 - 250, height, width/2 + 250, height); 
  //insight from friend, centering the triangle from the top center to fall over full cookie
}

}

function drawChip(x,y)
{
  ellipse(x, y, chipSize, chipSize);
}

//DRAWING AND RESET
function mouseDragged() //p5.js, only works when mouse is cliked and dragged
{
  let distance = dist(mouseX, mouseY, cookieX, cookieY);//only inside cookie, p5.js
  if (distance < cookieSize/2)
  {
    fill(139,69,19);
    noStroke();
    ellipse(mouseX,mouseY,20,20);//no idea why it's not working
  }
}

//COLOR CHANGING CHIPS
function mousePressed()
{
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
}

//SPOTLIGHT SWTICH
function keyPressed()//should make spotlight turn on or off with "l" key
{
if (key === "l" || key === "L")
{
 spotlightOn = !spotlightOn;
 console.log(spotlightOn);//shows if it's on or not
}
}

// RESET WHEN E IS PRESSED
if (key === "e" || key === "E")
{
fill(205, 133, 63);
ellipse(cookieX, cookieY, cookieSize, cookieSize);
fill(r, g, b);
drawChip(cookieX, cookieY - 50);
drawChip(cookieX + 75, cookieY);
drawChip(cookieX - 100, cookieY);
drawChip(cookieX + 60, cookieY - 30);
drawChip(cookieX - 60, cookieY - 40);
drawChip(cookieX + 40, cookieY + 50);
drawChip(cookieX - 40, cookieY + 50);
drawChip(cookieX, cookieY + 60);
drawChip(cookieX + 80, cookieY + 20);
drawChip(cookieX + 140, cookieY - 20);
}
