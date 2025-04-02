/* "The Cookie Show"
  by Journey Ford

  Instructions on page, but users should be able 
  to press the L or l key to turn the light on and off,
  click the screen to change the color of the chips,
  and draw on the cookie by dragging the mouse over it
  and reset the cookie by pressing the e or E key.
*/

let r = 255;
let g = 255;
let b = 255;

let spotlightOn = false;
let cookieCanvas;

//cookie constants and variables, p5.js

//can change
let cookieX = 0;
let cookieY = 0;
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
  ellipseMode(CENTER);
  
  //graphics buffer, separate from main canvas and creates a clear canvas to draw on above the cookie, p5.js
  cookieCanvas = createGraphics(width, height);
  cookieCanvas.clear();
  
}

function draw() 
{
  background(255,172,203);

  fill(170, 51, 106);
  text('Welcome to The Cookie Show!', width/2, 50);
  text('Press the L key to turn the lights on and off', width/2, 80);
  text('Click the screen to change the color of the chocolate chips', width/2, 110);
  text('Drag mouse to draw on cookie, press E key to reset cookie', width/2, 140);

  //cookie base centered of canvas
  stroke(139,69,19);
  fill(205,133,63);
  ellipse(cookieX, cookieY, cookieSize, cookieSize); 

  //CHIPS
  fill(r,g,b); //fill all chips with random color

  drawChip(cookieX-90, cookieY-90);
  drawChip(cookieX-60, cookieY-30);
  drawChip(cookieX-30, cookieY+75);
  drawChip(cookieX-80, cookieY+80);
  drawChip(cookieX+80, cookieY+80);
  drawChip(cookieX-100, cookieY+20);
  drawChip(cookieX+100, cookieY+20);
  drawChip(cookieX-40, cookieY+40);
  drawChip(cookieX-40, cookieY+40);
  drawChip(cookieX+50, cookieY-80); 

image(cookieCanvas, 0, 0); //draws image of invisible canvas that can be drawn on, p5.js

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

//DRAWING
function mouseDragged() //p5.js, only works when mouse is cliked and dragged
{
  let distance = dist(mouseX, mouseY, cookieX, cookieY);//only inside cookie coordinates, p5.js
  if (distance < cookieSize/2)
  {
    cookieCanvas.fill(139,69,19);
    cookieCanvas.noStroke();
    cookieCanvas.ellipse(mouseX,mouseY,10,10);
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
//ERASE KEY
if (key === "e" || key === "E")
  {
  cookieCanvas.clear() || drawChip(0,0,0); //clears drawing on canvas made, p5.js, couldn't reset chip color back to white 
  }
}