/* "The Cookie Show"
  by Journey Ford

*/

class chip
{
constructor(x,y)
{
  this.x = x; //an instances's data and methods
  this.y = y;
  this.r =random(0,255);
  this.g =random(0,255);
  this.b =random(0,255);
  this.size= chipSize;
}
display()
{
  fill(this.r,this.g,this.b);
  noStroke();
  ellipse(this.x, this.y, this.size, this.size);
}
colorChange()
{
  this.r = random(0,255);
  this.g = random(0,255);
  this.b = random(0,255);
}
}

let spotlightOn = false;
//cookie constants and variables, p5.js

//can change
cookieX = 0;
cookieY = 0;
//doesn't change
const cookieSize = 300;
const chipSize = 30;
const chipCount = 20;

let chips = []; //chocolate chips array
function setup()
{
  createCanvas(900, 900);  
  //background(255,172,203);

  //cookie size and centered
  cookieX = width/2;
  cookieY = height/2;

  //text
  textAlign(CENTER);
  textSize(30);

  for (let i = 0; i < chipCount; i++) 
  {
    let radius = random((cookieSize/2) - chipSize/2); //stay inside cookie
    let angle = random(TWO_PI); //random angle in radians, spreads chips all over
    //radius+angle = x and y coordinates, horizontal and vertical offset
    let x = cookieX + cos(angle)*radius; //random coordinates inside cookie
    let y = cookieY + sin(angle)*radius;
    chips.push(new chip(x,y)); //creates new chip, adds to array
  }

  
}
function draw() 
{
  background(255,172,203);

  fill(170, 51, 106);
  text('Welcome to The Cookie Show!', width/2, 50);
  text('Press the L key to turn the lights on and off', width/2, 80);
  text('Click the screen to change the color of the chocolate chips', width/2, 110);
  text('Press B key to make chips bigger', width/2, 140);
  text('Press S key to make chips smaller', width/2, 170);
  text('Press E key to reset cookie', width/2, 200);


  stroke(139,69,19);
  fill(205,133,63);
  ellipse(cookieX, cookieY, cookieSize, cookieSize); 



  // chips
  //fill(r,g,b); //fill all chips with random colors
  for (let i = 0; i<chips.length; i++)
  {
    chips[i].display();
  }

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

//COLOR CHANGING CHIPS
function mousePressed()
{
for (let i = 0; i<chips.length; i++)
{
  chips[i].colorChange();
}
}
//spotlight with l key
function keyPressed() {
  if (key === "l" || key === "L") 
  {
  spotlightOn = !spotlightOn;
  console.log("Spotlight toggled:", spotlightOn);
  }
  
  //reset with e key
  if (key === "e" || key === "E") 
  {
    chips = [];
    for (let i = 0; i < chipCount; i++) 
    {
      let radius = random((cookieSize/2)-chipSize/2);
      let angle = random(TWO_PI);
      let x = cookieX + cos(angle)*radius;
      let y = cookieY + sin(angle)*radius;
      chips.push(new chip(x,y));
    }
  }
  //make chips bigger with b key
  if (key === "b" || key === "B") 
  {
    for (let i = 0; i < chips.length; i++) {
      if (random() < 0.5) {
        chips[i].size += 5;
      }
    }
  }
  //make chips smaller with s key
  if (key === "s" || key === "S") 
  {
    for (let i = 0; i < chips.length; i++) {
      if (random() < 0.5) {
        chips[i].size = max(5, chips[i].size - 5);
      }
    }
  }
}
